const pieces = document.querySelectorAll('.piece');
const dropArea = document.querySelector('.drop-area');
const message = document.getElementById('message');

// Kéo và thả
pieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

dropArea.addEventListener('dragover', dragOver);
dropArea.addEventListener('drop', dropPiece);

let correctPieces = 0;

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function dropPiece(event) {
    event.preventDefault();
    const pieceId = event.dataTransfer.getData('text');
    const piece = document.getElementById(pieceId);

    // Kiểm tra nếu chưa thả
    if (!piece.classList.contains('placed')) {
        dropArea.appendChild(piece);
        piece.classList.add('placed');
        correctPieces++;

        // Hiển thị thông báo khi hoàn thành
        if (correctPieces === 4) {
            setTimeout(() => {
                dropArea.style.display = 'none';
                message.classList.remove('hidden');
            }, 500);
        }
    }
}
