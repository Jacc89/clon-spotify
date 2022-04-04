import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {

  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.title)
  }

}
