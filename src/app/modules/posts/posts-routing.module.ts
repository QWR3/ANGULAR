import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostsResolveService} from "../services/posts-resolve.service";
import {AboutPostComponent} from "./components/about-post/about-post.component";
import {CanDeactivateAboutService} from "../services/can-deactivate-about.service";

const routes: Routes = [
  {
    path: "",
    component: PostsComponent,
    resolve: {posts: PostsResolveService},
    canDeactivate: [CanDeactivateAboutService]
  },
  {path: ":id", component: AboutPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
