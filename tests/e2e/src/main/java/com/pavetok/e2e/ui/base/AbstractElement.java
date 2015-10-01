package com.pavetok.e2e.ui.base;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;

public abstract class AbstractElement {

    private String selector;

    public AbstractElement(String selector) {
        this.selector = selector;
    }

    public void shouldBeVisible() {
        $(selector).shouldBe(visible);
    }
}
