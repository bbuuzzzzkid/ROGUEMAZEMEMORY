function saveHighScore(mode, level) {
    let key = "highscore_" + mode;

    let best = Number(localStorage.getItem(key) || 0);

    if (level > best) {
        localStorage.setItem(key, level);
    }
}

function getHighScore(mode) {
    let key = "highscore_" + mode;
    return Number(localStorage.getItem(key) || 0);
}