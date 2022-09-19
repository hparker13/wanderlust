package org.generation.wanderlust.service;

import java.util.List;

import org.generation.wanderlust.data.entity.Post;
import org.generation.wanderlust.repository.PostRepository;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor 
public class PostServiceImpl implements PostService{
    private final PostRepository postRepository;

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public void savePost(Post post) {
        postRepository.save(post);
    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public List<Post> getByLocation(String location) {
        return postRepository.findByLocation(location);
    }

    @Override
    public List<Post> getByUsername(String username) {
        return postRepository.findByUsername(username);
    }
    
}
