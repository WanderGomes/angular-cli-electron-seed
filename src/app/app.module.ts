import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ROUTING} from './conf/routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiService} from './providers/api/api.service';
import {LocalStorageService} from './providers/storage/local-storage.service';
import {AuthGuardService} from './providers/auth-guard/auth-guard.service';
import {StorageServiceModule} from 'angular-webstorage-service';
import {ElectronService} from './providers/electron/electron.service';
import {MainComponent} from './components/pages/public/main/main.component';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RequisitionInterceptor} from './interceptors/requisition.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    ROUTING,
    BrowserAnimationsModule
  ],
  providers: [
    ElectronService,
    ApiService,
    LocalStorageService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequisitionInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
