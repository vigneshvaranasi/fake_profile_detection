// Function to start the animation
function startAnimation() {
  var progressBar = document.querySelector(".progress-value");
  var usernameInput = document.getElementById("form-subscribe-Subscribe").value;
  var instagramIframe = document.getElementById("instagramIframe");

  // Check if usernameInput is not empty
  if (usernameInput.trim() !== "") {
    // Define iframeUrl within the scope of the function
    var iframeUrl = `https://www.instagram.com/${usernameInput}/`;
    instagramIframe.setAttribute("data-iframely-url", `//iframely.net/${iframeUrl}`);

    // Remove the "animate" class if it exists
    progressBar.classList.remove("animate");

    // Trigger a reflow by accessing the offsetWidth property
    void progressBar.offsetWidth;

    // Add the "animate" class to start the animation
    progressBar.classList.add("animate");
  }
}

// Event listener for the button click
document.getElementById("searchButton").addEventListener("click", startAnimation);

// Event listener for the animation end
document.querySelector(".progress-value").addEventListener("animationend", function () {
  // Remove the "animate" class after the animation completes
  this.classList.remove("animate");

  // Display the profile after the animation ends
  displayProfile();
});

// Function to display profile after the loading animation completes
function displayProfile() {
  const profileContainer = document.querySelector(".profile-container");

  // Check if profileContainer is not null before removing the class
  if (profileContainer !== null) {
    profileContainer.classList.remove("hidden");
  }
}

var dial = $(".dial .inner");
var gauge_value = $(".gauge .value");

function rotateDial() {
  var deg = 0;
  var value = Math.round(Math.random() * 100);
  deg = (value * 177.5) / 100;

  gauge_value.html(value + "%");

  dial.css({ 'transform': 'rotate(' + deg + 'deg)' });
  dial.css({ '-ms-transform': 'rotate(' + deg + 'deg)' });
  dial.css({ '-moz-transform': 'rotate(' + deg + 'deg)' });
  dial.css({ '-o-transform': 'rotate(' + deg + 'deg)' });
  dial.css({ '-webkit-transform': 'rotate(' + deg + 'deg)' });
}

setInterval(rotateDial, 2000);
