import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `    
  <app-header *ngIf="showHeader" fxLayout="column"></app-header>
  <div fxLayout="row" fxFlex="100">
    <app-sidebar *ngIf="showSidebar" fxLayout="column" fxFlex="220px"></app-sidebar>
    <div class="content" fxLayout="column" fxFlex>
      <router-outlet></router-outlet>
    </div>
  </div>
  
  <app-footer *ngIf="showFooter" fxLayout="column"></app-footer>  
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showHeader = false;
  showSidebar = false;
  showFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
        this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }


  ngOnDestroy() {
  
  }

}

