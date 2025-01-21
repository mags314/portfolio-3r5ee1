import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private elRef: ElementRef) {}
// Method to scroll to a specific section by ID
scrollTo(sectionId: string) {
  const element = this.elRef.nativeElement.querySelector(`#${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
}
