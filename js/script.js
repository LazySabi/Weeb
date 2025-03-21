// Форма та валідація
$(document).ready(function () {
  const $contactForm = $("#contactForm");
  
  if ($contactForm.length) {
    const $nameInput = $("#name");
    const $emailInput = $("#email");
    const $phoneInput = $("#phone");
    const $messageInput = $("#message");

    const $nameError = $("#nameError");
    const $emailError = $("#emailError");
    const $phoneError = $("#phoneError");
    const $messageLengthDisplay = $("#messageLength");

    const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s+\-()]+$/;

    function validateForm(event) {
      let valid = true;

      if (!nameRegex.test($nameInput.val().trim())) {
        $nameError.text("Ім’я може містити тільки українські або англійські літери та пробіли.");
        valid = false;
      } else {
        $nameError.text("");
      }

      if (!emailRegex.test($emailInput.val().trim())) {
        $emailError.text("Введіть дійсну електронну пошту (symbols@symbols.symbols).");
        valid = false;
      } else {
        $emailError.text("");
      }

      if (!phoneRegex.test($phoneInput.val().trim())) {
        $phoneError.text('Телефон може містити тільки цифри, пробіли та символи "+", "-", "(", ")".');
        valid = false;
      } else {
        $phoneError.text("");
      }

      if (!valid) {
        event.preventDefault();
      }
    }

    function updateMessageLength() {
      const length = $messageInput.val().length;
      $messageLengthDisplay.text(`Довжина повідомлення: ${length} символів`);
    }

    $contactForm.on("submit", validateForm);
    $messageInput.on("input", updateMessageLength);

    updateMessageLength();
  }

  // Бургер-меню
  const $burger = $(".burger");
  const $overlay = $(".overlay");

  if ($burger.length && $overlay.length) {
    $burger.on("click", function () {
      $burger.toggleClass("active");
      $overlay.toggleClass("active");
    });
  }

  // Цитати
  function quoteOfTheDay() {
    const quotes = [
      "Alright, 2, 4, 6, 8, who do we appreciate? Not the government! Go! - Techno as he was about to get his Hound Army with Dream and Philza",
      "Alright, listen here! You guys, listen to me! I did not spend weeks planning this revolution, giving you guys gear, for you guys to go in and replace one tyrant with another. Don't you see what's happening here? Don't you see history repeating itself? You think Schlatt was the cause of your problems? No! It was government! Gov- Power corrupts! - Technoblade after Tubbo reinstated L'Manberg",
      "Alright, you know what? You know what? Give me back my stuff, you don't deserve it. - Technoblade after the Pogtopians all start saying 'Humina Humina Humina'",
      "Anyways, so I'm- I'm gonna be really- uh- you know, I'm thinking, at first I thought you were kinda useless, Tommy. I was just kinda- just kinda bringing you along to achieve my own ends, but uh... Now that we've committed all these terrorism together, I'm starting to think, you might not be completely useless. I mean, not- maybe not like above average but at least average, you know, on the usefulness scale, what I'm saying is, Tommy. I think it's about time I told you, that my real plan Tommy, I am going to destroy L'Manberg, alright? I am going to leave it a chunk error, that country is gone. I am not going to rest, until that entire country, has been completely obliterated for what it did to me and Phil, Tommy, all right? And I think you should join me, Tommy. - Telling his true plans to Tommy",
      "Blood for the Blood God!",
      "Bruuuhhhhhhhh.",
      "But if you want to be a hero, Tommy, that's fine... that's fine. [...] You want to be a hero, Tommy? You want to be a hero, Tommy? Then die like one! - Techno as he summons his withers",
      "Do you think that you can win without my help Tommy? I am the only one with items here. You cannot possibly be able take back Manberg without my help. You think you can just walk in there and take it back? No. No. You are going to get obliterated once you enter that country. - Technoblade explaining to Tommy that he was the only powerful member in Pogtopia",
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const $footerQuote = $("#footerQuote");

    if ($footerQuote.length) {
      $footerQuote.text(quotes[randomIndex]);
    }
  }

  quoteOfTheDay();
});

