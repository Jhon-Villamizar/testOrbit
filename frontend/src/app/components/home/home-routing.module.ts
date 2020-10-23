import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'dashbord',
      loadChildren: () => import('../dashbord/dashbord.module').then(m => m.DashbordModule)
    },
    {
      path: 'list',
      loadChildren: () => import('../student-list/student-list.module').then(m => m.StudentListModule)
    },
    {
      path: 'form',
      loadChildren: () => import('../student-form/student-form.module').then(m => m.StudentFormModule)
    },
    {
      path: '**',
      redirectTo: 'dashbord'
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
