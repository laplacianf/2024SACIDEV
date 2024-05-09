import { execute } from "./Interpreter"
import { problemInfo } from "./data/data"
import { EventHandler } from "./utils/event"

export const checkValid = (prob: number, code: string) => {
    for (const { input, output } of problemInfo[prob].test) {
        try {
            if (execute(code, [...input]) !== output) return false
        }
        catch (err) {
            EventHandler.trigger("notification", "forbidden", `${err}`)
            return false
        }
    }
    return true
}