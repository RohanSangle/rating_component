## Interactive rating component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Difficulty level : **Newbie** <br>
Time taken by me: **7 hours** 


## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


## My process

Because the aim was to create a card details form component with no limits on the technology stack, I chose React.js. I wanted to learn how to use React.js and properly deploy apps.
I first made a folder which would contain all the components of this app. The components I used were Card.jsx, Rating.jsx & ThankYou.jsx. and their respective style sheets. 
Card.jsx was used to identify that there is a card on the screen and all the contents will be displayed there.
Rating.jsx is used to display the rating stars. And also the use of {useState} method to display the ThankYou page with respect to the rating selected.
ThankYou.jsx had the 2nd card mockup displaying the 'thank you' message after the rating has been submitted.

I made this such that if the user selects the rating of 2 and clicks submit then for displaying the thankyou card the website should not get refreshed, but only the card component should get rendered. This helps to reduce the time taken to load the website which the website feel smooth and interactive too.

## Screenshots

[![photo-2024-05-05-23-31-12.jpg](https://i.postimg.cc/NGnZkhLF/photo-2024-05-05-23-31-12.jpg)](https://postimg.cc/kDxj7pQP)


## Tech stack

- React.js
- Vanilla CSS


## What I learned

This was my very first web project so it took a lot of time for me to build it.
My main challenge came up while using {useState} in reactjs.
I had to add a ternary operator to the return statement to return the rating card depending on the rating.


## Acknowledgments

I would firstly like to acknowledge Frontend Mentor for providing such good level challeneges. This really helps me to understand in which part do I lack and how should I tackle it.
