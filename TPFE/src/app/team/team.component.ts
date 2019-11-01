import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  memeberSelected;

  fakeData = [
    {id: 1, name: 'Jakub Šimek', img: './assets/img_avatar.png', position: 'Frontend Developer', description: 'Absolvent bakalárskeho štúdia na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave v študijnom programe aplikovaná informatika odbor Modelovanie a simulácia udalostných systémov. S Petriflow sieťami pracoval na bakalárskom štúdiu na predmete diskrétne udalostné systémy a v tejto práci pokračuje aj na inžinierskom štúdiu na predmete modelovanie a simulácia udalostných systémov. Profesijne sa venuje vývoju webových systémov pre spoločnost AMCEF, kde pracuje ako Frontend developer vo frameworku Angular.'},
    {id: 2, name: 'Boris Hvozda', img: './assets/img_avatar.png', position: 'Backend Developer', description: 'Absolvent bakalárskeho štúdia na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave v študijnom programe aplikovaná informatika odbor Modelovanie a simulácia udalostných systémov'},
    {id: 3, name: 'Eduardo Martinez', img: './assets/img_avatar.png', position: 'Not Selected', description: 'Absolvent bakalárskeho štúdia na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave v študijnom programe aplikovaná informatika odbor Modelovanie a simulácia udalostných systémov'},
    {id: 4, name: 'Nikola Zarembova', img: './assets/img_avatar.png', position: 'Not Selected', description: 'Absolventka bakalárskeho štúdia na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave v študijnom programe aplikovaná informatika odbor Modelovanie a simulácia udalostných systémov. Prvé skúsenosti s Petriho sieťami nadobudla v 2. ročníku bakalárskeho štúdia na predmete diskrétne udalostné systémy a tieto znalosti začala rozvíjať aj počas 1. ročníka inžinierskeho štúdia na predmete modelovanie a simulácia udalostných systémov. Prácu v tíme si vyskúšala už aj predtým nie len v škole, ale aj v práci, kde sa venuje najmä vývoju webových systémov ako Frontend developer.'},
    {id: 5, name: 'Patricia Hulinova', img: './assets/img_avatar.png', position: 'Not Selected', description: 'Absolventka bakalárskeho štúdia na Fakulte elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave v študijnom programe aplikovaná informatika odbor Modelovanie a simulácia udalostných systémov. Skúsenosti s Petriho sieťami nadobudla v 2. ročníku bakalárskeho štúdia na predmete diskrétne udalostné systémy a v tejto práci pokračuje aj v 1. ročníku inžinierskeho štúdia na predmete modelovanie a simulácia udalostných systémov. Má skúsenosti s programovacími jazykmi C, C++, Java, Python...'}
  ];

  constructor() { }

  ngOnInit() { }

  selectMember(id: number) {
    this.memeberSelected = this.fakeData.find(person => person.id === id);
  }

}
