package com.pavetok.e2e.db;

import com.pavetok.e2e.actors.User;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, String> {
    @Query("{emails.address : ?0}")
    User findByEmail(String email);
}
