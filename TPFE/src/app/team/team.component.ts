import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  fakeData = [
    {name: 'Jakub Šimek', img: './assets/img_avatar.png', position: 'Frontend Developer'},
    {name: 'Boris Hvozda', img: './assets/img_avatar.png', position: 'Backend Developer'},
    {name: 'Eduardo Martinez', img: './assets/img_avatar.png', position: 'Not Selected'},
    {name: 'Nikola Zarembova', img: './assets/img_avatar.png', position: 'Not Selected'},
    {name: 'Patricia Hulinova', img: './assets/img_avatar.png', position: 'Not Selected'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
