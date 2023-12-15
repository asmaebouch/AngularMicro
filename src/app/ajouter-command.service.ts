import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AjouterCommandService {

  constructor(private http: HttpClient) {}
  PATH_OF_API="http://localhost:8888/COMMAND-SERVICE/command";

  EnregistrerClient(formData: any, headers: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(headers),
      withCredentials: true  // Include this if your server requires credentials
    };

    return this.http.post(`${this.PATH_OF_API}`+"/Save", formData, httpOptions);
  }
  public getClient(){
    return this.http.get(this.PATH_OF_API);
  }

  public deleteClient(id: number){
    return this.http.delete(`${this.PATH_OF_API}/${id}`);
  }
  public updateClient(student:any){
    return this.http.put(this.PATH_OF_API+"/updateClient",student);
  }
}
