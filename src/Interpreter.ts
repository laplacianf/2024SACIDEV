type TokenType = "push" | "jmpb" | "jmpbtmp" | "jmpf" | "add" | "neg" | "dup" | "ascprnt" | "intprnt" | "intinpt" | "swap" | "rtt"

interface Token {
    type: TokenType
    data?: number[]
}

interface ParenToken extends Token {
    type: "jmpbtmp"
    data: number[]
}

export const parse = (code: string) => {
    let pos = 0
    const parenStack: ParenToken[] = []
    const parseResult: Token[] = []

    while (pos < code.length) {
        const current = code[pos]
        
        if (current === "S") {
            if (pos < code.length) pos++
            let num = 0
            while (pos < code.length) {
                if ("SFK!~?[]@*".includes(code[pos])) break
                if (code[pos] === "A") num++
                if (pos < code.length) pos++
            }
            if (pos >= 0) pos--
            parseResult.push({
                type: "push",
                data: [num]
            })
        }
        else if (current === "A") parseResult.push({ type: "add" })
        else if (current === "F") parseResult.push({ type: "neg" })
        else if (current === "K") parseResult.push({ type: "dup" })
        else if (current === "!") parseResult.push({ type: "ascprnt" })
        else if (current === "~") parseResult.push({ type: "intprnt" })
        else if (current === "?") parseResult.push({ type: "intinpt" })
        else if (current === "*") parseResult.push({ type: "swap" })
        else if (current === "@") parseResult.push({ type: "rtt" })
        else if (current === "[") {
            parseResult.push({ type: "jmpb" })
            parenStack.push({ type: "jmpbtmp", data: [parseResult.length - 1, pos] })
        }
        else if (current === "]") {
            if (parenStack.length === 0) throw new Error("Invalid close brackets.")
            const openingParen = parenStack.pop()
            if (openingParen === undefined) continue
            const newPos = openingParen.data[0]
            parseResult[newPos].data ??= []
            const data = parseResult[newPos].data as number[]
            data[0] = parseResult.length

            parseResult.push({ type: "jmpf", data: [newPos - 1] })
        }
        if (pos < code.length) pos++
    }

    if (parenStack.length !== 0) {
        const paren = parenStack.pop()
        if (paren !== undefined) throw new Error("Invalid open brackets.") 
    }

    return parseResult
}

export const execute = (code: string, input: number[]) => {
    const tokens = parse(code)
    const stack: number[] = []
    input.reverse()
    let ans = ""
    let pos = 0
    
    const pop = () => {
        if (stack.length === 0) return 0
        return stack.pop() as number
    }

    const inputPop = () => {
        if (input.length === 0) throw new Error("Input exceeded.")
        return input.pop() as number
    }

    while (pos < tokens.length) {
        const current = tokens[pos]
        if (current.type === "push") stack.push(current.data?.[0] ?? 0)
        else if (current.type === "add") stack.push(pop() + pop())
        else if (current.type === "neg") stack.push(-pop())
        else if (current.type === "dup") stack.push(stack.at(-1) ?? 0)
        else if (current.type === "ascprnt") {
            const temp = pop()
            if (temp < 0) throw new Error("ASCII range error")
            ans += String.fromCharCode(pop())
        }
        else if (current.type === "intprnt") ans += pop().toString()
        else if (current.type === "intinpt") stack.push(inputPop())
        else if (current.type === "swap") {
            const temp = pop()
            stack.push(temp, pop())
        }
        else if (current.type === "rtt") {
            if (stack.length < 3) return
            const temp = [stack.at(-3), stack.at(-2), stack.at(-1)] as number[]
            stack[stack.length - 3] = temp[1]
            stack[stack.length - 2] = temp[2]
            stack[stack.length - 1] = temp[0]
        }
        else if (current.type === "jmpb") {
            const p = pop()
            if (p <= 0) pos = (current.data?.[0] ?? 0) - 1
        }
        else if (current.type === "jmpf") {
            const p = pop()
            if (p > 0) pos = (current.data?.[0] ?? 0) + 1
        }
        
        if (pos < tokens.length) pos++
    }

    return ans
}