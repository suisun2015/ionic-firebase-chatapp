import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RoomPage } from '../room/room';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  data = { nickname: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  enterNickname() {
    if (!this.data.nickname) {
      let alert = this.alertCtrl.create({
        title: 'No Nickname!',
        subTitle: 'Nickname cannot be empty!',
        buttons: ['OK']
      }).present();
      return;
    }
    this.navCtrl.setRoot(RoomPage, {
      nickname: this.data.nickname
    });
  }

}
