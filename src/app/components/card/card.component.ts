import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() music;
  player = new Audio;
  playerState = false
  currSong
  
  constructor() { }

  ngOnInit(): void {}

  playSong(audio) {
    if(this.playerState) this.stopSong(this.currSong)
    this.currSong = audio
    this.player.src = audio.previewUrl;
    this.player.play();
  }
  stopSong(audio) {
    this.player.pause();
    this.playerState = false
  }
}