package com.pavetok.e2e.ui;

import com.pavetok.e2e.domain.Hero;
import com.pavetok.e2e.ui.pages.HeroListPage;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:db.xml"})
public class HeroTest extends BaseTest {

    private HeroListPage heroListPage = new HeroListPage();
    private Hero hero;

    @Before
    public void dataSetUp() throws Exception {
        hero = new Hero().withName("hero1");
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
