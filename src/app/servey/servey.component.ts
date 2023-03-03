import {Component, OnInit} from '@angular/core';
import {ServeyServiceService} from "../service/servey-service.service";
import {NgForm} from "@angular/forms";
import {IQuection} from "../modules/quectionModle/quectionModle";
import {ServeyModle} from "../modules/serveyModle/serveyModle";
import {QuectionServiceService} from "../service/quection-service/quection-service.service";


@Component({
  selector: 'app-servey',
  templateUrl: './servey.component.html',
  styleUrls: ['./servey.component.css']
})
export class ServeyComponent implements OnInit {
  quections:IQuection[]=[];
constructor(private serveyService:ServeyServiceService,
            private quectionservice:QuectionServiceService,) {
}
ngOnInit() {
  this.quectionservice.getAllQuection().subscribe(

    (respoce:IQuection[])=>{
          this.quections=respoce;

    }
  )
}

  public createServey(addForm:NgForm):void{
  this.serveyService.createServey(addForm.value).subscribe(
    (responce:ServeyModle) => {
      this.serveyService.getAllServeys();
      addForm.reset();
      window.location.reload();
    }
  )
}


}
