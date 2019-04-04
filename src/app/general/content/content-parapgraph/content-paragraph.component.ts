import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-parapgraph',
  template: `
    <div class="content-paragraph">
      <p class="paragrpah">
        {{ contentParagraph }}
      </p>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./content-paragraph.component.less']
})
export class ContentParagraphComponent {
  @Input() contentParagraph: string;
}
