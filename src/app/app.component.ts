import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, style, animateChild, animate, transition, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'trituxATS';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
loadingRoute = false;

  onActivate() {
    this.loadingRoute = true;
    setTimeout(() => {
      this.loadingRoute = false;
    }, 200); // this delay should match the duration of your :leave animation
  }

  bannerTitle = 'FEATURED TOURS Packages';
  bannerSubtitle = 'Make a Difference with Your Online Resume!';
  bannerButtonText = 'Upload your cv';
}