package com.pavetok.e2e.ui;

import org.junit.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

public class AbstractTest {

    @Autowired
    MongoTemplate template;

    @Before
    public void abstractTestSetUp() throws Exception {
        template.remove(new Query(), "users");
    }
}
