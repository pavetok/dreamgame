package com.pavetok.e2e.stand;

import com.pavetok.e2e.db.HeroRepository;
import com.pavetok.e2e.db.UserRepository;
import com.pavetok.e2e.domain.Hero;
import org.springframework.beans.factory.annotation.Autowired;

import static com.jayway.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.notNullValue;

public class Database {

    @Autowired
    public UserRepository userRepository;
    @Autowired
    public HeroRepository heroRepository;

    public void contains(Hero hero) {
        Hero actual = heroRepository.save(hero);
        await().until(() -> heroRepository.findOne(actual.getId()), notNullValue());
    }

    public void clear() {
//        userRepository.deleteAll();
        heroRepository.deleteAll();
    }
}
