import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.routing';
import { AuthComponent } from './auth.component';
import { AlertComponent } from '../directives/alert.component';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  declarations: [AuthComponent, AlertComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule],
  providers: [AuthenticationService],
  entryComponents: [AlertComponent],
})
export class AuthModule {}
