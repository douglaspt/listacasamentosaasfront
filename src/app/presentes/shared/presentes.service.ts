import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Presente } from '../shared/presente';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PresentesService {

  private url: string = "https://listacasamentosaasrest.herokuapp.com/presente";
  //private url: string = "http://localhost:8090/presente";

  constructor(private http: Http) { }

  getPresentes(){
    console.log("Buscar todos USUARIOS");
    return this.http.get(this.url+'/findall/')
      .map(res => res.json());
  }


  getPresente(id){
    console.log("Busca Presente ID: "+id);
    return this.http.get(this.getPresenteUrl(id))
      .map(res => res.json());
  }

  getPresentesUsuarioId(idUsuario){
    console.log("Busca Presente Usuario ID: "+idUsuario);
    return this.http.get(this.url+'/findbyusuario/'+idUsuario)
      .map(res => res.json());
  }

  addPresente(presente){
    console.log+("ADD Presente: "+presente);
    return this.http.post(this.url+'/save/', presente)
      .map(res => res.json());
    
    
  }
  

  updatePresente(presente){
    //return this.http.put(this.getPresenteUrl(presente.id), JSON.stringify(presente))
    console.log("UPDATE Presente: "+presente.id);
    return this.http.post(this.url+'/update/', presente)
      .map(res => res.json());
  }
  

  deletePresente(id){
  console.log("DELETE Presente: "+id);
    return this.http.delete(this.url+'/delete/'+(id))
      .map(res => res.json());
  }


  private getPresenteUrl(id){
    return this.url + "/findId/" + id;
  }


}
