import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { LoginPage} from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { RegisterPage } from '../pages/register/register';
import { CalculatorPage } from '../pages/calculator/calculator';
import { LocatorPage } from '../pages/locator/locator';
import { ComplaintPage } from '../pages/complaint/complaint';
import { NewsPage } from '../pages/news/news';
import { DisruptionPage } from '../pages/disruption/disruption';
import { BillingviewPage } from '../pages/billingview/billingview';
import { BillingpayPage } from '../pages/billingpay/billingpay';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
 //     { title: 'Home', component: HomePage },
 //     { title: 'List', component: ListPage },
      { title: 'LoginPage', component: LoginPage},
      { title: 'MainPage', component: MainPage },
      { title: 'RegisterPage', component: RegisterPage },
      { title: 'CalculatorPage', component: CalculatorPage },
      { title: 'LocatorPage', component: LocatorPage },
      { title: 'ComplaintPage', component: ComplaintPage },
      { title: 'NewsPage', component: NewsPage },
      { title: 'DisruptionPage', component: DisruptionPage },
      { title: 'BillingviewPage', component: BillingviewPage },
      { title: 'BillingpayPage', component: BillingpayPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
