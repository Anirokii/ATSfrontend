import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  bannerTitle = 'Blog detail';
  bannerSubtitle = 'Enjoy the reading and try to interact !';


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
