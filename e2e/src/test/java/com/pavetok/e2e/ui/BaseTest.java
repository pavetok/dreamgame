package com.pavetok.e2e.ui;

import com.pavetok.e2e.domain.User;
import com.pavetok.e2e.stand.Database;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;

@ContextConfiguration(locations = {"classpath:*.xml"})
public class BaseTest extends AbstractTestNGSpringContextTests {

    @Autowired
    protected Database database;
    @Autowired
    protected User user;

    @BeforeClass
    public void baseSuiteSetUp() {
        database.clearAll();
        user = user
                .withEmail("email@domain.com")
                .withPass("password");
    }

    @BeforeMethod
    public void baseTestSetUp() throws Exception {
        database.toDefault();
    }

    @BeforeMethod
    public void baseDataSetUp() throws Exception {
        // empty
    }
}
