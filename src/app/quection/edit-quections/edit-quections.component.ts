import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuectionServiceService} from "../../service/quection-service/quection-service.service";
import {IQuection} from "../../modules/quectionModle/quectionModle";
import {identity} from "rxjs";

@Component({
  selector: 'app-edit-quections',
  templateUrl: './edit-quections.component.html',
  styleUrls: ['./edit-quections.component.css']
})
export class EditQuectionsComponent implements OnInit{

  id:string="";
  //quection:IQuection;
  constructor(
   // private quection:IQuection,
    private router: Router,
    private quectionService : QuectionServiceService,
    private route: ActivatedRoute
  ) {
  }
ngOnInit():void {
    // this.id=this.route.snapshot.params['id'];
    // this.quectionService.getQuectionById(this.id).subscribe(
    //   (response:any) =>{
    //     this.quection = response;
    //   }
    //   )
}
  onSubmit() {
    // this.quectionService
    //   .editQuection(this.id, this.quection)
    //   .subscribe((response:IQuection) => {
    //     console.log(response);
    //
    //     alert('Updated');
    //     this.router.navigate(['Quections']);
    //   });
  }

  // onBackClick() {
  //   this.router.navigate(['Quections']);
  // }
}
