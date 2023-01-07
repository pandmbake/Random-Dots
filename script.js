function displayCircle(event) {
    // Get the current mouse position
    let x = event.clientX;
    let y = event.clientY;
  
    // Create a new div element
    let circle = document.createElement('div');
  
    // Generate a random color and size for the circle
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    let size = Math.floor(Math.random() * 100) + 50; // random size between 50 and 150
  
    // Set the div's style so it will be displayed as a circle
    // and positioned at the mouse location
    circle.style.background = color;
    circle.style.borderRadius = '50%';
    circle.style.height = size + 'px';
    circle.style.width = size + 'px';
    circle.style.position = 'absolute';
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
  
    // Add the circle to the page
    document.body.appendChild(circle);
  }
  
  // Add an event listener to the document that will call the
  // displayCircle function when the mouse is clicked
  document.addEventListener('click', displayCircle);