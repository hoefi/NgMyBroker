import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() notifyList: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  routeOrReload() {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    } else {
      this.notifyList.emit('do it!');
    }

  }
}
