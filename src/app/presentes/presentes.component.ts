import { Component, OnInit } from '@angular/core';
import {PresentesService} from "./shared/presentes.service";
import {Presente} from "./shared/presente";


@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css']
})
export class PresentesComponent implements OnInit {

  private presentes: Presente[] = [];

  constructor(private presentesService: PresentesService) { }

  ngOnInit() {
    this.presentesService.getPresentes()
      .subscribe(data => this.presentes = data);
  }


  
  
  
deletePresente(presente): void {
    this.presentesService.deletePresente(presente.id)
    .subscribe(() => {
      this.presentes = this.presentes.filter(presente => presente.id != presente.id);
    });
  }

}
