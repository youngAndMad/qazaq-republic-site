import { Question } from "./question.interface";

export interface Quiz{
    name: string;
    questions:Question[];
    quration:number;
}