import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizResult } from 'src/app/domain/dto/quiz-result.interface';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quiz-result-page',
  templateUrl: './quiz-result-page.component.html',
  styleUrls: ['./quiz-result-page.component.scss']
})
export class QuizResultPageComponent implements OnInit {

  quizResults: QuizResult[] = [];
  sortedQuizResults: QuizResult[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  currentSortColumn: string = ''; 
  isAscending: boolean = true; 

  constructor(
    private quizService: QuizService,
    private activateRoute: ActivatedRoute
  ) {
    }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => {
        let fromQuizSubmission = params['from_quiz_submission']
        this.fetchQuizResults()
        if('yes' == fromQuizSubmission){

        }
      }
    )
  }

  fetchQuizResults() {
    this.quizService.getQuizResults().subscribe((res) => {
      this.quizResults = res;
    });
  }

  checkQuizResultsFromLocalStorage(){
    if(localStorage.getItem('review')){
      let quizResults = []
      // localStorage.setItem('quiz-results' , )
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchQuizResults();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchQuizResults();
  }
}

