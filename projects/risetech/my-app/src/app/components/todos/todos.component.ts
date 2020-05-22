import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';
import { CallomdbService } from 'src/app/services/callomdb.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  omData: any[];
  episodes: any[];
  MovieInput: string;
  SearchResults;
  results;
  selectedResult;
  constructor(private omdbService: CallomdbService, private router: Router) { }

  ngOnInit(): void {
    this.omdbService.getDataFromApi().subscribe(data => {
      this.omData = data;
      this.episodes = data.Episodes;
    });

  }
  ngDoCheck() {
  }
  navigateToDetailsPage() {
    // this.router.navigate(['/MovieDetailsComponent'])
  }
  ProvideSelectedResult(result: any) {
    this.selectedResult = result;
    console.log("return selected results", this.selectedResult);
    return this.selectedResult;
  }
  SearchClicked() {
    this.omdbService.movieInput = this.MovieInput;
    this.omdbService.searchMovieByName().subscribe(data => {
      this.SearchResults = data;
      this.results = data.Search;
      // console.log("Result of Search Movie by name 2", this.SearchResults);
      console.log("Results :", this.results);
    })
  }

}
