import { trigger , transition, useAnimation} from '@angular/animations';
import { Component, Input, OnInit,inject } from '@angular/core';
import { scaleIn,scaleOut } from './carousel.animations';
import { Feedback } from 'src/app/domain/entity/feedback.interface';
import { FeedbackService } from 'src/app/service/feedback.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger(
      "slideAnimation", [
        transition("void => *", [
          useAnimation(scaleIn, { params: { time: "500ms" } })
        ]),
        transition("* => void", [
          useAnimation(scaleOut, { params: { time: "500ms" } })
        ]),
      ]
    )
  ]
})
export class CarouselComponent implements OnInit{
  
  @Input() slides: Feedback[]
  private feedbackService = inject(FeedbackService)
  
  currentSlide = 0;

  ngOnInit(): void {
    this.feedbackService.getFeedbackList()
      .subscribe(res => {this.slides = res; console.log(res)})
  }
 
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
   
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
