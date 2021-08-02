import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'http://localhost:8080/api/moniteurs';

@Injectable({
  providedIn: 'root'
})
export class MoniteurService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(`/api/moniteurs`, { observe: 'response' , headers: authorization.headers });
  }

  getOne(): Observable<any> {
    return ;
  }

  update(): Observable<any> {
    return ;
  }

}

export class authorization {
  public static headers = {'Authorization': 'Bearer ' + localStorage.getItem('token')}
}
