# PROJECT ME
  
Hello, my name is Tiago, I’m from Brazil and I live in the State of Paraná, i'm a airplane pilot inciating my studies in computer cience and software development. 
  
  #### Description:
  
   In this project i decided to creat a perosnal webpage portifolio, that shows informations about myself and the projects that i have develop during CS50 classes. 
  
  I have created a bealtiful and clean designed page based on my favorite color using HTML and CSS. I also creat a Dark mode funcition on the webpage using java scrip.
  Also using JavaScript i crated a personalized cursor that changes it's look when it's is clicked. 
  And finaly using javaScript i created a dinamic navegation bar that teels you in what section of the page you are in.

  folowing the proposed design style i decided to make the intere website in only one page. 

  The portifolio describes some of my CS50 projects with a short description and links to the projects CS50 webpages. Also in my contact infomration a have used links to take the user to my LinkedIn, Gitbud and Whatsapp pages, and to send me a e-mail or make me a phone call.

  
 # Technologies used
  - HTML
  - CSS
  - JavaScript
  
  # Explaning the code:
  
  - cusor.js:
  
  This code defines variables for the size and border of a cursor, and sets the unit to pixels. It also sets up a CSS custom property for the cursor size.
  The setCursorSize() function sets the custom property to the value of the cursorSize variable.
  
  The mouseMove() function adds event listeners for the mousemove, mousedown, and mouseup events to the document. When the mouse is moved, the cursor is positioned to   follow the mouse pointer. When the mouse is clicked, the "clicked" class is added to the cursor element, and when the mouse button is released, the "clicked" class    is removed.

  Finally, the setCursorSize() and mouseMove() functions are called to initialize the cursor behavior.
  
  
  - scroll.js:
  
  This code selects all section elements and all anchor tags that are direct children of an element with class nav_left. It then sets an event listener for the onscroll event of the window.

Inside the event listener, it loops through all section elements and calculates their top offset, height, and ID. If the user has scrolled to a section, the corresponding link in the navigation menu is given the class active, while the others have it removed.

  
  - darkmode.js:
  
  This code creates a toggle button for switching between a light mode and a dark mode on a website.

It starts by selecting the toggle button element and initializing a boolean variable isDarkMode to false.

Then, it defines two objects light and dark that hold the CSS styles for the light and dark modes, respectively.

The toggleMode() function toggles the isDarkMode boolean and uses object destructuring to get the appropriate styles based on the current mode. It then sets the CSS custom properties for the website root element to update the styles, and changes the text content of the toggle button accordingly.

Finally, the toggleMode() function is added as an event listener for the button's click event.

    