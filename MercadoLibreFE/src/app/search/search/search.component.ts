import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initSearchForm();
  }

  search() {
    this.router.navigate(['/items'], {queryParams: {search: this.searchForm.controls['searchValue'].value}});
  }

  private initSearchForm() {
    this.searchForm = this.fb.group({
      searchValue: new FormControl('', [Validators.required]),
    });
  }

}
