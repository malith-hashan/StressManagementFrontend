export interface AnswerArray{
  answerName:string;
  answerValue:number;
}



export interface ServeyModle{
id:string;
userid:number;
userAnswerdQuection:AnswerArray[];
date:string;
userResult: EResult;
}

enum EResult{
  HIGH_STRESS,
  MEDIUM_STRESS,
  LOW_STRESS,
  NORMAL

}


