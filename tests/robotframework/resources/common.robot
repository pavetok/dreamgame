*** Settings ***
# builtin
Library     String
Library     Collections
Library     OperatingSystem
# external
Library     Selenium2Library

# actors
Library     actors.User  WITH NAME  User
# pages
Library     pages.HeroListPage  /heroes  WITH NAME  HeroListPage

Variables   variables.py


*** Keywords ***
Global Setup
    Common.Setup Selenium

Global Teardown
    Close Browser

Suite Setup
    No Operation

Suite Teardown
    No Operation

Test Setup
    No Operation

Test Teardown
    No Operation

Setup Selenium
#    Create Webdriver  PhantomJS  executable_path=${PHANTOMJS_BINPATH}
    Create Webdriver  Chrome
    Go To  ${MIRROR_URL}
    Maximize Browser Window
    Set Selenium Speed  0s
    Set Selenium Timeout  5s