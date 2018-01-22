import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {
  data = { roomname: '' };
  ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }

  addRoom() {
    if (!this.data.roomname) {
      let alert = this.alertCtrl.create({
        title: 'No Room Name!',
        subTitle: 'Please enter valid roomname',
        buttons: ['OK']
      }).present();
      return;
    }
    let newData = this.ref.push();
    newData.set({
      roomname: this.data.roomname
    });
    this.navCtrl.pop();
  }

}
