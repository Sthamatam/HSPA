import { Injectable } from '@angular/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: User)
{
  let UserArray = [];
  if(localStorage.getItem('Users'))
  {
    UserArray = JSON.parse(localStorage.getItem('Users'));
  }
  return UserArray.fill(p => p.userName === user.userName && p.password === user.password);
}
}
