package org.generation.wanderlust.controller;

import org.generation.wanderlust.data.entity.Post;
import org.generation.wanderlust.service.PostService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/post")

public class PostController {
    final PostService postService;

    @GetMapping
    public Iterable<Post> getPosts(){
        return postService.getAllPosts();
    }

    @GetMapping("username/{username}")
    public Iterable<Post> getByUsername(@PathVariable String username){
        return postService.getByUsername(username);
    }
    
    @GetMapping("location/{location}")
    public Iterable<Post> getByLocation(@PathVariable String location){
        return postService.getByLocation(location);
    }

    @CrossOrigin
    @PostMapping("/save")
    public void savePost(@RequestBody Post post) {
        postService.savePost(post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        postService.deletePost(id);
    }
    
}
