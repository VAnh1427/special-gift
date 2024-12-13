document.getElementById('show-heart').addEventListener('click', function() {
    const heart = document.querySelector('.heart');
    const message = document.getElementById('message');
    const text = document.getElementById('text');
    
    // Hiện hình trái tim và lời thổ lộ
    heart.classList.remove('hidden');
    text.innerHTML = 'Tớ thích cậu rất nhiều... 🌸';
    
    // Thay đổi màu sắc và hiệu ứng cho lời thổ lộ
    message.innerHTML = 'Tớ có một điều muốn nói... 💖';
    message.style.color = '#ff4a4a';
});
