document.getElementById('show-heart').addEventListener('click', function() {
    const heart = document.querySelector('.heart');
    heart.classList.remove('hidden');
    this.textContent = "💖 Cảm ơn bạn đã nhấn! 💖";
});
