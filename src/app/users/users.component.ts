import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {PresentesService} from "../presentes/shared/presentes.service";
import { Router, ActivatedRoute } from '@angular/router';

import {User} from "./shared/user";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor(
    private usersService: UsersService, 
    private presentesService: PresentesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }


  
  
  
deleteUser(user): void {
    this.usersService.deleteUser(user.id)
    .subscribe(() => {
      this.users = this.users.filter(user => user.id != user.id);
    });
  }
  
  
    
getPresentesUsuarioId(user): void {
    console.log(user.id);
    this.presentesService.getPresentesUsuarioId(user.id)
    .subscribe(data => this.router.navigate(['presentes']));
  }
 

}
