import {Component, OnInit} from '@angular/core';
import {QuectionServiceService} from "../../service/quection-service/quection-service.service";
import {IQuection} from "../../modules/quectionModle/quectionModle";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {AddQuectionComponent} from "../../dialogBox/add-quection/add-quection.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-view-quections',
  templateUrl: './view-quections.component.html',
  styleUrls: ['./view-quections.component.css']
})
export class ViewQuectionsComponent implements OnInit{
  public quections:IQuection[]=[];


  constructor(private quectionService :QuectionServiceService,
              private matDialog: MatDialog,
              private router:Router) {
  }
  ngOnInit():void {
    this.getAllQuection();
  }

  public getAllQuection():void{
    this.quectionService.getAllQuection().subscribe(
      (responce :IQuection[])=>{
        this.quections =responce;
        console.log(responce)
      },
    (error:HttpErrorResponse)=>{
      alert(error.message)
  }
    );
  }

  openDialog(){
    this.matDialog.open(AddQuectionComponent,
      {
        maxWidth: '100vw',
        maxHeight: '100vh',
        width: '30%',
      });
  };
  // updateQuestion(id:string){
  //   this.router.navigate(['EditQuection',id]);
  // }

  public DeleteQuection(id: string): void {
    if (confirm('Are you sure want to delete question?')) {
      this.quectionService.deleteQuection(id).subscribe(
        (response: void) => {
          console.log(response);
          this.quectionService.getAllQuection();
          window.location.reload();
        },
        (HttpErrorResponse) => {
          // alert('Course Deleted');
          window.location.reload();
        }
      );
    }
  }





}
