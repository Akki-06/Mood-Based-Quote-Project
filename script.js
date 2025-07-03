const moodSelector = document.getElementById("moodselector");
const quoteGenerator = document.getElementById("quoteGenerator");
const mood = document.getElementById("mood");
const quote = document.getElementById("quote");
const quotesContainer = document.getElementsByClassName("quotesContainer")[0];

const quotes = {
  happy: [
    "Happiness is not by chance, but by choice. — Jim Rohn",
    "The purpose of our lives is to be happy. — Dalai Lama",
    "For every minute you are angry you lose sixty seconds of happiness. — Ralph Waldo Emerson",
    "Happiness is a direction, not a place. — Sydney J. Harris",
    "Choose joy and you’ll find it was always there."
  ],

  sad: [
    "Tears are words the heart can’t express.",
    "Stars can’t shine without darkness. — D.H. Sidebottom",
    "Sadness flies away on the wings of time. — Jean de La Fontaine",
    "The wound is the place where the Light enters you. — Rumi",
    "Sometimes it’s okay if the only thing you did today was breathe."
  ],

  angry: [
    "Speak when you are angry and you will make the best speech you will ever regret. — Ambrose Bierce",
    "For every minute you remain angry, you give up sixty seconds of peace of mind. — Ralph Waldo Emerson",
    "Anger is one letter short of danger. — Eleanor Roosevelt",
    "The greatest remedy for anger is delay. — Seneca",
    "Holding onto anger is like drinking poison and expecting the other person to die. — Buddha (attributed)"
  ],

  stressed: [
    "Tension is who you think you should be. Relaxation is who you are. — Chinese Proverb",
    "Slow down and everything you are chasing will come around and catch you. — John De Paola",
    "Almost everything will work again if you unplug it for a few minutes, including you. — Anne Lamott",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "Give yourself permission to pause."
  ],

  calm: [
    "Peace begins with a smile. — Mother Teresa",
    "Quiet the mind and the soul will speak. — Buddha (attributed)",
    "Within you there is a stillness and a sanctuary you can retreat to at any time. — Hermann Hesse",
    "Nothing can bring you peace but yourself. — Ralph Waldo Emerson",
    "Be like water; flow, don’t force."
  ],

  love: [
    "Love recognizes no barriers. — Maya Angelou",
    "In all the world, there is no heart for me like yours. — Maya Angelou",
    "Love is composed of a single soul inhabiting two bodies. — Aristotle",
    "You are my sun, my moon, and all my stars. — E.E. Cummings",
    "To love and be loved is to feel the sun from both sides. — David Viscott"
  ],

  confused: [
    "If you don't know where you are going, any road will get you there. — Lewis Carroll",
    "Confusion is a word we have invented for an order which is not understood. — Henry Miller",
    "The more I see, the less I know for sure. — John Lennon",
    "Not until we are lost do we begin to understand ourselves. — Henry David Thoreau",
    "Embrace the glorious mess that you are. — Elizabeth Gilbert"
  ],

  motivated: [
    "The future depends on what you do today. — Mahatma Gandhi",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
  ],

  excited: [
    "The energy of the mind is the essence of life. — Aristotle",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "The best way to predict the future is to create it. — Peter Drucker",
    "Adventure is worthwhile in itself. — Amelia Earhart",
    "Life is either a daring adventure or nothing at all. — Helen Keller"
  ]
};

const moodEmojis = {
  happy: "😊",
  sad: "😔",
  angry: "😠",
  stressed: "😣",
  calm: "😌",
  love: "😍",
  confused: "😕",
  motivated: "💪",
  excited: "🤩"
};


quoteGenerator.addEventListener("click", () => {
    const currentMood = moodSelector.value;
    if(!currentMood){
        alert("Kindly Select a Mood !!")
        return;
    }

    const currentMoodQuote = quotes[currentMood];
    const randomQuote = currentMoodQuote[Math.floor(Math.random() * currentMoodQuote.length)];

    mood.textContent = "Your Mood : " + moodEmojis[currentMood];
    quote.textContent = randomQuote;
    quotesContainer.classList.remove("quotesContainerHidden");

})