import { Component, OnInit } from '@angular/core';
import { MusicListService } from './audio-list.service';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.scss']
})
export class AudioListComponent implements OnInit {

  music;
  constructor(private musicListService: MusicListService) { }


  ngOnInit(): void {
  }

  searchSong(value) {
    this.musicListService.getMusicList(value).subscribe(music => {
      this.music = music;
    })
  }
}
