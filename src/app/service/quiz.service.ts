import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../domain/entity/quiz.interface';

@Injectable({
	providedIn: 'root'
})
export class QuizService {

	constructor(private http: HttpClient) { }

	getQuiz(): Observable<any> {
		return this.http.get('assets/in-memory/quiz.json')
	}
	getQuizResults(): Observable<any> {
		return this.http.get('assets/in-memory/quiz-result.json')
	}
	//   getQuizResults() : Observable<any>{
	//     const review = localStorage.getItem('review')
	//     if(review){
	//       return of()
	//     }
	//     return this.http.get('assets/in-memory/quiz-result.json')
	//   }
}
