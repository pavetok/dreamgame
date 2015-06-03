*** Settings ***
Resource    common.robot

*** Test Cases ***
User Can See Hero List
    ${HeroListPage} =  Get Library Instance  HeroListPage
    When User.Opens  ${HeroListPage}
    Then User.Should See  ${HeroListPage}