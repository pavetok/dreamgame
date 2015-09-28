package com.pavetok.e2e.storage;

import com.pavetok.e2e.domain.Hero;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface HeroRepository extends PagingAndSortingRepository<Hero, String> {
    // empty
}
