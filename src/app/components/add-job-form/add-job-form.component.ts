import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Choices from 'choices.js';
import { OnInit } from '@angular/core';
import { JobService } from "../../services/job.service";
import { Job } from 'src/app/modals/job';
import { HttpErrorResponse } from '@angular/common/http';
import { JobTypeEnum } from 'src/app/enum/jobTypeEnum';

@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.scss']
})
export class AddJobFormComponent implements AfterViewInit ,OnInit {
  public jobs: Job[] =[];
  public jobResults: Job[] = [];
  public newJob: Job = {
    id: 0,
    jobTitle: '',
    jobType: JobTypeEnum.FULL_TIME,
    experienceRequired: 0,
    salary: 0,
    location: '',
    department: '',
    jobImage: '',
    description: '',
    technologiesList: [],
    postedDate: new Date(),
  };
  
  experienceRequired = false;
  yearsOfExperience = 0;

  constructor(private JobService:JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  public getJobs(): void {
    this.JobService.getJobs().subscribe(
      (response: Job[]) => {
        this.jobs = response;
        this.jobResults=response;
        this.JobService.jobsUpdated.next(this.jobs); // emit the updated job list
        console.log(this.jobs);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  public onAddJob(addForm: NgForm): void {
    document.getElementById('modal-form')?.click();
    this.newJob.experienceRequired = this.experienceRequired ? this.yearsOfExperience : 0;
    this.newJob.postedDate = new Date();
    this.JobService.addJob(this.newJob).subscribe(
      (response: Job) => {
        console.log(response);
        this.getJobs();
        addForm.reset();
        this.modalForm.hide();
        this.newJob = { // Reset the newJob object
          id: 0,
          jobTitle: '',
          jobType: JobTypeEnum.FULL_TIME,
          experienceRequired: 0,
          salary: 0,
          location: '',
          department: '',
          jobImage: '',
          description:'',
          technologiesList: [],
          postedDate:new Date()
        };
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  

  

  @ViewChild('badgesInput', { static: false }) badgesInput!: ElementRef;
  @ViewChild('modalform') modalForm: any;

  onExperienceRequiredChange(): void {
    if (!this.experienceRequired) {
      this.yearsOfExperience = 0;
    }
  }

  ngAfterViewInit() {
    try {
      const choices = new Choices(this.badgesInput.nativeElement, {
        delimiter: ',',
        editItems: true,
        removeItemButton: true,
      });
  
      choices.passedElement.element.addEventListener('addItem', (event: any) => {
        // Add new technology object to the array when a tag is added
        this.newJob.technologiesList.push({ id: this.newJob.technologiesList.length + 1, technoName: event.detail.value});
      });
  
      choices.passedElement.element.addEventListener('removeItem', (event: any) => {
        // Remove technology object from the array when a tag is removed
        this.newJob.technologiesList = this.newJob.technologiesList.filter(tech => tech.technoName !== event.detail.value);
      });
  
    } catch (error) {
      console.error('Error initializing Choices:', error);
    }
  }
  
  
  
}

