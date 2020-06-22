import {Injectable, InjectionToken, Provider} from '@angular/core';
import {Router} from '@angular/router';

export interface INavigationService {

  openReactive(): Promise<boolean>;

  openTemplate(): Promise<boolean>;

}

@Injectable()
export class NavigationService implements INavigationService{

  constructor(private router: Router) { }

  openReactive(): Promise<boolean> {
    return this.router.navigate(['reactive']);
  }

  openTemplate(): Promise<boolean> {
    return this.router.navigate(['template']);
  }
}

export const NAVIGATION_SERVICE: InjectionToken<INavigationService> = new InjectionToken<INavigationService>("NAVIGATION_SERVICE");

export const NavigationServiceProvider: Provider = {
  provide: NAVIGATION_SERVICE,
  useClass: NavigationService
}
