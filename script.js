function openSurprise() {

    // প্রথম screen লুকিয়ে ফেলবে
    document.getElementById("startScreen").style.display = "none";

    // Birthday screen দেখাবে
    document.getElementById("birthdayScreen").style.display = "block";

    // Confetti চালু করবে
    createConfetti();
}


function showWish() {

    // Final message দেখাবে
    document.getElementById("finalMessage").style.display = "block";

    // Final message-এর কাছে নিয়ে যাবে
    document.getElementById("finalMessage")
        .scrollIntoView({
            behavior: "smooth"
        });

    // আবার confetti
    createConfetti();
}


function createConfetti() {

    for (let i = 0; i < 100; i++) {

        let confetti =
            document.createElement("div");

        confetti.innerHTML = "✨";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
            Math.random() * 20 + 10 + "px";

        confetti.style.zIndex = "999";

        document.body.appendChild(confetti);


        let duration =
            Math.random() * 3 + 2;


        confetti.animate(

            [
                {
                    transform:
                    "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                    "translateY(110vh) rotate(720deg)"
                }
            ],

            {
                duration: duration * 1000,
                easing: "linear"
            }

        );


        setTimeout(function() {

            confetti.remove();

        }, duration * 1000);

    }
}