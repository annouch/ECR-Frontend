import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheEcrComponent } from './fiche-ecr/fiche-ecr.component';
import { EcrDetailsComponent } from './ecr-details/ecr-details.component';
import { EcrListComponent } from './ecr-list/ecr-list.component';
import { EcrUpdateComponent } from './ecr-update/ecr-update.component';
import  {HttpClientModule } from '@angular/common/http' ;
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    FicheEcrComponent,
    EcrDetailsComponent,
    EcrListComponent,
    EcrUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
