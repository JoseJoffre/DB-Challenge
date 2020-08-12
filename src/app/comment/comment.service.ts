import { Comment } from './comment';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private db: AngularFireDatabase) {}
  onSubmit() {}
  insert(comment: Comment) {
    this.db
      .list('comment')
      .push(comment)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  getAll() {
    return this.db
      .list('comment')
      .snapshotChanges()
      .pipe(
        map((changes) => {
          console.log(changes);
          return changes.map((data: any) => ({
            key: data.payload.key,
            ...data.payload.val(),
          }));
        })
      );
  }
}
