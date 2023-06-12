import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { CandidateStatus } from 'src/app/enum/candidateStatus';
import { Candidate } from 'src/app/modals/candidate';
import { SearchResult } from 'src/app/modals/searchResult';
import { CandidateService } from 'src/app/services/candidate.service';
import { SearchResultService } from 'src/app/services/search-result.service';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  bannerSubtitle = 'Candidates Listing';
  bannerTitle = '';

  //backend integration
  public jobId:number;
  public searchResult: SearchResult;

  public deleteCandidate: Candidate;
  public selectedFile: File | null = null;
  candidateResults: Candidate[]=[];

  public sortOption: string = ''; // 'salary' or 'experience'
  public isSorted: boolean = false;

  public currentPage: number = 1; // Track the current page
  public totalJobs: number = 0;

  filterStatus: CandidateStatus[] =[];
  statusEnum: CandidateStatus;

  public searchTextChanged = new Subject<string>();


  constructor(private candidateService:CandidateService,private searchResultService:SearchResultService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = params['jobId'];
    });
    this.getSearchResult();
    this.searchTextChanged.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((searchText) => {
      this.searchCandidatesBarre(searchText);
    });
  }
  
  public onFileChange(event: any, candidate: Candidate): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      candidate.imgProfil = files[0];
    } else {
      candidate.imgProfil = null; // Set to null if no file selected
    }
  }
  
  public getSearchResult(): void {
    this.searchResultService.getSearchResultByJobId(this.jobId).subscribe(
      (response: SearchResult) => {
        this.searchResult = response;
        this.candidateResults = this.searchResult.resultList;
        this.bannerTitle = this.searchResult.job.jobTitle;
        console.log(this.searchResult);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  public onDeleteCandidate(candidateId: number): void {
    this.searchResultService.deleteCandidatefromSearchResult(this.jobId,candidateId).subscribe(
      () => {
        console.log("Candidate deleted successfully");
        this.getSearchResult();
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        if (error.status === 204) {
          console.log("Candidate deleted successfully");
          this.getSearchResult();
        } else {
          alert("An error occurred while deleting the candidate.");
        }
      }
    );
  }
  

  //to sort the jobs
public cancelSort(): void {
  this.isSorted = false;
}

public sortBy(option: string): void {
  this.sortOption = option;
  if (this.sortOption === 'score') {
    this.candidateResults.sort((a, b) => a.score - b.score); // Sort by ascending score
  } else if (this.sortOption === 'experience') {
    this.candidateResults.sort((a, b) => a.experienceLevel - b.experienceLevel); // Sort by ascending experience level
  }
  this.isSorted = this.sortOption !== '';
}


  //for the pagination
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

public getPageNumbers(): number[] {
  const totalPages = Math.ceil(this.candidateResults.length / 5);
  return Array.from({ length: totalPages }, (_, index) => index + 1);
}


public ceil(value: number): number {
  return Math.ceil(value);
}

public MathMin(value1: number, value2: number): number {
  return Math.min(value1, value2);
}


// for search barre and deleting notification.

public searchCandidatesBarre(key: string): void {
  console.log(key);
  if (!key) {
    this.candidateResults = this.searchResult.resultList;
    return;
  }
  const results: Candidate[] = [];
  for (const candidate of this.candidateResults) {
    if (candidate.fullName?.toLowerCase().includes(key.toLowerCase())
        || candidate.location?.toLowerCase().includes(key.toLowerCase())
        || candidate.status?.toLowerCase().includes(key.toLowerCase())
        || candidate.university?.toLowerCase().includes(key.toLowerCase())) {
      results.push(candidate);
    }
  }
  this.candidateResults = results;
}


public onOpenModal(candidate: Candidate, mode: string): void {
  const container = document.getElementById('main-container');
  if (container) {
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteCandidate = candidate;
      button.setAttribute('data-target', '#deletecandidateModal');
    }
    container.appendChild(button);
    button.click();
  } else {
    console.error("Container element 'main-container' not found.");
  }
}



}
