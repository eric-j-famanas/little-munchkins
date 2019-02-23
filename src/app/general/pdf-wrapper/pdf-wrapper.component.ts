import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-wrapper',
  template: `
    <div class="pdf-wrapper" role="button">
      <mat-card (click)="openPdf()">
        <mat-card-content>
          <mat-icon>description</mat-icon>
          <mat-card-title>{{pdfTitle}}</mat-card-title>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./pdf-wrapper.component.less']
})
export class PdfWrapperComponent {

  @Input() pdfTitle: string;
  @Input() pdfLink: string;

  public openPdf(): void {
    window.open(this.pdfLink, '_blank');
  }
}
