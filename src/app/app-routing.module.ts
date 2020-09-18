import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  { path:'', redirectTo:'Country', pathMatch: 'full'},
  { path: 'Country', component: TableComponent },
  { path:'country/:name', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
