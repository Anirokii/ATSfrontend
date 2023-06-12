import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from "../../services/job.service";
import { Job } from 'src/app/modals/job';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  bannerSubtitle = '';
  bannerTitle = 'JOB DETAILS';

  public job: Job;
  public jobId:number;


constructor(private route: ActivatedRoute,private JobService:JobService) {}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.jobId = params['jobId'];
  });
  this.getJob();
}

public getJob(): void {
  this.JobService.getJobById(this.jobId).subscribe(
    (response: Job) => {
      this.job = response;
      this.bannerSubtitle=this.job.jobTitle;
      console.log(this.job);
    },
    (error: HttpErrorResponse) => {
      console.error(error);
    }
  );
}


}
