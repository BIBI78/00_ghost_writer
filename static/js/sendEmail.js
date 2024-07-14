function sendMail(contactForm) {
    emailjs.send("service_7ctr8xc", "template_em43o3t", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        // if you changes these here you gotta change them in the emailjs template
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                // Display the thank you message overlay
                document.getElementById("thankYouOverlay").style.display = "flex";
                // Hide the thank you message after 3 seconds
                setTimeout(function () {
                    thankYouOverlay.style.display = "none";
                }, 3000);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}