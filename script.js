
// Array of quotes
let quotes = [
    "Those who don't believe in themselves cannot make anyone else believe in them.",
    "It is through hardship that we learn to appreciate the value of life.",
    "If you don't fight, you can't win.",
    "It's not about being born with a gift. It's about how you use it.",
    "Never give up, no matter how hard it gets.",
    "The only way to truly understand someone is to see things from their perspective.",
    "The world is cruel. It's a battlefield, and those who don't fight will be trampled.",
    "Don't be afraid to dream, because dreams do come true.",
    "The past can't be changed, but the future is still in your hands.",
    "The only thing that's truly yours is your life.",
    "If you don't like your fate, don't accept it. Fight it.",
    "The only way to win is to never give up.",
    "Those who stand in the way of my friends will die.",
    "It's not about how you start, it's about how you finish.",
    "Power comes from within.",
    "If you don't like your life, change it.",
    "The strongest person is the one who can overcome their weaknesses.",
    "Don't let anyone tell you that you can't do something.",
    "The past is a ghost. It can't hurt you anymore.",
    "Friends are the family you choose.",
    "Never underestimate the power of dreams.",
    "The world is full of wonder.",
    "Let's go on an adventure.",
    "The only way to truly live is to let go of the past.",
    "Even if you forget, I won't.",
    "It's never too late to make a difference.",
    "Words have the power to change the world.",
    "Life is a game. Make it count.",
    "Even in the darkest times, there is always hope.",
    "The past can be changed."
  ];
  
  // Function to display a random quote
  function displayRandomQuote() {
    // Select a random index based on the quotes array length
    let index = Math.floor(Math.random() * quotes.length);
  
    // Log the index for debugging
    console.log(index);
  
    // Display the quote in the 'myquotes' div
    document.getElementById('myquotes').innerHTML = quotes[index];
  }
  
  // Execute the function once the window has fully loaded
  window.onload = displayRandomQuote;