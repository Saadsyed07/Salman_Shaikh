// Confetti effect on button click
const confettiButton = document.querySelector('.confetti-button');

confettiButton.addEventListener('click', () => {
  // Trigger confetti effect
  confetti({
    particleCount: 150, // Number of confetti particles
    spread: 70, // Spread of the confetti
    origin: { y: 0.6 }, // Origin of the confetti (bottom of the screen)
  });
});

