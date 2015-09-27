package com.pavetok.e2e.ui;

import org.testng.annotations.BeforeClass;

public class BaseUserTest extends BaseTest {

    @BeforeClass
    public void baseDataSetUp() throws Exception {
        user.registers();
    }
}
