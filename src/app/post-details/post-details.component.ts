import { Component } from '@angular/core';
import { IBlogPost } from '../model/blog-post.model';
import { BlogPostList } from '../model/blog-post-list.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  posts: IBlogPost[] = []
  post: IBlogPost = {} as IBlogPost;
  index: number = 0;
  
  constructor(private blogPostList: BlogPostList, private route: ActivatedRoute) {
    this.posts = this.blogPostList.getPosts();
  
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get("id");
      if(id !== null) {
        this.index = +id;
        this.post = this.posts[this.index]
      }
    })
  }
}
