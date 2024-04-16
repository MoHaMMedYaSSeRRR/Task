import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], searchTerm: number): User[] {
    if (!searchTerm) {
      return users;
    }
    return users.filter(user => user.id === searchTerm);
  }

}
