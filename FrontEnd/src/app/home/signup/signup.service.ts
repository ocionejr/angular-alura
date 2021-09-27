import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

const API_URL = environment.ApiUrl;
@Injectable()
export class SignUpService {
  constructor(private http: HttpClient) {}

  chackUserNameTaken(userName: string) {
    return this.http.get(API_URL + '/user/exists/' + userName);
  }

  signUp(newUser: NewUser) {
    return this.http.post(API_URL + '/user/signup', newUser);
  }
}
