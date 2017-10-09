import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { User } from '../shared/user';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  private url: string = "https://listacasamentosaasrest.herokuapp.com/usuario";
  //private url: string = "http://localhost:8090/usuario";

  constructor(private http: Http) { }

  getUsers(){
    console.log("Buscar todos USUARIOS");
    return this.http.get(this.url+'/findall/')
      .map(res => res.json());
  }


  getUser(id){
    console.log("Busca USUARIO ID: "+id);
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(user){
    console.log+("ADD Usuario: "+user);
    return this.http.post(this.url+'/save/', user)
      .map(res => res.json());
    
    
  }
  

  updateUser(user){
    //return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
    console.log("UPDATE USUARIO: "+user.id);
    return this.http.post(this.url+'/update/', user)
      .map(res => res.json());
  }
  

  deleteUser(id){
  console.log("DELETE USUARIO: "+id);
    return this.http.delete(this.url+'/delete/'+(id))
      .map(res => res.json());
  }


  private getUserUrl(id){
    return this.url + "/findId/" + id;
  }


}
