package com.pavetok.e2e.domain;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "heroes")
public class Hero {

    private String id;
    private String name;
    private String userId;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUserId() {
        return userId;
    }

    public Hero withId(String id) {
        this.id = id;
        return this;
    }

    public Hero withName(String name) {
        this.name = name;
        return this;
    }

    public Hero withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}
