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
import { AlertService, UserService, RideService, DriverService } from './services';
import { FormattedNumberPipe } from './pipes/formatted-number.pipe';
import { PagesComponent } from './core/pages/pages.component';
import { AssetsComponent } from './core/pages/assets/assets.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    CoreComponent,
    AppComponent,
    FormattedNumberPipe,
    PagesComponent,
    AssetsComponent,
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
    AlertService,
    UserService,
    RideService,
    DriverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
