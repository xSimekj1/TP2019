import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  openedMeeting;

  meetings = [
    {id: 1, name: 'Zápisnica 1', img: './assets/Zapisnica_c1.pdf'},
    {id: 2, name: 'Zápisnica 2', img: './assets/Zapisnica_c2.pdf'},
    {id: 3, name: 'Zápisnica 3', img: './assets/Zapisnica_c3.pdf'},
    {id: 4, name: 'Zápisnica 4', img: './assets/Zapisnica_c4.pdf'},
    {id: 5, name: 'Zápisnica 5', img: './assets/Zapisnica_c5.pdf'},
    {id: 6, name: 'Zápisnica 6', img: './assets/Zapisnica_c6.pdf'},
    {id: 7, name: 'Zápisnica 7', img: './assets/Zapisnica_c7.pdf'},
    {id: 8, name: 'Zápisnica 8', img: './assets/Zapisnica_c8.pdf'},
    {id: 9, name: 'Zápisnica 9', img: './assets/Zapisnica_c9.pdf'},
    {id: 10, name: 'Zápisnica 10', img: './assets/Zapisnica_c10.pdf'},
  ];

  constructor() { }

  ngOnInit() {
    this.openedMeeting = this.meetings[0];
  }

  openDoc(docId) {
    this.openedMeeting = this.meetings.find(meeting => meeting.id === docId);
  }

  isDocOpened(docId): boolean {
    if (this.openedMeeting.id === docId) {
      return true;
    } else {
      return false;
    }
  }

}
