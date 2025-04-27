// 클릭형 게임 기능
let score = 0;
const clickButton = document.getElementById("click-button");
const scoreDisplay = document.getElementById("score");

clickButton.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
});

// 애니메이션 및 인터랙션 효과
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
