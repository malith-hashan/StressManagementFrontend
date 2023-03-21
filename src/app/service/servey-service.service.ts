import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IQuection } from "../modules/quectionModle/quectionModle";
import { ServeyModle } from "../modules/serveyModle/serveyModle";
import { ServeyCreateModle } from "../modules/serveyModle/ServeyCreateModle";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServeyServiceService {
  private API_PATH = environment.apiBaseUrl;
  private api_Url = "http://localhost:8080/api/servey/"
  constructor(private http: HttpClient) { }

  public getAllServeys(): Observable<ServeyModle[]> {
    return this.http.get<ServeyModle[]>(`${this.API_PATH}/servey/`);
  }
  public createServey(servey: ServeyCreateModle): Observable<ServeyCreateModle> {
    console.log("servey service  work")
    console.log(servey);
    return this.http.post<ServeyCreateModle>(
      `${this.API_PATH}/servey/`, servey
    )
  }
  public getServeyByUserId(id: number): Observable<ServeyModle[]> {
    return this.http.get<ServeyModle[]>
      (`${this.API_PATH}/servey/user/${id}`)
  }
  public getServeyByServeyId(id: string): Observable<ServeyModle> {
    return this.http.get<ServeyModle>(
      (`${this.API_PATH}/servey/user/${id}`)
    )
  }
}
