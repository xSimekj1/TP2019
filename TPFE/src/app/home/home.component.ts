import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fakeData = [
    {name: 'Tím', img: './assets/img_avatar.png', url: '/Team'},
    {name: 'Zápisnice', img: './assets/img_avatar.png', url: '/Stretnutia'},
    {name: 'O-Projekte', img: './assets/img_avatar.png', url: '/O-projekte'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
