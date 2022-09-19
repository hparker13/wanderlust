package org.generation.wanderlust.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="user")
public class AppUser {
    @Id
    @GeneratedValue
    private Long id;

    @Column (nullable = false)
    private String username;

    @Column (nullable = false)
    private String password;

    @Column (nullable = false)
    private String email;

    @Column
    private String user_url;

    public AppUser(String username, String password, String email, String user_url) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.user_url = user_url;
    }
    
}
