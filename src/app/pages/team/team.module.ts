import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from '../../general/content/content.module';
import { ProfileCardModule } from '../../general/profile-card/profile-card.module';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    ProfileCardModule,
  ],
  exports: [
    TeamComponent,
  ]
})
export class TeamModule { }
