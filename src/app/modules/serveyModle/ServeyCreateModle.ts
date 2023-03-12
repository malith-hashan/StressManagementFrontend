export interface AnswerArray{
  quectionName:string;
  answerValue:number;
}



export interface ServeyCreateModle{

  userid:number;
  userAnswerdQuection:AnswerArray[];

}
