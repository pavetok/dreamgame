package com.pavetok.e2e.ui.tests;

import com.pavetok.e2e.domain.User;
import com.pavetok.e2e.ui.base.BaseTest;
import com.pavetok.e2e.ui.pages.hero_list.HeroListPage;
import com.pavetok.e2e.ui.pages.signup.SignUpPage;
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
