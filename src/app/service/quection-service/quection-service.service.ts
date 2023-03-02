import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IQuection} from "../../modules/quectionModle/quectionModle";

@Injectable({
  providedIn: 'root'
})
export class QuectionServiceService {

  constructor(private http:HttpClient) { }
  public getAllQuection():Observable<IQuection[]>{
    return this.http.get<IQuection[]>('http://localhost:8080/api/question/')
  }

  public test():Observable<string>{
    return this.http.get<string>('http://localhost:8080/test/home')
  }

}
