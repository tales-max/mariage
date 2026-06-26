document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    
    openBtn.addEventListener('click', () => {
        gsap.to("#gate", {
            duration: 1.8,
            y: "-100%",
            ease: "expo.inOut",
            onComplete: () => {
                document.getElementById('gate').style.display = 'none';
            }
        });

        gsap.to("#main", { 
            duration: 1, 
            opacity: 1, 
            delay: 0.5 
        });

        gsap.to(".reveal", {
            duration: 1.5,
            opacity: 1,
            y: 0,
            stagger: 0.2,
            delay: 0.8,
            ease: "power4.out"
        });
    });

    // DATE MISE À JOUR : 15 AOÛT 2026
    const weddingDate = new Date("Aug 15, 2026 19:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        if (diff > 0) {
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            document.getElementById("days").innerText = d.toString().padStart(2, '0');
            document.getElementById("hours").innerText = h.toString().padStart(2, '0');
            document.getElementById("mins").innerText = m.toString().padStart(2, '0');
        } else {
            document.querySelector(".countdown-container").innerHTML = "C'est le grand jour !";
        }
    };

    setInterval(updateCountdown, 1000); // Mise à jour chaque seconde pour plus de précision
    updateCountdown();
});