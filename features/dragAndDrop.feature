@DragandDrop
Feature: Drag and Drop functionality

    # Scenario: To check drag and drop functionality

    #     Given I open website
    #     When dragging element is "#drag1"
    #     And dropping element is present
    #     Then drag and drop functionality is successfully working

    @DragandDropScenario
    Scenario Outline: To check drag and drop funcitonality
        Given open website from <url>
        When dragging element is <dragging element>
        And dropping element is <dropping element>
        Then drag and drop functionality is successfully working
        Examples:
            | dragging element | dropping element | url                                                  |
            | "#drag1"         | "#div1"          | "http://tutorials.actionqa.com/yt/nw/dndexample.htm" |

            | "#drag1" | "#dv1" | "http://tutorials.actionqa.com/yt/nw/dndexample.htm" |

            | "#drag1" | "#div1" | "http://tutorials.actionqa.com/yt/nw/dndexample.ht" |




