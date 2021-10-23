import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: DummyComponent},
  { path: 'services', component: DummyComponent},
  { path: 'project', component: DummyComponent},
  { path: 'about us', component: DummyComponent},
  { path :'sign up', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
