import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-not-actives',
  templateUrl: './not-actives.component.html',
  styleUrls: ['./not-actives.component.scss'],
})
export class NotActivesComponent {
  post: Post[] = this.postInattivi();

  constructor(private postSvc: PostService) {}

  postInattivi() {
    return this.postSvc.getInattivi();
  }
}
