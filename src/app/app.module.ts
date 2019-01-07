import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './common-components/common-components.module';
import { MaterialModule } from './material/material.module';
import { NavigationModule } from './navigation/navigation.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonComponentsModule,
    PagesModule,
    MaterialModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
