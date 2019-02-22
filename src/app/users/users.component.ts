import { Component, OnInit, Inject } from '@angular/core';
import { Blockchain, BlockchainService } from 'projects/blockchain/src/public_api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public blockchain: Blockchain;
  public recipients: any[] = [];
  public array: any[] = [];

  constructor(
    @Inject(BlockchainService)
    private blockchainService: BlockchainService
  ) {}

  ngOnInit() {
    this.generateUsers();
  }

  generateUsers() {
    this.blockchain = this.blockchainService.blockchain;
    for (const blocks of this.blockchain.chain) {
      this.recipients.push(blocks.transactions.map(item => item.recipient)
        .filter((value, index, self) => self.indexOf(value) === index));
    }
  }
}

