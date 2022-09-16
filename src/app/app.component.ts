import { Component } from '@angular/core';
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
