package com.pavetok.e2e.ui.base;

import org.testng.annotations.BeforeClass;

public class RegisteredUserTest extends BaseTest {

    @BeforeClass
    public void baseDataSetUp() throws Exception {
        user.registers();
    }
}
