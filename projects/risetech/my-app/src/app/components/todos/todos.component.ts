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
  constructor(private omdbService: CallomdbService, private router: Router) { }

  ngOnInit(): void {
    this.omdbService.getDataFromApi().subscribe(data => {
      this.omData = data;
      // console.log(data, "Data ");
      //  let episodes :any[] = this.omData.Episodes
      this.episodes = data.Episodes;
    });

  }
  ngDoCheck() {
    // console.log("omData in DoCheck ", this.omData);
  }
  navigateToDetailsPage() {
    // this.router.navigate(['/MovieDetailsComponent'])
  }
  SearchClicked() {
    this.omdbService.movieInput = this.MovieInput;
    this.omdbService.searchMovieByName().subscribe(data => {
      this.SearchResults=data;
      console.log("Result of Search Movie by name 2", this.SearchResults);
    })
  }

}
