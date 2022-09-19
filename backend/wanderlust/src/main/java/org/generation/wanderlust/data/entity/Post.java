package org.generation.wanderlust.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Post {
    @Id
    @GeneratedValue
    private Long id;

    @Column (nullable = false)
    private String username;

    private String post_text;
    // @Column (length )
    private String post_url;

    @Column (nullable = false)
    private String location;
    
    @Column (nullable = false)
    private Long userid;

    public Post(String username, String post_text, String post_url, String location) {
        this.username = username;
        this.post_text = post_text;
        this.post_url = post_url;
        this.location = location;
    }


    
}
