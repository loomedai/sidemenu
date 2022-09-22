import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoteller',
  templateUrl: './hoteller.page.html',
  styleUrls: ['./hoteller.page.scss'],
})
export class HotellerPage implements OnInit {

  hotel = [
    { ID: 1, Title: 'Country flat' },
    { ID: 2, Title: 'Zleep Hotel Prindsen Roskilde' },
    { ID: 3, Title: 'Scandic Roskilde Park' },
    { ID: 4, Title: 'Comwell Roskilde' },
    { ID: 5, Title: 'Motel Oasen' }
    ];
   

    
   

  constructor() { }

  ngOnInit() {
    
  }

}
