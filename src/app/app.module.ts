import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { HomeListComponent } from './components/home-list/home-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListComponent,
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
