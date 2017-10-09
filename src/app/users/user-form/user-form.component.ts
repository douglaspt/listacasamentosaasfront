import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../shared/user';
import { UsersService } from '../shared/users.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  idUsuario: string;
  user: User = new User();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.form = formBuilder.group({
      nomeNoivo: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    nomeNoiva: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        BasicValidators.email
        //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
    senha: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.idUsuario = id;

      this.title = id ? 'Editar Usuario' : 'Novo Usuario';

      if (!id)
        return;

      this.usersService.getUser(id)
        .subscribe(
          user => this.user = user,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
    
  }

  save() {
    var result,
        userValue = this.form.value;
    if (this.user.id){
      console.log("update 1");
      result = this.usersService.updateUser(this.user);
    } else {
        console.log("ADD 1");
      result = this.usersService.addUser(userValue);
    }

    //result.subscribe(data => this.router.navigate(['users']));
    result.subscribe(data => this.user);
    this.router.navigate(['users']);

  }
  
}
