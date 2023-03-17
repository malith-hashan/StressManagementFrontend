import { Component, OnInit } from '@angular/core';
import { QuectionServiceService } from "../../service/quection-service/quection-service.service";
import { NgForm } from "@angular/forms";
import { IQuection } from "../../modules/quectionModle/quectionModle";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-quection',
  templateUrl: './add-quection.component.html',
  styleUrls: ['./add-quection.component.css']
})
export class AddQuectionComponent implements OnInit {
  constructor(
    private quectionService: QuectionServiceService) {
    //private matDialogRef : MatDialogRef<AddQuectionComponent>) {
  }
  ngOnInit() {
  }
  public addQuection(addForm: NgForm): void {
    this.quectionService.addQuection(addForm.value).subscribe(
      (responce: IQuection) => {
        console.log(responce);
        this.quectionService.getAllQuection();
        addForm.reset();
        window.location.reload();
      }
    )
  }
}
