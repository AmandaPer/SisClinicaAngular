import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Exame } from '../exame';
import { ExameService } from '../exame.service';

@Component({
  selector: 'app-show-exame',
  templateUrl: './show-exame.component.html',
  styleUrls: ['./show-exame.component.css']
})
export class ShowExameComponent implements OnInit {

  public exame: any = {};
  public id: number;
  public id2: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exameService: ExameService) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        const id2 = params['id2'];
        if (id) {
          this.exameService.getById(id,id2).subscribe((exame: any) => {
            if (exame) {
              this.exame = exame;
              console.log(exame);
              this.id = id;
              this.id2 = id2;
            } else {
              alert('Exame não encontrado!');
              this.router.navigate(['/exames']);
            }
          });
        };
    });
  }
edit(id){
  this.router.navigate(['pacientes/' + this.id + '/exames/' + this.id2 + '/edit']);
  return false;
}

back(){
  this.router.navigate(['pacientes/' + this.id + '/exames']);
}

}
