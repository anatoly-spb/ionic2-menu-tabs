import { Component } from '@angular/core';
import { Events, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  pages: { title: string, index }[];

  constructor(platform: Platform, private events: Events) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(index: number) {
    this.events.publish("tabs:activate", index);
  }
}
