import {Component, Inject} from '@angular/core';
import {INavigationService, NAVIGATION_SERVICE} from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(NAVIGATION_SERVICE) private navService: INavigationService) {
  }

  goToReactive() {
    this.navService.openReactive();
  }

  goToTemplate() {
    this.navService.openTemplate();
  }
}
