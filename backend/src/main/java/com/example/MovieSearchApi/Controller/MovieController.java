package com.example.MovieSearchApi.Controller;

import com.example.MovieSearchApi.MovieResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/by-title")
    public List<MovieResponse> getMovieByTitle(@RequestParam String title) {
        String url = "https://www.apirequest.in/movie/api/title/" + title;

        MovieResponse[] movies = restTemplate.getForObject(url, MovieResponse[].class);

        return Arrays.asList(movies);
    }
}
