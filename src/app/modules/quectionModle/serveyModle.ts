export interface AnswerArray{
  answerName:string;
  answerValue:number;
}



export interface ServeyModle{
id:string;
userId:string;
  userAnswerdQuection:number[];
  userResult: EResult;
}

enum EResult{
  HIGH_STRESS=0,
  MEDIUM_STRESS=1,
  LOW_STRESS=2,
  NORMAL=3,

}


