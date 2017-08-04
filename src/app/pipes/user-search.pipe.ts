import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/user.model';

@Pipe({name: 'userSearch'})
export class UserSearchPipe implements PipeTransform {
  transform(users: User[], query?: string): any {
    if (query) {
      return users.filter( (user: any) => {
        return user.name.includes(query)
          || user.surname.includes(query)
          || user.email.includes(query);
        }
      );
    }
    return users;
  }
}
