import {Routes} from "@angular/router";
import {UsersComponent} from "../commponents/users/users.component";
import {PostsComponent} from "../commponents/posts/posts.component";
import {CommentsComponent} from "../commponents/comments/comments.component";

export const routes: Routes = [{
  path: "users",
  component: UsersComponent,
  children: [{
    path: "postsFromUser/:id",
    component: PostsComponent,
    children: [{path: "commentsToPost/:id", component: CommentsComponent}]
  }]
}]
