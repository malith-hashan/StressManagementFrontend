// export interface AnswerArray{
//   quectionMap :Map<string,number>

// }



export interface ServeyCreateModle {

  userId: string;
  answers: Array<Map<string, number>>;

}

export interface AnswerModel {
  quectionName: string,
  answer: number
}