import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { QuizResultPageComponent } from './components/quiz/quiz-result-page/quiz-result-page.component';
import { HomeComponent } from './components/navigation/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'quiz', component:QuizComponent},
  {path:'quiz-result', component:QuizResultPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
