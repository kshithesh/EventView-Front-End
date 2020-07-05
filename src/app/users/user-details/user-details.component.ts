import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

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
      this.user =data;
    }, error=> console.log(error));
  }

  list() {
    this.router.navigate(['users']);
  }

}
