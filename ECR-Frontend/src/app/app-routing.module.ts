import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcrListComponent } from './ecr-list/ecr-list.component';
import { FicheEcrComponent } from './fiche-ecr/fiche-ecr.component';
import { EcrUpdateComponent } from './ecr-update/ecr-update.component';
import { EcrDetailsComponent } from './ecr-details/ecr-details.component';

const routes: Routes = [
  { path:'' ,redirectTo:'ecr-list' , pathMatch:'full'},
  { path:'ecr-list' , component:EcrListComponent},
  { path:'addFiche' , component:FicheEcrComponent},
  { path:'update/:id' , component:EcrUpdateComponent},
 { path:'details/:id' , component:EcrDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
