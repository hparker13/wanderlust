package org.generation.wanderlust.repository;



import java.util.List;

import org.generation.wanderlust.data.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post>findByLocation(String location);
    List<Post>findByUsername(String username);
    
}
