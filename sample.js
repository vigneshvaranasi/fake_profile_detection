    // Function to start the animation
    function startAnimation() {
        var progressBar = document.querySelector(".progress-value");

        // Remove the "animate" class if it exists
        progressBar.classList.remove("animate");

        // Trigger a reflow by accessing the offsetWidth property
        void progressBar.offsetWidth;

        // Add the "animate" class to start the animation
        progressBar.classList.add("animate");
    }

    // Event listener for the input field change
    document.getElementById("form-subscribe-Subscribe").addEventListener("input", function () {
        var searchButton = document.getElementById("searchButton");
        if (this.value.trim() !== "") {
            searchButton.removeAttribute("disabled");
        } else {
            searchButton.setAttribute("disabled", "disabled");
        }
    });

    // Event listener for the button click
    document.getElementById("searchButton").addEventListener("click", startAnimation);

    // Event listener for the Enter key press
    document.getElementById("form-subscribe-Subscribe").addEventListener("keyup", function (event) {
        if (event.key === "Enter" && this.value.trim() !== "") {
            event.preventDefault();
            startAnimation();
        }
    });

    // Event listener for the animation end
    document.querySelector(".progress-value").addEventListener("animationend", function () {
        // Remove the "animate" class after the animation completes
        this.classList.remove("animate");
    });



