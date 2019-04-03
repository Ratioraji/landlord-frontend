import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { LayoutModule } from './core/layouts/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';

import { AuthGuard, RoleGuard } from './guards';

import { ScriptLoaderService } from './services/script-loader.service';
import { AlertService, UserService } from './services';
import { FormattedNumberPipe } from './pipes/formatted-number.pipe';
import { AssetsComponent } from './core/pages/assets/assets.component';
import { TenantsComponent } from './core/pages/tenants/tenants.component';
import { RentsComponent } from './core/pages/rents/rents.component';
import { AssetsService } from './services/assets.service';
import { TenantsService } from './services/tenants.service';
import { rentsService } from './services/rents.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    CoreComponent,
    AppComponent,
    FormattedNumberPipe,
    AssetsComponent,
    TenantsComponent,
    RentsComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: '',
      },
    }),
    NgbModule.forRoot(),
    AuthModule,
  ],
  providers: [
    ScriptLoaderService,
    AuthGuard,
    RoleGuard,
    AssetsService,
    rentsService,
    TenantsService,
    AlertService,
    UserService

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
