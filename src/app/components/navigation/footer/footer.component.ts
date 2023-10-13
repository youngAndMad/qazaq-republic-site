import { Component, inject ,OnInit} from '@angular/core';
import { NumberService } from 'src/app/service/number.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  private numberService = inject(NumberService)

  num: number
  ngOnInit(): void {
    this.num = this.numberService.getRandomInt(1,10000);
  }
  
}
