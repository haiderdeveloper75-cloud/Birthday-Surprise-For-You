/* ==================================================
   PASSWORD
================================================== */

/*
   🔐 APNA PASSWORD YAHAN SET KARNA

   Example:
   const correctPassword = "31225";

   Birthday ke liye apni marzi ka password rakh dena.
*/

const correctPassword = "31225";


/* ==================================================
   SHOW PASSWORD SECTION
================================================== */

function showPassword() {

    const section =
        document.getElementById("passwordSection");

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* ==================================================
   CHECK PASSWORD
================================================== */

function checkPassword() {

    const input =
        document.getElementById("passwordInput");

    const error =
        document.getElementById("passwordError");

    const secret =
        document.getElementById("secretContent");


    if (
        input.value === correctPassword
    ) {

        error.textContent = "";

        secret.classList.add("unlocked");

        document.body.classList.remove("locked");

        setTimeout(() => {

            secret.scrollIntoView({
                behavior: "smooth"
            });

        }, 300);

        createConfetti();

    }

    else {

        error.textContent =
            "Hmm... Meri Jaan, ye password nahi hai... Engagement Date laga ke dekho na❤️";

        input.classList.add("shake");

        setTimeout(() => {

            input.classList.remove("shake");

        }, 500);

    }

}


/* ==================================================
   ENTER KEY FOR PASSWORD
================================================== */

document
    .getElementById("passwordInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                checkPassword();

            }

        }
    );


/* ==================================================
   SHOW / HIDE PASSWORD
================================================== */

function togglePassword() {

    const input =
        document.getElementById("passwordInput");


    if (
        input.type === "password"
    ) {

        input.type = "text";

    }

    else {

        input.type = "password";

    }

}


/* ==================================================
   GALLERY DATA
================================================== */
const galleryImages = [

    {
        src: "images/WhatsApp Image 2026-08-23 at 2.48.15 AM.jpeg",
        caption: "Our little moment ♡"
    },

    {
        src: "images/WhatsApp Image 2026-08-23 at 2.52.50 AM.jpeg",
        caption: "A beautiful memory ♡"
    },

    {
        src: "images/WhatsApp Image 2026-08-23 at 2.52.51 AM.jpeg",
        caption: "Forever special ♡"
    },

    {
        src: "images/WhatsApp Image 2026-08-23 at 2.52.52 AM (1).jpeg",
        caption: "A moment to remember ♡"
    },

    {
        src: "images/WhatsApp Image 2026-08-23 at 2.52.52 AM.jpeg",
        caption: "Just you & me ♡"
    },

    {
        src: "images/WhatsApp Image 2026-08-23 at 3.07.24 AM.jpeg",
        caption: "A memory I'll keep forever ♡"
    }

];

let currentImage = 0;


/* ==================================================
   OPEN LIGHTBOX
================================================== */

function openLightbox(index) {

    currentImage = index;

    updateLightbox();

    document
        .getElementById("lightbox")
        .classList.add("active");

    document.body.style.overflow = "hidden";

}


/* ==================================================
   UPDATE LIGHTBOX
================================================== */

function updateLightbox() {

    const image =
        document.getElementById("lightboxImage");

    const caption =
        document.getElementById("imageCaption");

    const counter =
        document.getElementById("imageCounter");


    image.src =
        galleryImages[currentImage].src;

    caption.textContent =
        galleryImages[currentImage].caption;

    counter.textContent =
        `${currentImage + 1} / ${galleryImages.length}`;

}


/* ==================================================
   CLOSE LIGHTBOX
================================================== */

function closeLightbox() {

    document
        .getElementById("lightbox")
        .classList.remove("active");

    document.body.style.overflow = "";

}


/* ==================================================
   NEXT
================================================== */

function nextImage() {

    currentImage++;

    if (
        currentImage >=
        galleryImages.length
    ) {

        currentImage = 0;

    }

    updateLightbox();

}


/* ==================================================
   PREVIOUS
================================================== */

function previousImage() {

    currentImage--;

    if (
        currentImage < 0
    ) {

        currentImage =
            galleryImages.length - 1;

    }

    updateLightbox();

}


/* ==================================================
   KEYBOARD
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const box =
            document.getElementById("lightbox");


        if (
            !box.classList.contains("active")
        ) {
            return;
        }


        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextImage();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousImage();

        }

    }
);


/* ==================================================
   MOBILE SWIPE
================================================== */

let touchStartX = 0;
let touchEndX = 0;


const lightbox =
    document.getElementById("lightbox");


lightbox.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.changedTouches[0].screenX;

    }
);


lightbox.addEventListener(
    "touchend",
    function(event) {

        touchEndX =
            event.changedTouches[0].screenX;

        const difference =
            touchEndX - touchStartX;


        if (
            Math.abs(difference) < 50
        ) {
            return;
        }


        if (
            difference < 0
        ) {

            nextImage();

        }

        else {

            previousImage();

        }

    }
);


/* ==================================================
   LETTER
================================================== */

function openLetter(element) {

    element.classList.toggle("open");

}


/* ==================================================
   WISH
================================================== */

function makeWish() {

    const message =
        document.getElementById("wishMessage");


    message.textContent =
        "May every beautiful wish in your heart come true. ♡";


    createConfetti();

}


/* ==================================================
   CONFETTI
================================================== */

function createConfetti() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const piece =
            document.createElement("span");


        piece.style.position =
            "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            "-20px";

        piece.style.width =
            "8px";

        piece.style.height =
            "8px";

        piece.style.borderRadius =
            "50%";

        piece.style.background =
            [
                "#e85d9e",
                "#a87bd7",
                "#ffd166",
                "#ffffff",
                "#ff9fc5"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];

        piece.style.zIndex =
            "10000";

        piece.style.pointerEvents =
            "none";


        document.body.appendChild(piece);


        const duration =
            1800 +
            Math.random() * 2500;


        piece.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }

            ],

            {
                duration: duration,

                easing:
                    "cubic-bezier(.2,.7,.3,1)"
            }

        );


        setTimeout(
            () => piece.remove(),
            duration
        );

    }

}


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    element =>
        observer.observe(element)
);