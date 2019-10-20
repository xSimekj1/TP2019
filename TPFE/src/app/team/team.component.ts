import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  bsModalRef: BsModalRef;

  fakeData = [
    {name: 'Jakub Šimek', img: './assets/img_avatar.png', position: 'Frontend Developer'},
    {name: 'Boris Hvozda', img: './assets/img_avatar.png', position: 'Backend Developer'},
    {name: 'Eduardo Martinez', img: './assets/img_avatar.png', position: 'Not Selected'},
    {name: 'Nikola Zarembova', img: './assets/img_avatar.png', position: 'Not Selected'},
    {name: 'Patricia Hulinova', img: './assets/img_avatar.png', position: 'Not Selected'}
  ];

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() { }

  openNgModal(title: string, message: Array<string>) {
    const initialState = {
      list: message,
      title: title
    };
    this.bsModalRef = this.modalService.show(ModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Zavrieť';
  }

}
