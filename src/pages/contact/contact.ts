import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  open() {
    this.navCtrl.push(DetailPage);
  }
}
