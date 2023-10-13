import { Component, OnInit,HostListener } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public musicPlay: boolean = false;

  ngOnInit(): void {
    
    $(document).ready(() => {
      const audio = new Audio('/assets/music/Kajjrat_Nurtas_-_Aurmajjdy_zhurek_75536447.mp3');
      audio.loop = true;

      const play = () => {
        audio.play();
      };

      const pause = () => {
        audio.pause();
      };

      $('#musicBtn').click((e) => {
        e.preventDefault();
        if (this.musicPlay) {
          pause();
        } else {
          play();
        }
        $('#musicBtn').removeClass(this.getClass())
        this.musicPlay = !this.musicPlay; 
        $('#musicBtn').addClass(this.getClass())
      });
    });
  }
  getClass() {
    return this.musicPlay ? 'fa fa-pause' : 'fa fa-play'
  }
}
