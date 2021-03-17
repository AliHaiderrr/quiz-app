import { type } from "node:os"


export type Questiontype ={


    category: string
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}
export type quiztype = {

    question: string,
    correct_answer: string,
    anwser: string,
    option: string[]
    

}

export type QuestionPropstype ={
    question: string,
    option: string[],
    callback: (e: React.FormEvent<EventTarget>, ans: string) => void
}