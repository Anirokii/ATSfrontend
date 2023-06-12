import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-listing-v2',
  templateUrl: './candidate-listing-v2.component.html',
  styleUrls: ['./candidate-listing-v2.component.scss']
})
export class CandidateListingV2Component {
  @Input() imageUrl?: string;
  @Input() userName?: string;
  @Input() userLink?: string;
  @Input() commentDate?: string;
  @Input() commentText?: string;

}
