package com.pavetok.e2e.actors;

import com.pavetok.e2e.ui.pages.AbstractPage;
import com.pavetok.e2e.ui.pages.SignUpPage;

import static com.codeborne.selenide.Selenide.open;

public class User {

    private SignUpPage signUpPage;
    private String email;
    private String password;

    public User() {
        signUpPage = new SignUpPage();
    }

    public void opens(AbstractPage page) {
        open(page.getPath());
    }

    public void registers() {
        signUpPage.signUp(this);
    }

    public String getEmail() {
        return email;
    }

    public String getPass() {
        return password;
    }

    public User withEmail(String email) {
        this.email = email;
        return this;
    }

    public User withPass(String password) {
        this.password = password;
        return this;
    }

    public void shouldSee(AbstractPage page) {
        page.shouldBeVisible();
    }
}
