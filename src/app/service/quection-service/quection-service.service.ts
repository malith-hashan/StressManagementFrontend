import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IQuection} from "../../modules/quectionModle/quectionModle";
import {IQuectionNew} from "../../modules/quectionModle/quectionModleForServey";

@Injectable({
  providedIn: 'root'
})
export class QuectionServiceService {
  private api_path="http://localhost:8080/api/question/"
  requestHeader =new HttpHeaders({
    "No-Auth":"True"
  })

  constructor(private http:HttpClient) { }
  public getAllQuection():Observable<IQuection[]>{
    return this.http.get<IQuection[]>('http://localhost:8080/api/question/')
  }

  public GettAllQuectionForServey():Observable<IQuectionNew[]>{ console.log("testwork")
    return this.http.get<IQuectionNew[]>('http://localhost:8080/api/question/serveyQuection/')

  }

  public addQuection(quection:IQuection):Observable<IQuection>{
    console.log(quection);
    return this.http.post<IQuection>(
    'http://localhost:8080/api/question/',quection
    )
  }

  public editQuection(id:string,quection:IQuection):Observable<IQuection>{
    return this.http.put<IQuection>(
      'http://localhost:8080/api/question/'+id,quection
    )
  }
  public getQuectionById(id:string):Observable<IQuection>{
    return this.http.get<IQuection>(`${this.api_path}${id}`)
  }

  public deleteQuection(id:string):Observable<void>{
    return this.http.delete<void>(`${this.api_path}${id}`)
  }

}
