import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from 'app/services/movies-service.service';


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movieList: Array<Object>;

  constructor(private moviesServicesService: MoviesServiceService) { 

  }

  ngOnInit() {
    this.movieList = this.moviesServicesService.getMovies();
  }

}
