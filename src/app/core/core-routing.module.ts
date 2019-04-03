import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';
import { AuthGuard, RoleGuard } from '../guards';
import adminRoles from '../utils/adminRoles';
import { AssetsComponent } from './pages/assets/assets.component';
import { TenantsComponent } from './pages/tenants/tenants.component';
import { RentsComponent } from './pages/rents/rents.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './pages/default/blank/blank.module#BlankModule',
      },
      {
        path: 'index',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'all-assets',
        component: DefaultComponent,
        children: [
          {
            path: '',
            component: AssetsComponent,
          },
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'all-tenants',
        component: DefaultComponent,
        children: [
          {
            path: '',
            component: TenantsComponent,
          },
        ],
        canActivate: [AuthGuard]
      },
      {
        path: 'all-rents',
        component: DefaultComponent,
        children: [
          {
            path: '',
            component: RentsComponent,
          },
        ],
        canActivate: [AuthGuard]
      },
     
      {
        path: '**',
        redirectTo: 'index',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
