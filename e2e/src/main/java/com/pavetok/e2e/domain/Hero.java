package com.pavetok.e2e.domain;

public class Hero {

    private String name;

    public Hero withName(String name) {
        this.name = name;
        return this;
    }
}
