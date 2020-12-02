import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // We've decided to inject LoggingService into AccountsService // AccountsService is provided by parent (app.component), adding here would override with new instance
})
export class NewAccountComponent {

  constructor(private LoggingService: LoggingService, // left for reference
              private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    // this.LoggingService.logStatusChange(accountStatus);
  }
}
