import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BallBuddies-Frontend';
  // constructor(private router: Router) {}

  // ngOnInit() {
  //   this.router.events.subscribe((event: Event) => {
  //     if (event instanceof NavigationEnd) {
  //       setTimeout(() => {
  //         // @ts-ignore
  //         HSStaticMethods.autoInit();
  //       }, 100);
  //     }
  //   });
  // }
}
