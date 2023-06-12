import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/modals/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit, OnDestroy {
  public candidate: Candidate;
  public candidateId:number;

  pdfSrc: Blob;
  focus: any;
  
constructor(private route: ActivatedRoute,private candidateService: CandidateService, private cvService: CvService) {}


ngOnInit() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.add("profile-page");
  this.route.params.subscribe(params => {
    this.candidateId = params['candidateId'];
  });
  this.getCandidate();
}


public getCandidate(): void {
  this.candidateService.getCandidateById(this.candidateId).subscribe(
    (response: Candidate) => {
      this.candidate = response;
      console.log(this.candidate);
    },
    (error: HttpErrorResponse) => {
      console.error(error);
    }
  );
}


showChat: boolean = false;

  toggleChat(): void {
    this.showChat = !this.showChat;
  }


  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

}
