import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError(): any {
    const elNative = this.elHost.nativeElement
    console.log('🔴 Esta imagen revento -->', this.elHost);
    elNative.src = this.customImg
    // elNative.src ='../../../assets/img/img-broken.jpg'

  }

  constructor(private elHost: ElementRef) {
    console.log('🔴 Esta imagen revento -->', this.elHost);
   }

}
