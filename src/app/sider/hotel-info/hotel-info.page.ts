import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.page.html',
  styleUrls: ['./hotel-info.page.scss'],
})
export class HotelInfoPage implements OnInit {

  hotel = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute);
 this.hotel = this.activatedRoute.snapshot.params;
  }

}
