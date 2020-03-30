import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Enfant } from '../enfant';
import { error } from 'util';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-ecr-list',
  templateUrl: './ecr-list.component.html',
  styleUrls: ['./ecr-list.component.css']
})
export class EcrListComponent implements OnInit {
  enfants:Observable<Enfant[]> ;
  closeResult: string;

  constructor(private enfantService:EnfantService , private route :Router ,private modalService: NgbModal) { }

  ngOnInit() {
    this.reloadData() ;
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.deleteEnfant(result);
      console.log({result});
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log("by pressing ESC");
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log("by clicking on a backdrop");
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
    
  deleteEnfant(id:number){
    
    this.enfantService.deleteEnfant(id)
      .subscribe(
        data => {
          console.log(data);
          //this.ngOnInit();
          this.route.navigate(['ecr-list']);
      } ,
       error => console.log(error));
       this.ngOnInit();
  } 

    reloadData(){
      this.enfantService.getEnfantList()
      .subscribe(
        data => {
          console.log(data);
          this.enfants=data ; 
      } ,
       error => console.log(error));
    }

    enfantDetails(id: number){
      this.route.navigate(['details' , id]);
    }

}
