import { Component, OnInit} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[]; // @Input() // no longer needed thx to UsersService
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id); // this.userSetToInactive.emit(id);
  }
}
