import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.scss'],
})
export class ActivesComponent {
  constructor(private postSvc: PostService) {}
  post: Post[] = this.postAttivi();

  postAttivi() {
    return this.postSvc.getAttivi();
  }
}
