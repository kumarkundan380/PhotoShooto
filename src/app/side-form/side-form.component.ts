import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-side-form',
  templateUrl: './side-form.component.html',
  styleUrls: ['./side-form.component.css']
})
export class SideFormComponent implements OnInit {

  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  constructor() { }

  ngOnInit(): void {
  }

  disableEnable(): void {
    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
  }

}
