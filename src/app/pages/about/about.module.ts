import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { ProfileCardModule } from '../../general/profile-card/profile-card.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    ProfileCardModule,
  ],
  exports: [
    AboutComponent,
  ]
})
export class AboutModule { }
