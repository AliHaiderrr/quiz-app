import { Questiontype, quiztype } from './../Types/type';
import React from 'react';
import axios from "axios";
 
let shafalArray =(array: any[] )=>
  [...array].sort(()=> Math.random() - 0.5)  

export  const Service = async(totalQuestion: number, level: string):Promise<quiztype[]>  => {

const  {data: responce} = await axios.get(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`);

let results = await responce.results


const quiz:quiztype[] = results.map((QuestionObj: Questiontype)=>{


    return {
      question: QuestionObj.question,
      answer: QuestionObj.correct_answer,
      correct_answer: QuestionObj.correct_answer,
      option: shafalArray(QuestionObj.incorrect_answers.concat(QuestionObj.correct_answer))
    }
})


return quiz

        
}


