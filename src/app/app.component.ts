import { Component, Inject, TemplateRef } from '@angular/core';
import { BlockchainService, Blockchain, Transaction } from 'projects/blockchain/src/public_api';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockchain-wallet-training';
  public blockchain: Blockchain;
  public isValid: boolean;
  public modalRef: BsModalRef;

  constructor(
    @Inject(BlockchainService)
    private blockchainService: BlockchainService,
    private modalService: BsModalService) {
      this.blockchain = this.blockchainService.blockchain;
      this.isValid = this.blockchain.isValidChain(this.blockchain);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onMine(): boolean {
    return this.isValid = this.blockchainService.mine();
  }
}
