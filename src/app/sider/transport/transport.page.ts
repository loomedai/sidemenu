import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
})
export class TransportPage implements OnInit {

  currentView = 'map';
  constructor() { }
  ngOnInit() {
  }

  currentViewChanged(ev) {
  console.log(ev.detail.value);
  console.log(this.currentView);
  }
 }
