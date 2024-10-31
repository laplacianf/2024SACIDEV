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
        problem: "SAC의 대표 연구회 부스는 단연 IDEV 부스이다. IDEV 부스는 SAC 1일차, 2일차 양일간 운영된다. 길쭉이는 SAC 기간 동안 IDEV 부스에 방문한 학생이 총 몇 명이나 되는지 궁금해졌다. 길쭉이를 도와 IDEV 부스에 방문한 학생 수를 구하는 프로그램을 작성하자. 단, IDEV 부스는 컨텐츠가 부족하므로 이틀 모두 방문하는 학생은 없다고 가정한다.\n\n첫 번째 입력으로 1일 차에 방문한 학생 수, 두 번째 입력으로 2일 차에 방문한 학생 수가 주어진다.",
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
                input: [406, 523],
                output: "929"
            }
        ]
    },
    {
        problem: "SAC을 즐기고 있는 길쭉이는 지금의 모든 순간을 기억하기 위해 매 시간마다 SAC 시작으로부터 몇 시간이 지났는지를 떠올리고 있다. 길쭉이는 기억력이 좋지 않으므로, 특정 시간이 지난 이후 길쭉이가 지금까지 떠올린 모든 수를 차례로 출력하는 프로그램을 작성하자.\n\n첫 번째 입력으로 SAC 시작으로부터 지난 시간이 주어진다.",
        example: [
            {
                input: [1],
                output: "1"
            },
            {
                input: [3],
                output: "123"
            },
            {
                input: [5],
                output: "12345"
            }
        ],
        test: [
            {
                input: [1],
                output: "1"
            },
            {
                input: [3],
                output: "123"
            },
            {
                input: [5],
                output: "12345"
            },
            {
                input: [11],
                output: "1234567891011"
            }
        ]
    },
    {
        problem: "SAC의 대표 행사인 다양한 클럽 공연은 학생들의 눈과 귀를 즐겁게 해준다. 길쭉이는 클럽 공연을 감상하던 중 모든 곡의 길이가 같다는 사실을 알아냈다. 수가 커지면 연산을 어려워하는 길쭉이를 도와, 곡의 길이와 곡의 수가 주어질 때 공연의 길이를 출력하는 프로그램을 작성하자. 단, 클럽 공연에는 쉬는 시간이 없다고 가정한다.\n\n첫 번째 입력으로 곡의 길이, 두 번째 입력으로 곡의 수가 주어진다.",
        example: [
            {
                input: [2, 3],
                output: "6"
            },
            {
                input: [3, 7],
                output: "21"
            },
            {
                input: [1, 1],
                output: "1"
            }
        ],
        test: [
            {
                input: [2, 3],
                output: "6"
            },
            {
                input: [3, 7],
                output: "21"
            },
            {
                input: [1, 1],
                output: "1"
            },
            {
                input: [32, 46],
                output: "1472"
            },
            {
                input: [5, 4],
                output: "20"
            }
        ]
    },
    {
        problem: "IDEV 부스에 참여하면 하리보 젤리를 받을 수 있다. IDEV 부스에 열심히 참여한 길쭉이는 하리보를 받아 친구들과 나눠 먹으려고 한다. 길쭉이는 공평함을 추구하기 때문에 자신을 포함해서 모든 친구들이 같은 수의 젤리를 먹어야 한다고 생각한다. 길쭉이가 받은 젤리 수와 친구 수가 주어질 때, 길쭉이와 친구들이 먹을 젤리의 최댓값을 구하는 프로그램을 작성하자. 단, 하나의 젤리를 쪼개서 먹을 수는 없다.\n\n첫 번째 입력으로 길쭉이가 받은 젤리 수, 두 번째 입력으로 길쭉이의 친구 수가 주어진다.",
        example: [
            {
                input: [6, 4],
                output: "1"
            },
            {
                input: [1, 3],
                output: "0"
            }
        ],
        test: [
            {
                input: [10, 5],
                output: "1"
            },
            {
                input: [6, 4],
                output: "1"
            },
            {
                input: [1, 3],
                output: "0"
            },
            {
                input: [46, 3],
                output: "11"
            }
        ]
    },
    {
        problem: "친구들과 하리보 젤리를 맛있게 나눠먹던 중, 길쭉이는 버려지는 젤리가 너무 아깝다는 생각을 했다. 몇 명의 친구가 있어야 버려지는 젤리가 없이 모든 젤리를 나누어 먹을 수 있을까? 길쭉이가 가지고 있는 젤리의 개수가 주어질 때, 버려지는 젤리가 없도록 하기 위해서 필요한 친구 수를 크기 순으로 모두 출력하는 프로그램을 작성하자.\n\n첫 번째 입력으로 길쭉이가 가지고 있는 젤리 수가 주어진다.",
        example: [
            {
                input: [5],
                output: "04"
            },
            {
                input: [6],
                output: "0125"
            }
        ],
        test: [
            {
                input: [5],
                output: "04"
            },
            {
                input: [6],
                output: "0125"
            },
            {
                input: [36],
                output: "012358111735"
            }
        ]
    },
    {
        problem: "",
        example: [],
        test: [
            {
                input: [],
                output: "Scientia, Absoluta Fabulosa."
            }
        ]
    },
    {
        problem: "",
        example: [],
        test: [
            {
                input: [],
                output: "Scientia, Absoluta Fabulosa."
            }
        ]
    },
    {
        problem: "문가온 바보",
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
    }
]