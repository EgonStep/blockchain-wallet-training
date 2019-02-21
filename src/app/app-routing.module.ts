import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanSendGuard } from './can-send.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'send-transaction', component: SendTransactionComponent, canActivate: [CanSendGuard], outlet: 'modal'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
