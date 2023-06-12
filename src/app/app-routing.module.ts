import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';

import { LoginComponent } from './components/login/login.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { HomeComponent } from './components/home/home.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { NjarebComponent } from './components/njareb/njareb.component';
import { AddJobFormComponent } from './components/add-job-form/add-job-form.component';
import { JobDashboardComponent } from './components/job-dashboard/job-dashboard.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CandidateListingV2Component } from './components/candidate-listing-v2/candidate-listing-v2.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListingV2Component } from './components/job-listing-v2/job-listing-v2.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'job-list', component: JobListingV2Component },
  { path: 'candidates/:jobId', component: CandidateListComponent },
  { path: 'candidate-profile/:candidateId', component: CandidateProfileComponent },
  { path: 'njareb', component: NjarebComponent },
  { path: 'job-dashboard', component: JobDashboardComponent },
  { path: 'job-detail/:jobId', component: JobDetailsComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Blog-detail', component: BlogDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatChipsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
