import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page = 1
  basePath: string

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => this.page = +id);
    this.activatedRoute.url.subscribe(value => this.basePath = value[0].path)
  }

  ngOnInit(): void {
  }

  nextPage(): void {
    this.router.navigate([this.basePath, this.page + 1], )
  }

  prevPage(): void {
    this.router.navigate([this.basePath, this.page - 1], )
  }


}
