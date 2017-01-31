import { Component, ViewChild } from '@angular/core';
import { Tabs, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage; 

  constructor(events: Events) {
    events.subscribe("tabs:activate", (index:number)=>{
      this.activate(index);
    });
  }

  activate(index: number) {
    this.tabs.select(index);
  }
}
