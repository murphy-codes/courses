import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService] // We've decided to inject LoggingService into AccountsService // AccountsService is provided by parent (app.component), adding here would override with new instance
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private LoggingService: LoggingService, // left for reference
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status) // this.statusChanged.emit({id: this.id, newStatus: status});
    // this.LoggingService.logStatusChange(status); // console.log('A server status changed, new status: ' + status);
    this.accountsService.statusUpdated.emit(status);
  }
}
