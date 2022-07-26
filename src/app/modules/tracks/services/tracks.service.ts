import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { Observable, of } from 'rxjs';
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

  private skipById(listTracks: TrackModel[], id: number): Promise<any>{
     return new Promise((resolve, reject)=>{
      const listTemp= listTracks.filter(a=>a._id === 1)
      resolve(listTemp)
     })

  }

   /**
    *
    * @returns Devolver todas las canciones! molonas! 🤘🤘
    */

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data }: any )=>{
        return data
      }),
      map((dataRevertida)=>{
        return dataRevertida.filter((track: TrackModel) => track._id === 1)
      })
          
    )
    
    
    
  }

  /**
  *
  * @returns Devolver canciones random
  */
 getAllRandom$(): Observable<any> {
   return this.http.get(`${this.URL}/tracks`)
     .pipe(
      tap(data => console.log('eerror random', data)),
       mergeMap(({ data }: any) => this.skipById(data, 2)),
      //  map((dataRevertida) => { //TODO aplicar un filter comun de array
      // //  return dataRevertida.filter((track: TrackModel) => track._id !== 1)
      // }),
       catchError((err) => {
        console.log('algo pasoo revisarr', err);
         const { status, statusText } = err;
         return of([])
        })
     )
      }}




    // function getAllRandon$() {
        // throw new Error('Function not implemented.');
      // }

    // }




