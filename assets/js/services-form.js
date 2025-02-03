$(document).ready(function () {
    $("#serviceSubmitBtn").on("click", function (event) {
        event.preventDefault();
        let companyName = $("#serviceCompany").val();
        let email = $("#serviceEmail").val();
        let phone = $("#servicePhone").val();
        let name = $("#serviceName").val();
        let notes = $("#serviceNote").val();

        if (email !== "" && phone !== "" && name !== "" && companyName !== "") {
            $("#serviceSubmitBtn").text('Submitting...');
            $("#serviceSubmitBtn").prop('disabled', true);

            const apiUrl = `https://vitwo.ai/api/api-vitwo-ai-contact-us.php?notes=${encodeURIComponent(notes)}&emailAddress=${encodeURIComponent(email)}&companyName=${encodeURIComponent(companyName)}&phoneNumber=${encodeURIComponent(phone)}&name=${encodeURIComponent(name)}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then((data) => {
                    $("#serviceSubmitBtn").text('Submitted');
                    $("#serviceSubmitBtn").prop('disabled');

                    if (data.status === "success") {
                        // Reset the form
                        $("#serviceBookDemo")[0].reset();

                        // Set the success message
                        $(".toast-body").text(data.message || "Your message has been sent successfully!");
                        window.location.href = "./thankyou.php";
                        // Get the toast element
                        const toastEl = document.querySelector('.toast');

                        // Trigger the display of the toast message
                        const toast = new bootstrap.Toast(toastEl);
                        toast.show();
                        toastEl.addEventListener('shown.bs.toast', function () {
                            // Add zoom-out animation class
                            $("#contactUs").removeClass('show');
                            $("#contactUs").addClass('fade');
                        });
                    } else {
                        $(".toast-body").text(data.message || "There was an issue sending your message.");
                        console.log("Redirecting to thankyou.php");
                        const toastEl = document.querySelector('.toast');
                        const toast = new bootstrap.Toast(toastEl);
                        toast.show();
                    }
                })
                .catch(error => {
                    console.error(error);
                    $(".toast-body").text("An error occurred. Please try again.");
                    const toastEl = document.querySelector('.toast');
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                });
        } else {
            $(".toast-body").text("All fields are required");
            const toastEl = document.querySelector('.toast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }
    });
});