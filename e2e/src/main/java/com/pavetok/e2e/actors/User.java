package com.pavetok.e2e.actors;

import com.pavetok.e2e.domain.Hero;
import com.pavetok.e2e.ui.pages.AbstractPage;
import com.pavetok.e2e.ui.pages.SignUpPage;
import org.springframework.data.mongodb.core.mapping.Document;

import static com.codeborne.selenide.Selenide.open;

@Document(collection = "users")
public class User {

    private String id;
    private String email;
    private String password;

    private SignUpPage signUpPage;

    public User() {
        signUpPage = new SignUpPage();
    }

    public void opens(AbstractPage page) {
        open(page.getPath());
    }

    public void registers() {
        opens(signUpPage);
        signUpPage.signUp(this);
    }

    public String getEmail() {
        return email;
    }

    public String getId() {
        return id;
    }

    public String getPassword() {
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

    public void shouldSee(Hero hero) {

    }
}
