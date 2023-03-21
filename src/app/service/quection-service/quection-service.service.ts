import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { IQuection } from "../../modules/quectionModle/quectionModle";
import { IQuectionNew } from "../../modules/quectionModle/quectionModleForServey";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuectionServiceService {
  private API_PATH = environment.apiBaseUrl;
  // private api_path = "http://localhost:8080/api/question/"
  requestHeader = new HttpHeaders({
    "No-Auth": "True"
  })

  constructor(private http: HttpClient) { }
  public getAllQuection(): Observable<IQuection[]> {
    return this.http.get<IQuection[]>(`${this.API_PATH}/question/`)

    // return this.http.get<IQuection[]>('http://localhost:8080/api/question/')
  }

  public GettAllQuectionForServey(): Observable<IQuectionNew[]> {
    console.log("testwork")
    return this.http.get<IQuectionNew[]>(`${this.API_PATH}/question/serveyQuection/`)
  }

  public addQuection(quection: IQuection): Observable<IQuection> {
    console.log(quection);
    return this.http.post<IQuection>(
      `${this.API_PATH}/question/`, quection
    )
  }

  public editQuection(id: string, quection: IQuection): Observable<IQuection> {
    return this.http.put<IQuection>(
      `${this.API_PATH}/question/` + id, quection
    )
  }
  public getQuectionById(id: string): Observable<IQuection> {
    return this.http.get<IQuection>(`${this.API_PATH}/question/${id}`)
  }

  public deleteQuection(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_PATH}/question/${id}`)
  }

}
