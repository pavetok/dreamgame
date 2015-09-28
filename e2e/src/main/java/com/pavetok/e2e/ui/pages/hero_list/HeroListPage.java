package com.pavetok.e2e.ui.pages.hero_list;

import com.pavetok.e2e.ui.base.AbstractPage;

public class HeroListPage extends AbstractPage {

    private final HeroList heroList = new HeroList();

    public HeroListPage() {
        super("/heroes");
    }

    @Override
    public void shouldBeVisible() {
        heroList.shouldBeVisible();
    }
}
