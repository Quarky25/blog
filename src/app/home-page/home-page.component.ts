import { Component } from '@angular/core';
import { IBlogPost } from '../model/blog-post.model';
import { BlogPostList } from '../model/blog-post-list.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
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
