document.getElementById('reveal-button').addEventListener('click', function() {
    const heartContainer = document.querySelector('.heart-container');
    const message = document.getElementById('message');
    const text = document.getElementById('text');
    const button = document.getElementById('reveal-button');

    // Hiện trái tim và lời tỏ tình
    heartContainer.classList.remove('hidden');
    message.innerHTML = "Cảm xúc của tớ dành cho cậu... 💕";
    text.style.display = 'none';

    // Ẩn nút sau khi bấm
    button.style.display = 'none';
});
