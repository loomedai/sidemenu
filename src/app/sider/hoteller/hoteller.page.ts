import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoteller',
  templateUrl: './hoteller.page.html',
  styleUrls: ['./hoteller.page.scss'],
})
export class HotellerPage implements OnInit {

  hotel = [
     'hotel 1', 'hotel 2', 'hotel 3'

    ];
   

  constructor() { }

  ngOnInit() {
  }

}
