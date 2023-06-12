import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from "ngx-bootstrap/tabs";
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
// import { PositioningService } from 'ngx-bootstrap/positioning';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

import { JobListComponent } from './components/job-list/job-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { NjarebComponent } from './components/njareb/njareb.component';
import { AddJobFormComponent } from './components/add-job-form/add-job-form.component';
import { JobDashboardComponent } from './components/job-dashboard/job-dashboard.component';
import { HomeP2Component } from './components/homeP2/homeP2.component';
import { BannerComponent } from './components/banner/banner.component';
import { JobListingV2Component } from './components/job-listing-v2/job-listing-v2.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CandidateListingV2Component } from './components/candidate-listing-v2/candidate-listing-v2.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { CvService } from './services/cv.service';
import { JobService } from './services/job.service';
import { ManagerService } from './services/manager.service';
import { SearchResultService } from './services/search-result.service';
import { CandidateService } from './services/candidate.service';
import { InterviewService } from './services/interview.service';
import { TechnologyService } from './services/technology.service';
import { ResponsableRhService } from './services/responsable-rh.service';
import { PictureUploadComponent } from './components/picture-upload/picture-upload.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobListComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    CandidateListComponent,
    CandidateProfileComponent,
    NjarebComponent,
    AddJobFormComponent,
    JobDashboardComponent,
    HomeP2Component,
    BannerComponent,
    JobListingV2Component,
    JobDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    CandidateListingV2Component,
    SignUpComponent,
    PictureUploadComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    TabsModule,
    // ComponentLoaderFactory,
    // PositioningService,
    CollapseModule.forRoot(), 
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [CvService,JobService,ManagerService,SearchResultService,CandidateService,InterviewService,TechnologyService,ResponsableRhService],
  bootstrap: [AppComponent]
})
export class AppModule { }
