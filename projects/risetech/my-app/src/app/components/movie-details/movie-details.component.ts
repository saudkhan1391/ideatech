import { Component, OnInit, Input } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { CallomdbService } from 'src/app/services/callomdb.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  SearchResults;
  selectedMovie =history.state.data;
  // @Input() omData: any[];
  constructor(private todosComponent: TodosComponent, private omdbService: CallomdbService,private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log("this.todosComponent.SearchResults in details component 1:", this.todosComponent.SearchResults);
    console.log(" History  : ", history);
    this.omdbService.searchMovieByName().subscribe(data => {
      this.SearchResults = data;
      // console.log("search results ", this.SearchResults ,data)
    });
  }

}
