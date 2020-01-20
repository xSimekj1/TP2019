import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  meetings = [
    {id: 1, name: 'Zápisnica 1', img: './assets/Zapisnica_c1.pdf'},
    {id: 2, name: 'Zápisnica 2', img: './assets/Zapisnica_c2.pdf'},
    {id: 3, name: 'Zápisnica 3', img: './assets/Zapisnica_c3.pdf'},
  ];

  constructor() { }

  ngOnInit() {
  }

  openDoc(docId) {
  }

}
