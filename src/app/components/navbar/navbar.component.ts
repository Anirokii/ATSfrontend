
import { Component,ElementRef,ViewChild  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isCollapsed = true;
  
  @ViewChild('myDiv', {static: true}) myDiv!: ElementRef;

  toggleActive() {
    this.myDiv.nativeElement.classList.toggle('active');
  }
  

  constructor(private elementRef: ElementRef) {}

  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      if(!this.isCollapsed){
        this.toggleActive();
      }
      this.isCollapsed = true;
    }
    }
  }

