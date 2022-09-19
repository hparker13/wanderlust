package org.generation.wanderlust.repository;

import java.util.List;

import org.generation.wanderlust.data.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    List<AppUser> findByUsername(String username);
    List<AppUser> findByEmail(String email);
}
