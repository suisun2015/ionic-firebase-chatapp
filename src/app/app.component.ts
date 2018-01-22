import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

// Initialize Firebase | secret info
const config = {
  apiKey: "AIzaSyCAC-TF0zydiktsa5Z6gMeWebbOx_oKPJY",
  authDomain: "ionicfirebase-ee66f.firebaseapp.com",
  databaseURL: "https://ionicfirebase-ee66f.firebaseio.com",
  projectId: "ionicfirebase-ee66f",
  storageBucket: "ionicfirebase-ee66f.appspot.com",
  messagingSenderId: "824348882506"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

