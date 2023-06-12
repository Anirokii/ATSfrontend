import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  bannerTitle = 'Blog Page';
  bannerSubtitle = 'Free to post anything !';


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
}
