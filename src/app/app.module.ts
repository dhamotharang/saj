import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
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
import { ReportsPage } from '../pages/reports/reports';
import { LayoutsPage } from '../pages/layouts/layouts';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
//    HomePage,
//    ListPage,
    LoginPage,
    MainPage,
    RegisterPage,
    CalculatorPage,
    LocatorPage,
    ComplaintPage,
    NewsPage,
    DisruptionPage,
    BillingviewPage,
    BillingpayPage,
    ReportsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    HomePage,
//    ListPage,
    LoginPage,
    MainPage,
    RegisterPage,
    CalculatorPage,
    LocatorPage,
    ComplaintPage,
    NewsPage,
    DisruptionPage,
    BillingviewPage,
    BillingpayPage,
    ReportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
