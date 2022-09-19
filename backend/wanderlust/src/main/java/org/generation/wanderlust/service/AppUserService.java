package org.generation.wanderlust.service;

import java.util.List;

import org.generation.wanderlust.data.entity.AppUser;

public interface AppUserService {
    List<AppUser> getAllUsers();
    void saveUser(AppUser appUser);
    void deleteUser(Long id);
    // void editUser(User user);
    List<AppUser> getUserByUsername(String username);
}
