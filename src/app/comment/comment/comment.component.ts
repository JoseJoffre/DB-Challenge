import { CommentService } from './../comment.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comment: Comment;
  key: string = '';
  constructor(private _commentService: CommentService) {}

  ngOnInit() {
    this.comment = new Comment();
    this.key = null;
  }
  onSubmit() {
    this._commentService.insert(this.comment);

    this.comment = new Comment();
    this.key = null;
  }
}
