import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Posters } from './components/posters/posters';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'posters', component: Posters }
];
