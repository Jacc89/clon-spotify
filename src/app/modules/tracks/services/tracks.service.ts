import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { observable, Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as dataRaw from '../../../data/tracks.json';
@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private readonly URL = environment.api;
  constructor(private http:HttpClient){

  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)

  }

















  // constructor(private http: HttpClient) {
  //   const {data} : any =(dataRaw as any).default;

  //   this.dataTracksTrending$ = of(data);

  //   this.dataTracksRandon$ = new Observable((observer) =>{
  //     const trackExample : TrackModel = {
  //       _id: 9,
  //       name:'leve',
  //       album: 'track',
  //       url:'http://',
  //       cover: ''
  //     }

  //     setTimeout(() => {
  //       observer.next([trackExample])
  //     }, 3500);

  //   })

  // }

  // /**
  //  *
  //  * @returns Devolver todas las canciones! molonas! 🤘🤘
  //  */

  // private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
  //   return new Promise((resolve, reject) => {
  //     const listTmp = listTracks.filter(a => a._id !== id)
  //     resolve(listTmp)
  //   })
  // }

  // /**
  //  * //TODO {data:[..1,...2,..2]}
  //  *
  //  * @returns
  //  */
  // getAllTracks$(): Observable<any> {
  //   return this.http.get(`${this.URL}/tracks`)
  //     .pipe(
  //       map(({ data }: any) => {
  //         return data
  //       })
  //     )
  // }


  // /**
  //  *
  //  * @returns Devolver canciones random
  //  */
  // getAllRandom$(): Observable<any> {
  //   return this.http.get(`${this.URL}/tracks`)
  //     .pipe(
  //       mergeMap(({ data }: any) => this.skipById(data, 2)),
  //       // map((dataRevertida) => { //TODO aplicar un filter comun de array
  //       //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
  //       // })
  //       catchError((err) => {
  //         const { status, statusText } = err;
  //         return of([])
  //       })
  //     )
  // }
}
