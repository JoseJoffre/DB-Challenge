import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  comments: Observable<any>;
  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.comments = this.commentService.getAll();
  }
}
