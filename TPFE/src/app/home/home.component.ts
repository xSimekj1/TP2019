import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fakeData = [
    {name: 'Tím', img: './assets/team.svg', url: '/Team', info: 'počet členov: 5'},
    {name: 'Zápisnice', img: './assets/documents.svg', url: '/Stretnutia', info: 'počet dokumentov: 10'},
    {name: 'O-Projekte', img: './assets/about.svg', url: '/O-projekte', info: ' Základné informácie'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
