import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostsResolveService} from "../services/posts-resolve.service";

const routes: Routes = [
  {path: "", component: PostsComponent, resolve: {posts:PostsResolveService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
