import { Component, OnInit, Inject } from '@angular/core';
import { Blockchain, BlockchainService } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public blockchain: Blockchain;
  public recipients: string[] = [];

  constructor(
    @Inject(BlockchainService)
    private blockchainService: BlockchainService
  ) {}

  ngOnInit() {
  }

  generateUsers() {
    this.blockchain = this.blockchainService.blockchain;
    for (const blocks of this.blockchain.chain) {
      this.recipients = blocks.transactions.map(item => item.recipient)
        .filter((value, index, self) => self.indexOf(value) === index);
    }
  }
}

