function revealNote(element, message) {
  const isRevealed = element.classList.contains('revealed');

  if (isRevealed) {
    element.textContent = 'Click to reveal';
    element.classList.remove('revealed');
  } else {
    element.textContent = message;
    element.classList.add('revealed');
  }
}
