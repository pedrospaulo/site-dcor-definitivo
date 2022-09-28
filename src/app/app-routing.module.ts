import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomeFourComponent } from './components/pages/home-four/home-four.component';




import { ContactComponent } from './components/pages/contact/contact.component';

import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';

import { TeamComponent } from './components/pages/team/team.component';
import { ProjectsDetailsComponent } from './components/pages/projects-details/projects-details.component';

import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';

import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [

    {path: '', component: HomeFourComponent},

    {path: 'about', component: AboutComponent},

    {path: 'services-two', component: ServicesTwoComponent},
    {path: 'services-details', component: ServicesDetailsComponent},

    {path: 'projects-details', component: ProjectsDetailsComponent},
    {path: 'team', component: TeamComponent},

    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'coming-soon', component: ComingSoonComponent},

    {path: 'contact', component: ContactComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}