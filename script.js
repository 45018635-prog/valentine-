const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const sound = document.getElementById("sound");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 100;
    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    sound.play();
    document.body.innerHTML = `
        <h1 style="text-align:center;color:#ff4d6d;">
            😘 J’en étais sûr 😘
        </h1>
    `;
});
