package com.pavetok.e2e.ui.pages;

import com.codeborne.selenide.SelenideElement;
import com.pavetok.e2e.domain.User;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;

public class SignUpPage extends AbstractPage {

    private final SelenideElement emailField;
    private final SelenideElement passwordField;
    private final SelenideElement passwordAgain;
    private final SelenideElement submitButton;

    public SignUpPage() {
        super("/sign-up");
        emailField = $("#at-field-email");
        passwordField = $("#at-field-password");
        passwordAgain = $("#at-field-password_again");
        submitButton = $("#at-btn");
    }

    public void signUp(User visitor) {
        emailField.setValue(visitor.getEmail());
        passwordField.setValue(visitor.getPassword());
        passwordAgain.setValue(visitor.getPassword());
        submitButton.click();
    }

    @Override
    public void shouldBeVisible() {
        emailField.shouldBe(visible);
        passwordField.shouldBe(visible);
        passwordAgain.shouldBe(visible);
        submitButton.shouldBe(visible);
    }
}
