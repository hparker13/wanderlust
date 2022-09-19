package org.generation.wanderlust.service;

import java.util.List;

import org.generation.wanderlust.data.entity.AppUser;
import org.generation.wanderlust.repository.AppUserRepository;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AppUserServiceImpl implements AppUserService {
    private final AppUserRepository appUserRepository;

    @Override
    public List<AppUser> getAllUsers() {
        return appUserRepository.findAll();
    }

    @Override
    public void saveUser(AppUser appUser) {
        appUserRepository.save(appUser);
        
    }

    @Override
    public void deleteUser(Long id) {
        appUserRepository.deleteById(id);
        
    }

    @Override
    public List<AppUser> getUserByUsername(String username) {
        return appUserRepository.findByUsername(username);
    }
    
}
