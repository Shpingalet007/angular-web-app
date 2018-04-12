import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public api: RestApiService) { }

  onSubmit() {
    //this.api.sendComment();
  }

  ngOnInit() {
  }

}
