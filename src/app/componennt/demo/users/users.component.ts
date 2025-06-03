import { Component, inject } from '@angular/core';
import { UserDataService } from '../../../services/userData.service'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] 
})
export class UsersComponent {
  userDataService = inject(UserDataService); 
}
