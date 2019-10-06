import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Galery & Others',
      url: '/list',
      icon:'images'
    },    
    {
      title: 'Tambah Produk',
      url: '/tambah-produk',
      icon: 'add'
    },
    {
      title: 'Keranjang Belanja',
      url: '/kerajang-belanja',
      icon: 'md-basket'
    },
    {
      title: 'Booking Online',
      url: '/login',
      icon: 'bookmarks'
    },
    {
      title: 'Kontak',
      url: '/kontak',
      icon: 'contact'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
