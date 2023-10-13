import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../domain/entity/feedback.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) {
  }

  getFeedbackList():Observable<Feedback[]>{
    return this.http.get<Feedback[]>('assets/in-memory/feedbacks.json')
  }
  
}
