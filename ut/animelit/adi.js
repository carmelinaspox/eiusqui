const handleTouchStart = (evt) => {
  // Get the element that was touched
  const target = evt.target;

  // Check if the element is draggable
  if (!target.draggable) {
    return;
  }

  // Get the touch coordinates
  const touch = evt.touches[0];
  const startX = touch.clientX;
  const startY = touch.clientY;

  // Set the element's initial position
  target.style.left = `${target.offsetLeft}px`;
  target.style.top = `${target.offsetTop}px`;

  // Add a listener for the touchmove event
  document.addEventListener('touchmove', handleTouchMove);

  // Add a listener for the touchend event
  document.addEventListener('touchend', handleTouchEnd);
};
