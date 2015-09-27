package com.pavetok.e2e.ui;

import com.pavetok.e2e.actors.User;
import com.pavetok.e2e.ui.pages.HeroListPage;
import com.pavetok.e2e.ui.pages.SignUpPage;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class RegistrationTest extends BaseTest {

    private User visitor;
    private SignUpPage signUpPage = new SignUpPage();
    private HeroListPage heroListPage = new HeroListPage();

    @BeforeMethod
    public void dataSetUp() throws Exception {
        visitor = user;
    }

    @Test
    public void visitorShouldBeRegistered() throws Exception {
        // given
        visitor.opens(signUpPage);
        // when
        visitor.registers();
        // then
        visitor.shouldSee(heroListPage);
    }
}
