import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-p2',
  templateUrl: './homeP2.component.html',
  styleUrls: ['./homeP2.component.scss'],
  
})
export class HomeP2Component{
  // constructor(private renderer: Renderer2, private elementRef: ElementRef,@Inject(DOCUMENT) private document: Document) {}

  // ngOnInit() {
  //   const cssFilePath = this.document.baseURI + 'assets/css/style.css';
  
  //   const linkElement = this.renderer.createElement('link');
  //   this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
  //   this.renderer.setAttribute(linkElement, 'href', cssFilePath);
  //   this.renderer.appendChild(this.elementRef.nativeElement, linkElement);
  // }

  // cssUrl: SafeResourceUrl;

  // constructor(public sanitizer: DomSanitizer) {
  //   this.cssUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/css/style.css');
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
}







