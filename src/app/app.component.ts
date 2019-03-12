import { Component, Inject, TemplateRef, EventEmitter } from '@angular/core';
import {
  BlockchainService,
  Blockchain
} from 'projects/blockchain/src/public_api';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockchain-wallet-training';
  modalTitle = 'Modal';
  public blockchain: Blockchain;
  public isValid: boolean;
  public modalRef: BsModalRef;
  public modalOpenEvent = new EventEmitter();

  constructor(
    @Inject(BlockchainService)
    private blockchainService: BlockchainService,
  ) {
    this.blockchain = this.blockchainService.blockchain;
    this.isValid = this.blockchain.isValidChain(this.blockchain);
  }

  openModal() {
    this.modalOpenEvent.emit('open');
  }

  onMine(): boolean {
    return (this.isValid = this.blockchainService.mine());
  }

  changeTitle(title: string) {
    this.modalTitle = title;
  }
}
