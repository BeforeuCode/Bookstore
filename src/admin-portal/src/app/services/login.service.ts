import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  sendCredential(username: string, password: string) {
  	let url = "http://localhost:8080/token";
  	let encodedCridentials = btoa(username+":"+password);
  	let basicHeader = "Basic "+encodedCridentials;
  	let headers = new Headers ({
  		'Content-Type' : 'application/x-www-form-urlencoded',
  		'Authorization' : basicHeader
  	});

  	return this.http.get(url, {headers: headers});

  }

}
