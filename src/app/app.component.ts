import {Component, OnInit} from '@angular/core';
import {AppSettings} from '../app/configs/app-settings.config';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showHeader;
  public showSidebar;
  public showFooter;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.showHeader = AppSettings.showHeader;
    this.showSidebar = AppSettings.showSidebar;
    this.showFooter  = AppSettings.showFooter;
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
        this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }
}

