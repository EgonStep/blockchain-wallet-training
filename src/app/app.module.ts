import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule, ModalModule, AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Block, BlockchainService } from 'projects/blockchain/src/public_api';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlockComponent } from './block/block.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { MainModalComponent } from './modal/main-modal/main-modal.component';

const GenesisProvider = () => {
  return new Block(1, 12312, [], 'GENESIS', '0ae1234', '00');
};

@NgModule({
  declarations: [
    AppComponent,
    SendTransactionComponent,
    BalanceComponent,
    DashboardComponent,
    BlockComponent,
    UsersComponent,
    MainModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [{
    provide: 'GENESIS_BLOCK',
    useFactory: GenesisProvider
    },
    BlockchainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
