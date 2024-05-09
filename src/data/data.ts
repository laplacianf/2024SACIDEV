interface IProblem {
    problem: string
    example: {
        input: number[]
        output: string
    }[]
    test: {
        input: number[]
        output: string
    }[]
}

export const problemInfo: IProblem[] = [
    {
        problem: "정수 두 개를 입력으로 받아 두 수의 합을 출력하시오.",
        example: [
            {
                input: [3, 2],
                output: "5"
            }
        ],
        test: [
            {
                input: [3, 2],
                output: "5"
            },
            {
                input: [46, 92],
                output: "138"
            },
            {
                input: [-329, 329],
                output: "0"
            }
        ]
    },
    {
        problem: "어떤 N개의 정수가 입력으로 주어질 때, 모든 수들의 합을 구하여 출력하시오.\n첫 번째 입력으로 N이 주어진다. N은 합을 구해야 할 정수의 개수이다. 두 번째 입력부터는 각 정수가 주어진다.",
        example: [
            {
                input: [3, 2, 3, 5],
                output: "10"
            },
            {
                input: [1, 1],
                output: "1"
            }
        ],
        test: [
            {
                input: [3, 2, 3, 5],
                output: "10"
            },
            {
                input: [4, 84, 46, 46, 92],
                output: "268"
            },
            {
                input: [3, 1, -329, 329],
                output: "1"
            }
        ]
    },
    {
        problem: "N번째 피보나치 수를 출력하시오.",
        example: [
            {
                input: [1],
                output: "1"
            },
            {
                input: [2],
                output: "1"
            },
            {
                input: [3],
                output: "2"
            },
            {
                input: [8],
                output: "21"
            }
        ],
        test: [
            {
                input: [8],
                output: "21"
            },
            {
                input: [3],
                output: "2"
            },
            {
                input: [12],
                output: "144" 
            }
            // {
            //     input: [1],
            //     output: "1"
            // },
            // {
            //     input: [2],
            //     output: "1"
            // }
        ]
    },
    {
        problem: "N개의 정수를 입력으로 받아 최댓값을 출력하시오.",
        example: [
            {
                input: [3, 2, 3, 5],
                output: "5"
            },
            {
                input: [8, 10, 10, 10, 10, 11, 10, 10, 10],
                output: "11"
            },
            {
                input: [1, 3],
                output: "3"
            }
        ],
        test: [
            {
                input: [3, 2, 3, 5],
                output: "5"
            },
            {
                input: [8, 10, 10, 10, 10, 11, 10, 10, 10],
                output: "11"
            },
            {
                input: [1, 3],
                output: "3"
            },
            {
                input: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                output: "12"
            }
        ]
    },
    {
        problem: "'SAF'를 출력하시오.",
        example: [
            {
                input: [],
                output: "SAF"
            }
        ],
        test: [
            {
                input: [],
                output: "SAF"
            },
            {
                input: [],
                output: "SAF"
            }
        ]
    },
    {
        problem: "이번 SAF의 슬로건을 출력하시오.",
        example: [],
        test: [
            {
                input: [],
                output: "Scientia, A, Fabulosa"
            }
        ]
    },
    {
        problem: "정수 N을 입력으로 받아 N 이하의 가장 큰 소수를 출력하시오.",
        example: [
            {
                input: [5],
                output: "5"
            },
            {
                input: [25],
                output: "23"
            },
            {
                input: [100],
                output: "97"
            }
        ],
        test: [
            {
                input: [5],
                output: "5"
            },
            {
                input: [25],
                output: "23"
            },
            {
                input: [100],
                output: "97"
            },
            {
                input: [2],
                output: "2"
            },
            {
                input: [4],
                output: "3"
            },
            {
                input: [90],
                output: "89"
            },
            {
                input: [49],
                output: "47"
            }
        ]
    }
]