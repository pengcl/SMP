import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get('api/employees');
  }

  item(id): Observable<any> {
    return this.http.get('api/employees/' + id);
  }

  count(): Observable<any> {
    return this.http.get('api/employees/count');
  }
}
