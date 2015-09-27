package com.pavetok.e2e.ui;

import com.pavetok.e2e.domain.Hero;
import com.pavetok.e2e.ui.pages.HeroListPage;
import org.junit.Before;
import org.junit.Test;

public class HeroTest extends BaseUserTest {

    private HeroListPage heroListPage = new HeroListPage();
    private Hero hero;

    @Before
    public void dataSetUp() throws Exception {
        hero = new Hero().withName("hero1").withUserId(user.getId());
    }

    @Test
    public void userShouldSeeOneHero() throws Exception {
        // given
        application.contains(hero);
        // when
        user.opens(heroListPage);
        // then
        user.shouldSee(hero);
    }
}
