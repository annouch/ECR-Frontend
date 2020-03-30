import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Enfant } from '../enfant';

@Component({
  selector: 'app-ecr-details',
  templateUrl: './ecr-details.component.html',
  styleUrls: ['./ecr-details.component.css']
})
export class EcrDetailsComponent implements OnInit {

  id :number;
  enfant : Enfant ;
  
  constructor(private enfantService: EnfantService , 
    private router: Router , private route : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.enfant = new Enfant() ;

    this.enfantService.getEnfant(this.id)
      .subscribe(data=>{
        console.log(data)
      this.enfant=data ;
      } ,error=>console.log(error));
  }


  listEcr(){
    this.router.navigate(['/ecr-list']);
  }
}
