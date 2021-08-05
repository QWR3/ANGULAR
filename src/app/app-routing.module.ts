import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: "users", loadChildren: () => import("./modules/users/users.module").then(m => m.UsersModule)},
  {path: "posts", loadChildren: () => import("./modules/posts/posts.module").then(m => m.PostsModule)},
  {path: "counter", loadChildren: () => import("./modules/counter/counter.module").then(m => m.CounterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
