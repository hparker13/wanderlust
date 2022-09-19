package org.generation.wanderlust.controller;

import org.generation.wanderlust.data.entity.AppUser;
import org.generation.wanderlust.service.AppUserService;
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
@RequestMapping("/user")
public class AppUserController {
    final AppUserService appUserService;

    @GetMapping 
    public Iterable<AppUser> getAppUsers(){
        return appUserService.getAllUsers();
    }

    @GetMapping("username/{username}")
    public Iterable<AppUser> getUserByUsername(@PathVariable String username){
        return appUserService.getUserByUsername(username);
    }

    @PostMapping("/save")
    public void saveUser(@RequestBody AppUser appUser) {
        appUserService.saveUser(appUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        appUserService.deleteUser(id);
    }
}
