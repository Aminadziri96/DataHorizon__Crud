import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1';

  constructor(private _http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this._http.get(this.apiUrl);
  }
  
  getEmployeeList(): Observable<any> {
    return this._http.get('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://hub.dummyapis.com/employee/${id}`);
  }
}
