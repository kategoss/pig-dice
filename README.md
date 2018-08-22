# Pig Dice

#### Pig Dice/Game

#### By Kate Goss and Kendra Kelly

## Description

This program will allow two users to play Pig Dice against each other.

## Setup/Installation Instructions

Make sure you have Git downloaded and setup on your local device.

Open terminal on your local device.

If you have not configured Git on your local device, in the terminal, you will need to set up a global configuration by entering the following:

```
_git config --global user.name "Your first and last name"_

git config --global user.email example@gmail.com_
```
If you're not already in the desktop directory in your terminal, then direct yourself to the desktop directory by entering the follow in your terminal:

`_cd Desktop_`

You can now begin by cloning the GitHub remote repository to your desktop. On the GitHub website with the remote GitHub repository, you will find a button colored green with the text "Clone or Download." Click the button and copy the GitHub repository URL.

Now in your terminal, enter the following:

`_git clone "the GitHub repository URL you copied"_` without the quotes

Now your desktop should have a local copy of the cloned repository.

To view the webpage, in your terminal, enter the following:

`_open index.html_`

The webpage should simply open in your default web browser.

## Specifications

Visitor clicks a button and gets to see a number in return.
Example Input: clicks "roll" button
Example Output: "6" is on screen

Upon clicking "roll" they see 1-6 as the number. This is saved in a temporary score.
Example Input: click "roll" button
Example Output: sees "4"

If they click roll again the new roll is added to the previous roll value.
Example Input: click "roll" - "4", click "roll" - "2"
Example Output: "6"

After clicking roll they now have the choice for a second button that allows them to hold. If clicked the number goes to a permanent score.
Example Input: click "hold"
Example Output: "4"

After clicking hold, the roll number and temporary score slots are reset to 0
Example Input: "roll" = "2", click "roll" = "3", click "hold"
Example Output: "0" at roll / "0" at temporary score
-----
If a 1 is rolled all temporary score is erased.
Example Input: "1"
Example Output: "0"

If a 1 is rolled and the turn moves to the next player.
Example Input: "1"
Example Output: "End of Turn"

Above specs are repeated with Player 2
Example Input: Rolls Dice chooses to hold or roll again
Example Output: "3"

First player to 100 point permanent cap is winner
Example Input: Rolls Dice & holds
Example Output: "100pts - You win!"

## Technologies Used

HTML5

CSS3

Git

GitHub

README

### License

Copyright (c) 2018 Kate Goss and Kendra Kelly
