package com.pavetok.e2e.stand;

import com.pavetok.e2e.actors.User;
import com.pavetok.e2e.db.HeroRepository;
import com.pavetok.e2e.db.UserRepository;
import com.pavetok.e2e.domain.Hero;
import org.springframework.beans.factory.annotation.Autowired;

public class Database {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HeroRepository heroRepository;

    public void contains(Hero hero) {
        heroRepository.save(hero);
    }

    public void clear() {
        userRepository.deleteAll();
        heroRepository.deleteAll();
    }

    public User get(User user) {
        return userRepository.findByEmail(user.getEmail());
    }
}
