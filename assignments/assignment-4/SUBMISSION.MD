# CSC 317 Assignment 4 Submission

**Name:** John Tatlonghari
**Student ID:** 924450940  
**GitHub Username:** JohnTatlonghari  
**Assignment Number:** 4
**GitHub Repo:** https://github.com/JohnTatlonghari/CSC317
**GitHub Pages URL:** https://johntatlonghari.github.io/CSC317/assignments/assignment-4/

## DOCUMENTATION

This project uses HTML, CSS, and Javascript to build an "IOS-like" calculator. Some features, such as modulo, negation, and percent are implemented in a simplified manner. Expect that it doesn't do its intended purpose properly. The calculator's display and its buttons are separated by divs arranged in blocks so they can be styled separately.  

I knew the calculator has buttons, so I utilize said tag. I also knew that it has two displays stacked on top of each other so initally I used divs. I understand you had to use javascript but wasn't sure how until lecture 3.

As for styling, all I knew was the buttons and display need to be like the IOS calculator. Grid display, different color operators, etc. However, I somewhat struggled centering the calculator itself and making sure the button grid is centered relative to the display. I had to experiment with width and margin values to get it correct (most of the time I was just referring to the wrong element though). 

Javascript was simpler because all I had to do was modify the values of the display. Again, modulo, negation, and percent behave differently to make things easy for now. Ideally you would get the most recent integer from the display and apply those operations to it but I'm not sure how to do that. I managed to avoid operators duplicating by comparing them to the previous character before appending to display. 

Overall I still have a long way to go. I need to be more organized and have a good plan first before starting to build a website.  I should use viewport units more for responsiveness too. 

## OTHER COMMENTS

Originally I went in blind, using what I learned in class and hello.js. Everything was fine until I made the mistake of putting the buttons in separate divs when they didn't need to. Also, I didn't know how to send information to the display after clicking a button. I had to reformat my html a couple of times until I looked at a tutorial on youtube. I learned about button's onclick attribute and how it calls a function whenever it happens.  In retrospect, I didn't need to use a tutorial when hello.js has answers too; Use document.getElementById() and addEventListener() for the buttons and document.getElementById().textContent for the displays. Still, the tutorial felt simpler to do. 
