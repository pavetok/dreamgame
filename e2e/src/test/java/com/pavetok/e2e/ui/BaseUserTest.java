package com.pavetok.e2e.ui;

import org.junit.BeforeClass;

public class BaseUserTest extends BaseTest {

    @BeforeClass
    public void baseDataSetUp() throws Exception {
        user.registers();
        user = database.get(user);
    }
}
