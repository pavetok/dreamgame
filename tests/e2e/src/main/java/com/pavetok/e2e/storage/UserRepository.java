package com.pavetok.e2e.storage;

import com.pavetok.e2e.domain.User;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, String> {
    @Query("{emails.address : ?0}")
    User findByEmail(String email);
}
