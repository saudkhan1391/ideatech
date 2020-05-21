import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { TodosComponent } from '../components/todos/todos.component';
@Injectable({
  providedIn: 'root'
})
export class CallomdbService {
  
  apiKey = "631dde08";
  movieInput: string;
  omdbApi: string = "http://www.omdbapi.com/?i=tt3896198&apikey=631dde08";
  omdbApi2: string = "http://www.omdbapi.com/?t=tt0944947&Season=1&apikey=631dde08";
  constructor(private http: HttpClient) {
    
   }

  getDataFromApi(): Observable<any> {
    return this.http.get<any[]>(this.omdbApi2)
  }
  searchMovieByName(): Observable<any> {
    console.log("movieInput in service", this.movieInput)
    return this.http.get(`http://www.omdbapi.com/?t=${this.movieInput}&apiKey=${this.apiKey}`)
  }

}
