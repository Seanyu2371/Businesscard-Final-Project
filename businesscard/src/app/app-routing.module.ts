import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsetComponent } from './cardset/cardset.component';
import { BusinesscardComponent } from './cardset/businesscards/businesscard/businesscard.component';
import { CardUpdateComponent } from './cardset/card-update/card-update.component';
import { CardDetailComponent } from './cardset/card-detail/card-detail.component';
import { CardStartComponent } from './cardset/card-start/card-start.component';
import { CardResolverService } from './cardset/cardset-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { CameraComponent } from './camera/camera.component';


const routes: Routes = [
  //  {
  //    path:'login',
  //    component:LoginComponent
  //  },
   {
     path:'cardset',
     component:CardsetComponent,
     canActivate: [AuthGuard],
     children: [
      { path: '', component: CardStartComponent },
      { path: 'new', component: CardUpdateComponent },
      { path: ':id', component: CardDetailComponent, resolve:[CardResolverService] },
      { path: ':id/edit', component: CardUpdateComponent, resolve:[CardResolverService] },
    ]
   },
   {
     path:'camera',
     component:CameraComponent,
     canActivate: [AuthGuard],
     children: [
      { path: '', component: CardStartComponent }
    ]
    },
    {
      path:'',
      redirectTo:'/cardset',
      pathMatch:'full'
    },
   {
     path:'auth',
     component:AuthComponent
   },
   {
     path: 'notfound', 
     component: NotfoundComponent,  
     pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
