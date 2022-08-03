import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './components/home-list/home-list.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeListComponent,
  },
  {
    path: 'counts',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
