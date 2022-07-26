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
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> =[];

  constructor( private trackService: TracksService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  
  }

  async loadDataAll(): Promise<any> {
   this.tracksTrending = await this.trackService.getAllTracks$().toPromise();
  //  this.tracksRandom = await this.trackService.getAllRandom$().toPromise();
  }

  loadDataRandom(): void{
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[] )=>{
        console.log('arrays tracks ts------>', response)
      this.tracksRandom = response
    }
    // , err =>{
      // alert('Error de conexion')
      // console.log('Error de conexion');
      // 
    // }
    )
  }

  ngOnDestroy(): void{
    // this.listObservers$.forEach(u => u.unsubscribe());
  }

}
