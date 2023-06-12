import { Component, OnDestroy, OnInit } from '@angular/core';
import { Job } from 'src/app/modals/job';
import { JobService } from "../../services/job.service";
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { JobTypeEnum } from 'src/app/enum/jobTypeEnum';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-job-listing-v2',
  templateUrl: './job-listing-v2.component.html',
  styleUrls: ['./job-listing-v2.component.scss']
})
export class JobListingV2Component implements OnInit{
  bannerTitle = 'JOB LISTING';
  bannerSubtitle = 'Create your job post and start the search!';



  //backend integration

  public jobs: Job[] =[];
  public editJob: Job;
  public deleteJob: Job;
  
  public selectedFile: File | null = null;

  public jobResults: Job[] = [];

  filterDepartment: string | null = null;
  filterLocation: string | null = null;
  filterType: JobTypeEnum[] =[];
  filterExperience: string[] = [];

  public sortOption: string = ''; // 'salary' or 'experience'
  public isSorted: boolean = false;

  public currentPage: number = 1; // Track the current page
  public totalJobs: number = 39;

  public isFullTimeSelected: boolean = false;
  public isPartTimeSelected: boolean = false;
  public isRemoteSelected: boolean = false;
  public isFreelanceSelected: boolean = false;

  public JobTypeEnum = JobTypeEnum;


  constructor(private JobService:JobService) { }

  ngOnInit(): void {
    this.getJobs();
    this.JobService.jobsUpdated.subscribe(
      (jobs: Job[]) => {
        this.jobResults = jobs;
      }
    );
  }


  
  public getJobs(): void {
    this.JobService.getJobs().subscribe(
      (response: Job[]) => {
        this.jobs = response;
        this.jobResults=response;
        console.log(this.jobs);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }
  
  public onUpdateJob(job: Job): void {
    this.JobService.addJob(job).subscribe(
      (response: Job) => {
        console.log(response);
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  public onDeleteJob(jobId: number): void {
    this.JobService.deleteJob(jobId).subscribe(
      (response: void) => {
        console.log(response);
        this.getJobs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  //for the filter

  public searchJobs(): void {
    const results: Job[] = [];
  
    for (const job of this.jobs) {
      const matchesDepartment = job.department.toLowerCase().includes(this.filterDepartment?.toLowerCase() ?? '');
      const matchesLocation = job.location.toLowerCase().includes(this.filterLocation?.toLowerCase() ?? '');
      const matchesType = this.matchesJobTypeFilter(job.jobType);
      const matchesExperience = this.matchesExperienceFilter(job.experienceRequired.toString());
  
      // Check if the job matches all selected filters
      if (matchesDepartment && matchesLocation && matchesType && matchesExperience) {
        results.push(job);
      }
    }

    // Apply sorting based on the selected option
    if (this.sortOption === 'salary') {
      results.sort((a, b) => a.salary - b.salary); // Sort by ascending salary
    } else if (this.sortOption === 'experience') {
      results.sort((a, b) => a.experienceRequired - b.experienceRequired); // Sort by ascending experience
    }

    // Check if results are sorted and update the sort status
    this.isSorted = this.sortOption !== '';

    // Fetch the total number of jobs based on the search filters
    const totalJobs = results.length;
    this.totalJobs = totalJobs;

    this.jobResults = results;
  
    // if (results.length === 0 || !this.hasFiltersApplied()) {
    //   this.getJobs();
    // }
  }


toggleExperience(experience: string): void {
  if (this.filterExperience.includes(experience)) {
    this.filterExperience = this.filterExperience.filter(item => item !== experience);
  } else {
    this.filterExperience.push(experience);
  }
  this.searchJobs();
}

toggleType(jobType: JobTypeEnum): void {
  if (this.filterType.includes(jobType)) {
    this.filterType = this.filterType.filter(item => item !== jobType);
  } else {
    this.filterType.push(jobType);
  }
  this.searchJobs();
}
  

private matchesExperienceFilter(experience: string): boolean {
  if (this.filterExperience.length === 0) {
    return true; // No filter selected, so it matches
  }

  for (const filter of this.filterExperience) {
    if (filter === '1-2' && (experience === '1' || experience === '2')) {
      return true;
    } else if (filter === '2-3' && (experience === '2' || experience === '3')) {
      return true;
    } else if (filter === '3-6' && (experience === '3' || experience === '4' || experience === '5' || experience === '6')) {
      return true;
    } else if (filter === '6-more' && (experience === '6' || experience === '7' || experience === '8' || experience === '9' || experience === '10')) {
      return true;
    }
  }

  return false; // No match found
}

private matchesJobTypeFilter(jobType: JobTypeEnum): boolean {
  if (this.filterType.length === 0) {
    return true; // No filter selected, so it matches
  }

  return this.filterType.includes(jobType);
}


private hasFiltersApplied(): boolean {
  return (
    this.filterDepartment !== null ||
    this.filterLocation !== null ||
    this.filterType !== null ||
    this.filterExperience.length > 0
  );
}



//to sort the jobs
public cancelSort(): void {
  this.isSorted = false;
  this.searchJobs();
}

public sortBy(option: string): void {
  this.sortOption = option;
  this.searchJobs();
}


//for the pagination
changePage(pageNumber: number) {
  this.currentPage = pageNumber;
  this.searchJobs();
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

public getPageNumbers(): number[] {
  const totalPages = Math.ceil(this.jobResults.length / 5);
  return Array.from({ length: totalPages }, (_, index) => index + 1);
}


public ceil(value: number): number {
  return Math.ceil(value);
}

public MathMin(value1: number, value2: number): number {
  return Math.min(value1, value2);
}



}
