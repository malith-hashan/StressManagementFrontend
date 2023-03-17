export interface Answer {
  id:string;
  answerNo: number;
  answerText: string;
  weight: number;
 }

export interface IQuectionNew {
  id: string;
  quectionNo: number;
  quectionName: string;
  date: string;
   answers: Answer[];
}
