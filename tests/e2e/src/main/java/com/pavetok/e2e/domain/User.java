package com.pavetok.e2e.domain;

import com.pavetok.e2e.storage.UserRepository;
import com.pavetok.e2e.ui.base.AbstractPage;
import com.pavetok.e2e.ui.pages.signup.SignUpPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.Document;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static com.jayway.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.not;

@Document(collection = "users")
public class User {

    @Autowired
    private UserRepository repository;
    private SignUpPage signUpPage;

    private String id;
    private String email;
    private String password;

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

    public String getId() {
        if (id == null) {
            await().until(repository::count, not(0));
            id = repository.findByEmail(getEmail()).getId();
        }
        return id;
    }

    public String getEmail() {
        return email;
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
        $(".hero").find(".hero-name").shouldHave(text(hero.getName()));
    }
}
