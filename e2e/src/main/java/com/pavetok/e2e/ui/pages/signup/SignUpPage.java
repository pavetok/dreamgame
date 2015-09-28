package com.pavetok.e2e.ui.pages.signup;

import com.codeborne.selenide.SelenideElement;
import com.pavetok.e2e.domain.User;
import com.pavetok.e2e.ui.base.AbstractPage;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;

public class SignUpPage extends AbstractPage {

    private final SelenideElement emailField = $("#at-field-email");
    private final SelenideElement passwordField = $("#at-field-password");
    private final SelenideElement passwordAgain = $("#at-field-password_again");
    private final SelenideElement submitButton = $("#at-btn");

    public SignUpPage() {
        super("/sign-up");
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
