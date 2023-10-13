import { Answer } from "./answer.interface";

export interface Question{
    id : number
    answers:Answer[]
    value: string;
}