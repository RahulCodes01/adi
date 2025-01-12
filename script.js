document.getElementById("email-button").addEventListener("click", function () {
    const email = "adityasaxenamb7@gmail.com"; // Replace with your email
    const subject = "Inquiry from Portfolio";
    const body = "Hi Aditya, I would like to connect with you regarding...";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});
