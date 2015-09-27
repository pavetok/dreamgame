package com.pavetok.e2e.ui.pages;

import com.pavetok.e2e.ui.elements.HeroList;

public class HeroListPage extends AbstractPage {

    private final HeroList heroList;

    public HeroListPage() {
        super("/heroes");
        heroList = new HeroList();
    }

    @Override
    public void shouldBeVisible() {
        heroList.shouldBeVisible();
    }
}
