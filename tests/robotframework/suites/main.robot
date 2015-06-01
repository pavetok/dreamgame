*** Settings ***
Resource    common.robot

*** Test Cases ***
User Can See Hero List
    HeroListPage.Should Be Visible
