*** Settings ***
Resource    common.robot

*** Test Cases ***
User Can See Hero List
    ${hero1} =  Hero.New  Figvan
    When User.Opens  ${HeroesPage}
    Then User.Should See  ${hero1}
