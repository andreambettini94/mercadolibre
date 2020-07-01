import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  results: any[];
  constructor(private route: ActivatedRoute,
              private service: ServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchResults(params.search);
    })
  }

  private searchResults(searchValue: string) {
    this.service.search(searchValue).subscribe(response => {
      this.results = response['items'];
    });
  }

}
