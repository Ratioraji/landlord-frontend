import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable()
export class UserService {
  constructor() {}
  getCurrentUser(): object {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
}
