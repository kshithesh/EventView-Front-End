import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../users';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId: number;
  user: Users;

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = new Users();

    this.userId = this.route.snapshot.params['userId'];

    this.userService.getUser(this.userId)
    .subscribe(data=> {
      console.log(data)
      this.user = data;
    }, error=> console.log(error));
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user)
    .subscribe(data=> console.log(data), error=> console.log(error));
    this.user = new Users();
    this.gotoList();
  }

  onSubmit() {
    this.updateUser();
  }
  gotoList() {
    this.router.navigate(['/users']);
  }
}
