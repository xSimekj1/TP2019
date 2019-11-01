import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  fakeData = [
    {name: 'Home', img: './assets/home.svg', url: '/Home'},
    {name: 'Tím', img: './assets/team.svg', url: '/Team'},
    {name: 'Zápisnice', img: './assets/documents.svg', url: '/Stretnutia'},
    {name: 'O-Projekte', img: './assets/about.svg', url: '/O-projekte'}
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  isRouteActive(routeUrl): boolean {
    if (this.router.url === routeUrl) {
      return true;
    } else {
      return false;
    }
  }

}
