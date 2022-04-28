import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/track.model';
import { TracksModule } from '@modules/tracks/tracks.module';
// import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; // TODO: Programacion reactiva!
@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'

  mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    name:'"Getting Over',
    album:'David Guetta)',
    url: '',
    _id: 1,

  }


  constructor(private multiMediaService: MultimediaService) { }

  // ngOnInit(): void {
  //   const observer1$ = this.multiMediaService.callback.subscribe(
  //     (response: TracksModule )=>{
  //       console.log('recibiendo track.....', response)
  //     }
  //   )

  // }

  ngOnInit(): void {
    const observer1$ = this.multiMediaService.playerStatus$
    .subscribe(status => this.state = status)
  this.listObservers$ = [observer1$]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
  }


  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this.multiMediaService.seekAudio(percentageFromX)

  }

}
