import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/domain/entity/question.interface';
import { Quiz } from 'src/app/domain/entity/quiz.interface';
import { QuizService } from 'src/app/service/quiz.service';
import { Choose } from 'src/app/domain/dto/choose.interface';
import { QuestionReview } from 'src/app/domain/dto/question-review.interface';
import { Router } from '@angular/router';

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

	quiz: Quiz
	selectedAnswers: Choose[];
	review: QuestionReview[]

	isReview: boolean = false
	total: number;

	username: string;

	constructor(
		private quizService: QuizService,
		private route: Router
	) {
		this.selectedAnswers = []
		this.review = []
		this.total = 0
	}

	//   ngOnInit(): void {
	//     let quizSubmission = localStorage.getItem('quiz-submission')
	//     if(quizSubmission){
	//       this.review = JSON.parse(quizSubmission)
	//       this.isReview = true
	//     }else{
	//       this.quizService.getQuiz().subscribe(res => {
	//         this.quiz = res
	//       })  
	//     }
	//   }
	ngOnInit(): void {
		this.quizService.getQuiz().subscribe(res => {
			this.quiz = res
		})
	}

	submit() {
		this.selectedAnswers.forEach(
			sa => {
				let correct = this.getValidAnswerId(this.findQuestion(sa.questionId))
				if (sa.answerId === correct) {
					this.total = this.total + 1
				}
				this.review.push(
					{
						questionId: sa.questionId,
						userAnswer: sa.answerId,
						correctAnswer: correct
					}
				)
			}
		)
		localStorage.setItem('quiz-submission', JSON.stringify(this.review))
		this.isReview = true
	}

	choose(questionId: number, answerId: number) {
		this.selectedAnswers = this.selectedAnswers.filter(
			se => se.questionId !== questionId
		);

		this.selectedAnswers.push({ questionId, answerId })
	}

	getValidAnswerId(question: Question) {
		return question.answers.filter(a => a.isCorrect === true)[0].id
	}

	findQuestion(id: number) {
		return this.quiz.questions.find(q => q.id == id)!
	}

	goToResultPage() {
		let review = [...this.review, { total: this.total }]
		localStorage.setItem('review', JSON.stringify(review))
		this.route.navigate(['/quiz-result'], { queryParams: { 'from_quiz_submission': 'yes' } })
	}

}
