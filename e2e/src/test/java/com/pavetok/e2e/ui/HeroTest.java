package com.pavetok.e2e.ui;

import com.pavetok.e2e.domain.Hero;
import com.pavetok.e2e.ui.pages.HeroListPage;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class HeroTest extends BaseUserTest {

    private HeroListPage heroListPage = new HeroListPage();
    private Hero hero;

    @BeforeMethod
    public void dataSetUp() throws Exception {
        hero = new Hero().withName("hero1").withUserId(user.getId());
    }

    @Test
    public void userShouldSeeOneHero() throws Exception {
        // given
        database.contains(hero);
        // when
        user.opens(heroListPage);
        // then
        user.shouldSee(hero);
    }
}
