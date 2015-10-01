package com.pavetok.e2e.stand;

import com.pavetok.e2e.domain.Hero;
import com.pavetok.e2e.storage.HeroRepository;
import com.pavetok.e2e.storage.Storable;
import com.pavetok.e2e.storage.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.HashMap;
import java.util.Map;

import static com.jayway.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.notNullValue;

public class Database {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HeroRepository heroRepository;

    Map<Class, PagingAndSortingRepository> repositories;

    public void initialize() {
        repositories = new HashMap<>();
        repositories.put(Hero.class, heroRepository);
    }

    public void contains(Storable entity) {
        PagingAndSortingRepository repository = repositories.get(entity.getClass());
        repository.save(entity);
        await().until(() -> repository.findOne(entity.getId()), notNullValue());
    }

    public void clearAll() {
        userRepository.deleteAll();
        heroRepository.deleteAll();
    }

    public void reset() {
        heroRepository.deleteAll();
    }
}
