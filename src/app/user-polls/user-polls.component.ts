import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll.model'
import { PollService } from '../poll.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user-polls',
  templateUrl: './user-polls.component.html',
  styleUrls: ['./user-polls.component.css'],
  providers: [PollService, AuthenticationService]
})
export class UserPollsComponent  {

  polls: FirebaseListObservable<any[]>;
  userId: string;

  constructor(private pollService: PollService, private authService: AuthenticationService) { }

  getUserId() {
    this.authService.currentUserId();
  }

  getUserPolls() {
    this.pollService.getUserPolls();
  }
}
