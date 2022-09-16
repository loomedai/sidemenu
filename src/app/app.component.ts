import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/sider/home', icon: 'home' },
    { title: 'Hoteller', url: '/sider/hoteller', icon: 'bed' },
    { title: 'Seværdigheder', url: '/sider/attractions', icon: 'star' },
    { title: 'Restauranter', url: '/sider/restauranter', icon: 'restaurant' },
    { title: 'Transport', url: '/sider/transport', icon: 'car' },
  ];
  public labels = ['bed', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

//@Component({
//  selector: 'app-root',
//  templateUrl: 'app.component.html',
//  styleUrls: ['app.component.scss'],
//})
//export class Alert {
//  constructor(public alertController: AlertController) {}
//  
//  showAlert() {
//    this.alertController.create({
//      header: 'Du siger ja til cookies.',
//      button: ['Okay']
//    }).then(res => {
//      res.present();
//    });
//  }
//}