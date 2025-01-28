$(document).ready(function () {

    $("#modalSubmitBtn").on("click", function (event) {
        event.preventDefault();
        let companyName = $("#modalCompany").val();
        let email = $("#modalEmail").val();
        let phone = $("#modalPhone").val();
        let name = $("#modalName").val();
        let notes = $("#modalNote").val();

        if (email !== "" && phone !== "" && name !== "" && companyName !== "") {
            $("#modalSubmitBtn").text('Sending...');
            $("#modalSubmitBtn").prop('disabled', true);

            const apiUrl = `https://vitwo.ai/api/api-vitwo-ai-contact-us.php?notes=${encodeURIComponent(notes)}&emailAddress=${encodeURIComponent(email)}&companyName=${encodeURIComponent(companyName)}&phoneNumber=${encodeURIComponent(phone)}&name=${encodeURIComponent(name)}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then((data) => {
                    $("#modalSubmitBtn").text('Send Message');
                    $("#modalSubmitBtn").prop('disabled');

                    if (data.status === "success") {
                        // Reset the form
                        $("#modalBookDemo")[0].reset();

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
                            $('#contactUs').modal('hide');
                        });
                    } else {
                        $(".toast-body").text(data.message || "There was an issue sending your message.");
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

        const modalForm = document.getElementById('modalContactForm');
        modalForm.style.display = 'none';
    });
});