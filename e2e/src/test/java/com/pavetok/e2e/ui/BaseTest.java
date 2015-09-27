package com.pavetok.e2e.ui;

import com.pavetok.e2e.actors.User;
import com.pavetok.e2e.stand.Application;
import com.pavetok.e2e.stand.Database;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:db.xml"})
public class BaseTest {

    @Autowired
    protected Database database;
    @Autowired
    protected Application application;

    protected User user;

    @BeforeClass
    public static void baseSuiteSetUp() {
//        Configuration.baseUrl = "localhost:3000";
    }

    @Before
    public void baseTestSetUp() throws Exception {
        database.clear();
    }

    @Before
    public void baseDataSetUp() throws Exception {
        user = new User()
                .withEmail("email@domain.com")
                .withPass("password");
    }
}
