export interface Answer {
  answerNo: number;
  answerText: string;
  weight: number;
}

export interface IQuection {
  id: string;
  quectionNo: string;
  quectionName: string;
  date: string;
  answers: Answer[];
}
