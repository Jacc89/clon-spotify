import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksTrending: Array<TrackModel> = [];
  tracksRandon: Array<TrackModel> = [];

  listObservers$: Array<Subscription> =[];

  constructor( private trackService: TracksService) { }

  ngOnInit(): void {
  //  const {data} : any =(dataRaw as any).default;
  //   console.log(data);
  // this.mockTracksList = data;

    this.trackService.getAllTracks$()
    .subscribe(response =>{
      console.log('arrays------>',response)
    })
  }

  ngOnDestroy(): void{
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
