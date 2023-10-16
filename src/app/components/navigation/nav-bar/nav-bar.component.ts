import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  public musicPlay: boolean = false;

  private audio :HTMLAudioElement

  constructor() {
    this.audio = new Audio('/assets/music/Kajjrat_Nurtas_-_Aurmajjdy_zhurek_75536447.mp3');
    this.audio.loop = true;
  }

  ngOnInit() {
    $('#musicBtn').click((e) => {
      e.preventDefault();
      this.musicPlay ? this.pause() : this.play();
      this.refreshMusicIcon();
    });
  }

  private play = () => this.audio.play();
  private pause = () => this.audio.pause()

  private refreshMusicIcon = () => {
    $('#musicBtn').removeClass(this.getClass())
    this.musicPlay = !this.musicPlay;
    $('#musicBtn').addClass(this.getClass())
  }

  getClass() {
    return this.musicPlay ? 'fa fa-pause' : 'fa fa-play'
  }

}
