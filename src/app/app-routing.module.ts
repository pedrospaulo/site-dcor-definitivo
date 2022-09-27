import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeEightComponent } from './components/pages/home-eight/home-eight.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { LogInComponent } from './components/pages/log-in/log-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';
import { ProjectsTwoComponent } from './components/pages/projects-two/projects-two.component';
import { ProjectsOneComponent } from './components/pages/projects-one/projects-one.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'home-four', component: HomeFourComponent},
    {path: 'home-five', component: HomeFiveComponent},
    {path: 'home-six', component: HomeSixComponent},
    {path: 'home-seven', component: HomeSevenComponent},
    {path: 'home-eight', component: HomeEightComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services-one', component: ServicesOneComponent},
    {path: 'services-two', component: ServicesTwoComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projects-one', component: ProjectsOneComponent},
    {path: 'projects-two', component: ProjectsTwoComponent},
    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'team', component: TeamComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'log-in', component: LogInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'blog-grid', component: BlogGridComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}