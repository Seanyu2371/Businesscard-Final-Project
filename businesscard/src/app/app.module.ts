import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BusinesscardComponent } from './cardset/businesscards/businesscard/businesscard.component';
import { BusinesscardsComponent } from './cardset/businesscards/businesscards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CardsetComponent } from './cardset/cardset.component';
import { CardDetailComponent } from './cardset/card-detail/card-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CardUpdateComponent } from './cardset/card-update/card-update.component';
import { CardStartComponent } from './cardset/card-start/card-start.component';
import { CardsetService } from './cardset/cardset.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { NotfoundComponent } from './notfound/notfound.component';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
// import { AuthserviceService} from './authservice.service';



@NgModule({
  declarations: [
    AppComponent,
    BusinesscardComponent,
    BusinesscardsComponent,
    DropdownDirective,
    //  LoginComponent,
    HeaderComponent,
    CardsetComponent,
    CardDetailComponent,
    CardUpdateComponent,
    CardStartComponent,
    LoadingSpinnerComponent,
    AuthComponent,
    NotfoundComponent,
    CameraComponent
    // MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule 
  ],
  providers: [  CardsetService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
