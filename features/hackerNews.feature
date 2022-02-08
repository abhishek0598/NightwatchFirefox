@Hacker
Feature: Hacker News Feature

@HackerScenario
  Scenario Outline: Scenario Outline name: Searching Hacker News
    Given I open Hacker News Home page
    Then the title is <Title>
    And the Hacker News search form exists
  Examples:
      | Title         |
      | "Hacker News" |