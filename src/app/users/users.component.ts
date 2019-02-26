import { Component, OnInit, Inject } from '@angular/core';
import { Blockchain, BlockchainService, Transaction, Block } from 'projects/blockchain/src/public_api';

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
    const mappedTransactions = this.blockchainService.getAllTransactions();
    const transactions = mappedTransactions.concat.apply([], mappedTransactions);
    const recipients = this.blockchainService.getRecipients(transactions);

    this.recipients = recipients.filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
  }
}

