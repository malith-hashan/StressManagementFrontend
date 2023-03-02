import {Component, OnInit} from '@angular/core';
import {QuectionServiceService} from "../../service/quection-service/quection-service.service";
import {IQuection} from "../../modules/quectionModle/quectionModle";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-view-quections',
  templateUrl: './view-quections.component.html',
  styleUrls: ['./view-quections.component.css']
})
export class ViewQuectionsComponent implements OnInit{
  public quections:IQuection[]=[];

  constructor(private quectionService :QuectionServiceService) {
  }
  ngOnInit():void {
    this.getAllQuection();
    this.testcheck();
  }

  public getAllQuection():void{
    this.quectionService.getAllQuection().subscribe(
      (responce :IQuection[])=>{
        this.quections =responce;
      },
    (error:HttpErrorResponse)=>{
      alert(error.message)
  }
    );
}
//   public getAllQuection(){
//     this.quectionService.getAllQuection().subscribe((data:IQuection[])=> console.log(data));
//   }
  public testcheck(){
    this.quectionService.test().subscribe((data:String)=>console.log(data))
  }

}
