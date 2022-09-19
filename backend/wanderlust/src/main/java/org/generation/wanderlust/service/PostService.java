package org.generation.wanderlust.service;

import java.util.List;

import org.generation.wanderlust.data.entity.Post;

public interface PostService {
    List<Post> getAllPosts();

    void savePost(Post post);

    void deletePost(Long id);

    // void editPost(Post post);

    List<Post> getByLocation(String location);

    List<Post> getByUsername(String username);

}
