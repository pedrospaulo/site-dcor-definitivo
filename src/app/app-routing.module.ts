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
import { SpecialtiesComponent } from './components/pages/specialties/specialties.component';
import { InsuranceComponent } from './components/pages/insurance/insurance.component';

import { EletrocardiogramaComponent } from './components/services/eletrocardiograma/eletrocardiograma.component';
import { EcocardiogramaComponent } from './components/services/ecocardiograma/ecocardiograma.component';
import { DopplerVascularComponent } from './components/services/doppler-vascular/doppler-vascular.component';
import { MapaComponent } from './components/services/mapa/mapa.component';
import { HotlerComponent } from './components/services/hotler/hotler.component';
import { ErgonometricoComponent } from './components/services/ergonometrico/ergonometrico.component';
import { EspirometriaComponent } from './components/services/espirometria/espirometria.component';

import { ResultadosComponent } from './components/layouts/resultados/resultados.component';

import { Post01Component } from './components/blog/post01/post01.component';
import { Post02Component } from './components/blog/post02/post02.component';

const routes: Routes = [

    {path: '', component: HomeFourComponent, data: { titulo: 'Inicio' }},
    {path: 'sobre', component: AboutComponent,},
    {path: 'servico', component: ServicesTwoComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'consultas', component: ProjectsDetailsComponent},
    {path: 'time', component: TeamComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'contato', component: ContactComponent},
    {path: 'especialidades', component: SpecialtiesComponent},
    {path: 'convenios', component: InsuranceComponent},

    // Here add new pages component
    {path: 'eletrocardiograma', component: EletrocardiogramaComponent},
    {path: 'ecocardiograma', component: EcocardiogramaComponent},
    {path: 'doppler', component: DopplerVascularComponent},
    {path: 'mapa', component: MapaComponent},
    {path: 'hotler', component: HotlerComponent},
    {path: 'ergometrico', component: ErgonometricoComponent},
    {path: 'espirometria', component: EspirometriaComponent},

    {path: 'resultado', component: ResultadosComponent},

    {path: 'post01', component: Post01Component},
    {path: 'post02', component: Post02Component},

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
