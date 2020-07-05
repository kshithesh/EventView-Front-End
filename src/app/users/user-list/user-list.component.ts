import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component'
import { Users } from '../users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<Users[]>;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUsersList();
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  userDetails(userId: number) {
    this.router.navigate(['user/details', userId]);
  }

  updateUser(userId: number) {
    this.router.navigate(['user/update', userId]);
  }
  createUser() {
    this.router.navigate(['user/new']);
  }
}
