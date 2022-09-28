import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { NavbarOneComponent } from './components/layouts/navbar-one/navbar-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ErrorComponent } from './components/pages/error/error.component';

import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeFourComponent,
    NavbarOneComponent,
    AboutComponent,
    ServicesTwoComponent,
    ServicesDetailsComponent,
    ProjectsDetailsComponent,
    ContactComponent,
    TeamComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ErrorComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
