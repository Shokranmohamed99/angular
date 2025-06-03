import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDataService } from '../../../services/userData.service';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css'] 
})
export class TestServicesComponent {

  userDataService = inject(UserDataService);

  addUserForm = new FormGroup({
    'addUser': new FormControl('')
  });

  deleteUserForm = new FormGroup({
    'deleteUser': new FormControl('')
  });

  onDeleteUser() {
    if (this.deleteUserForm.valid) {
      const userToDelete = this.deleteUserForm.value.deleteUser?.trim();
      if (userToDelete) {
        this.userDataService.deleteUser(userToDelete);
        this.deleteUserForm.reset(); 
      }
    }
  }

  onAddNewUser() {
    if (this.addUserForm.valid) {
      const userToAdd = this.addUserForm.value.addUser?.trim();
      if (userToAdd) {
        this.userDataService.addNewUser(userToAdd);
        this.addUserForm.reset(); 
      }
    }
  }
}
