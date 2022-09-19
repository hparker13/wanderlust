package org.generation.wanderlust.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class PostDto {
    
    private String location;
    private String post_text;
    private byte[] post_url;

    
}
