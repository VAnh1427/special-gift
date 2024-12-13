/* Thiết lập chung */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(to bottom, #ffe1e1, #ffc4c4);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    text-align: center;
}

.container {
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    width: 400px;
}

h1 {
    color: #ff4d6d;
    font-size: 2em;
}

.puzzle-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    justify-content: center;
}

.piece {
    width: 60px;
    height: 60px;
    background-color: #ff4d6d;
    border-radius: 10px;
    cursor: grab;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.drop-area {
    margin-top: 20px;
    padding: 20px;
    border: 2px dashed #ff4d6d;
    border-radius: 15px;
    background: #fff5f5;
}

.drop-area p {
    color: #333;
}

.hidden {
    display: none;
}

#message {
    margin-top: 20px;
    background: #ff4d6d;
    color: white;
    padding: 20px;
    border-radius: 15px;
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

