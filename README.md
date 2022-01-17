# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot



### Links

- Solution URL: https://github.com/JeanMieses/Space-tourtism-reactRouter
- Live Site URL: https://silly-banach-f25757.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS modules
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router] (https://reactrouter.com/) - standard library for routing in React


### What I learned

  I learned how to React gives the illusion of having a
  multipage website in a single page app with React router. With React router
  we can have a SPA and switch the content of that single page app base of URL.

```js
<Routes>
       <Route path='/' element={<HomePage />} />
       <Route path='/destination' element={<DestinationPage destinations={data.destinations}/>} />
       <Route path='/crew' element={<CrewPage crew={data.crew} />} />
       <Route path='/technology' element={<TechnologyPage technology={data.technology} />} />
       <Route path='/*' element={<Navigate replace to='/home' />} />
     </Routes>
```

## Author

- Frontend Mentor - [@JeanMieses](https://www.frontendmentor.io/profile/JeanMieses)
- Twitter - [@JeanTheDev](https://twitter.com/JeanTheDev)
