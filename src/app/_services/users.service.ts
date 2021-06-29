import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../_helpers/interfaces/userDetails';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<Users[]>{
    let test = this.http.get<Users[]>(environment.userApiHost+'users');
    return test;
  }
 
  getSingleUser(pid):Observable<Users>{
    return this.http.get<Users>(environment.userApiHost+'fetchUser/'+pid);
  }

  createUser(payload):Observable<Users>{
    return this.http.post<Users>(environment.userApiHost+'createUser', payload);
  }

  editUser(pid, payload):Observable<Users>{
    return this.http.put<Users>(environment.userApiHost+'updateUser/'+pid, payload);
  }

  deleteUser(pid):Observable<Users>{
    return this.http.delete<Users>(environment.userApiHost+'deleteUser/'+pid);
  }
}