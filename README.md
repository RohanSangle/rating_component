# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This was a newbie challenge given by Frontend Mentor to develop a rating component using HTML,CSS and Js.
The challenge was to build a rating component that lets the user select a rating from 1 to 5.
They had provided the [style-guide](style-guide.md) to select only these particular CSS styling. They had also provided with images of what the final output should be like.
We were allowed to use any method to code and bring out the final output.


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


## My process

As this challenege was to make a rating component, and there were no restrictions on what tech stack to use, so I used Reactjs. I wanted to learn the use of Reactjs and proper deployment of apps. So this was the starting of using Reactjs.
I first made a folder which would contain all the components for this app. The components i used where Card.jsx, Rating.jsx & ThankYou.jsx. and their respective style sheets. 
Card.jsx was used to identify that there is a card in the screen and all the contents will be displayed there itself.
Rating.jsx is used to display the rating stars. And also the use of {useState} method to display the ThankYou page with respect to the rating selected.
ThankYou.jsx had the 2nd card mockup displaying the 'thank you' message after the rating has submitted.

I made this such that if the user selects the rating of 2 and clicks submit then for displaying the thankyou card the website should not get refreshed, but only the card component should get rendered. This helps to reduce the time taken to load the website by which the website feels smooth and interactive too.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [Reactjs](https://reactjs.org/) - JS library


### What I learned

My main challenge came up while using {useState} in reactjs.
I had to add a ternary operator to the return statement to return the rating card depending on the rating.


### Continued development

I would continue focusing on understanding the {useState} method in reactjs as I still dont find myself fully comfortable with using the {useState} method. 


## Author

- Website - [Rohan Sangle](https://www.your-site.com)
- Frontend Mentor - [@RohanSangle](https://www.frontendmentor.io/profile/RohanSangle)


## Acknowledgments

I would firstly like to acknowledge Frontend Mentor for providing such good level challeneges. This really helps me to understand in which part do I lack and how should I tackle it.
