import {PostsComponent} from "../commponents/posts/posts.component";
import {Routes} from "@angular/router";
import {AboutPostComponent} from "../commponents/about-post/about-post.component";

export const routes: Routes = [{
  path: "posts",
  component: PostsComponent,
  children: [{path: ":id", component: AboutPostComponent}]
}]
