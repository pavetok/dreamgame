package com.pavetok.e2e.ui;

import com.codeborne.selenide.Configuration;
import com.pavetok.e2e.actors.User;
import com.pavetok.e2e.ui.pages.HeroListPage;
import com.pavetok.e2e.ui.pages.SignUpPage;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:db.xml"})
public class RegistrationTest extends AbstractTest {

    private User visitor;
    private SignUpPage signUpPage = new SignUpPage();
    private HeroListPage heroListPage = new HeroListPage();

    @Before
    public void testSetUp() throws Exception {
        Configuration.baseUrl = "localhost:3000";
        visitor = new User().withEmail("email@domain.com").withPass("password");
    }

    @Test
    public void visitorShouldBeRegistered() throws Exception {
        visitor.opens(signUpPage);
        visitor.registers();
        visitor.shouldSee(heroListPage);
    }
}
