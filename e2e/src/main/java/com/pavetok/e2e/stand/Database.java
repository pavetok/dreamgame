package com.pavetok.e2e.stand;

import com.pavetok.e2e.domain.Hero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

public class Database {

    @Autowired
    private MongoTemplate template;

    public void contains(Hero hero) {

    }

    public void clear() {
        template.remove(new Query(), "users");
    }
}
