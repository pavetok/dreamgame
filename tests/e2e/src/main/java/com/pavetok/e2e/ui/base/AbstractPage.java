package com.pavetok.e2e.ui.base;

public abstract class AbstractPage {

    private final String path;

    public AbstractPage(String path) {
        this.path = path;
    }

    public String getPath() {
        return path;
    }

    public abstract void shouldBeVisible();
}
