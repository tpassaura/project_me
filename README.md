# A Personal website portfolio using HTML, CSS and JavaScript
  
 ## Technologies used
  - HTML
  - CSS
  - JavaScript
  
  ## Explaning the code:
  
  - cusor.js:
  
  This code defines variables for the size and border of a cursor and sets the unit to pixels. It also sets up a CSS custom property for the cursor size.
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

The toggleMode() function toggles the isDarkMode boolean and uses object destructuring to get the appropriate styles based on the current mode. It then sets the CSS custom properties for the website root element to update the styles and changes the text content of the toggle button accordingly.

Finally, the toggleMode() function is added as an event listener for the button's click event.

    
