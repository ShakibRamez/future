// ریزش اسم Marwa
const nameContainer = document.getElementById('name-container');
const name = "I Love You Marwa"; // اسم مورد نظر
const numberOfNames = 50; // تعداد تکرار اسم

function createFallingNames() {
    for (let i = 0; i < numberOfNames; i++) {
        const nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.textContent = name;
        nameElement.style.left = `${Math.random() * 100}vw`; // موقعیت افقی تصادفی
        nameElement.style.animationDuration = `${Math.random() * 3 + 2}s`; // سرعت ریزش تصادفی
        nameElement.style.fontSize = `${Math.random() * 2 + 1}em`; // اندازه فونت تصادفی
        nameElement.style.opacity = Math.random(); // شفافیت تصادفی
        nameContainer.appendChild(nameElement);
    }
}

createFallingNames();

// موزیک پس‌زمینه
const backgroundMusic = document.getElementById('background-music');

// متن تایپ شونده
const typedText = document.getElementById('typed-text');
const message = "عزیزم، تو بهترین چیز زندگی منی! دوستت دارم تا ابد... ❤️";

// نمایش خاطرات با انیمیشن
const memories = document.querySelectorAll('.memory');
memories.forEach((memory, index) => {
    setTimeout(() => {
        memory.classList.add('show');
    }, (index + 1) * 500);
});

// تایپ متن عاشقانه
function typeWriter(text, element, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// شروع تایپ متن بعد از لود صفحه
window.onload = () => {
    typeWriter(message, typedText);
    backgroundMusic.play();
};

// دکمه فشار دادن
const pushButton = document.getElementById('push-button');
const loveMessage = document.getElementById('love-message');

pushButton.addEventListener('click', () => {
    pushButton.classList.add('animate__animated', 'animate__bounceOut'); // انیمیشن خروج دکمه
    setTimeout(() => {
        pushButton.style.display = 'none'; // مخفی کردن دکمه
        loveMessage.classList.add('show'); // نمایش پیام "دوستت دارم"
    }, 500); // زمان انیمیشن
});