document.getElementById('show-heart').addEventListener('click', function() {
    const heart = document.querySelector('.heart');
    heart.classList.remove('hidden');
    this.textContent = "💖 tớ yêu cậu rất nhiều, vì thế tớ không muốn cậu buồn, tớ cũng không muốn cậu bị chuyện gì cả, Tớ thích cậu, không phải vì cậu hoàn hảo, mà vì cậu là cậu. 💖";
});
