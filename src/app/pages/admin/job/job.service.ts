import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class JobService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    return this.http.get('api/jobs');
  }

  item(id): Observable<any> {
    return this.http.get('api/jobs/' + id);
  }

  count(): Observable<any> {
    return this.http.get('api/jobs/count');
  }
}
