import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Presente } from '../shared/presente';
import { PresentesService } from '../shared/presentes.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-presente-form',
  templateUrl: './presente-form.component.html',
  styleUrls: ['./presente-form.component.css']
})
export class PresenteFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  idUsuario: string;
  presente: Presente = new Presente();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private presentesService: PresentesService
  ) {
    this.form = formBuilder.group({
    descricao: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
    valor: ['', [
        Validators.required
      ]],
    linkWeb: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
    idUsuario: ['', [
        Validators.required
      ]],
    jaGanhei: ['', [
        Validators.required
      ]],
    dataGanhei: ['', [
      ]],
    nomeComprador: ['', [
        Validators.required,
        Validators.minLength(5)
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

      this.presentesService.getPresente(id)
        .subscribe(
          presente => this.presente = presente,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
    
  }

  save() {
    var result,
        presenteValue = this.form.value;
    if (this.presente.id){
      console.log("update 1");
      result = this.presentesService.updatePresente(this.presente);
    } else {
        console.log("ADD 1");
      result = this.presentesService.addPresente(presenteValue);
    }

    //result.subscribe(data => this.router.navigate(['presentes']));
    result.subscribe(data => this.presente);
    this.router.navigate(['presentes']);

  }
  
}
