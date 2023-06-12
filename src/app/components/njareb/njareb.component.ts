import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Choices from 'choices.js';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-njareb',
  templateUrl: './njareb.component.html',
  styleUrls: ['./njareb.component.scss']
})
export class NjarebComponent implements AfterViewInit ,OnInit {

  
  constructor(){

  }


  jobTitle = '';
  department = '';
  location = '';
  salaryRange = 1000;
  description = '';
  skillsRequired = '';
  experienceRequired = false;
  yearsOfExperience = 0;

  @ViewChild('badgesInput', { static: false }) badgesInput!: ElementRef;

  onExperienceRequiredChange(): void {
    if (!this.experienceRequired) {
      this.yearsOfExperience = 0;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const jobData = {
        jobTitle: this.jobTitle,
        department: this.department,
        location: this.location,
        salaryRange: this.salaryRange,
        description: this.description,
        skillsRequired: this.skillsRequired,
        experienceRequired: this.experienceRequired,
        yearsOfExperience: this.yearsOfExperience
      };

      console.log('Job Data:', jobData);
      // Here you can process the job data, like sending it to a server or storing it in a database.
    } else {
      console.log('Form is not valid');
    }
  }



  ngAfterViewInit() {
    new Choices(this.badgesInput.nativeElement, {
      delimiter: ',',
      editItems: true,
      removeItemButton: true,
    });
  }

  ngOnInit(): void {
  }



  currentPage: number = 1;

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < 3) {
      this.currentPage++;
    }
  }


  bannerTitle = 'JOB LISTING';
  bannerSubtitle = 'Create your job post and start the search!';

}
