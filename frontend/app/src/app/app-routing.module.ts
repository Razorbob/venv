import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"menu", component: MenuComponent},
  {path:"config", component: ConfiguratorComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:"**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
