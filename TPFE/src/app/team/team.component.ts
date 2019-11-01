import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  memeberSelected;

  fakeData = [
    {id: 1, name: 'Jakub Šimek', img: './assets/img_avatar.png', position: 'Frontend Developer', description: 'Popis'},
    {id: 2, name: 'Boris Hvozda', img: './assets/img_avatar.png', position: 'Backend Developer', description: 'Popis'},
    {id: 3, name: 'Eduardo Martinez', img: './assets/img_avatar.png', position: 'Not Selected', description: 'Popis'},
    {id: 4, name: 'Nikola Zarembova', img: './assets/img_avatar.png', position: 'Not Selected', description: 'Popis'},
    {id: 5, name: 'Patricia Hulinova', img: './assets/img_avatar.png', position: 'Not Selected', description: 'Popis'}
  ];

  constructor() { }

  ngOnInit() { }

  selectMember(id: number) {
    this.memeberSelected = this.fakeData.find(person => person.id === id);
  }

}
