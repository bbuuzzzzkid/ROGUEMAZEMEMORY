function pathExists(grid, startX, startY, endX, endY) {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    const queue = [];
    queue.push([startX, startY]);
    visited[startY][startX] = true;

    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        if (x === endX && y === endY) {
            return true;
        }

        for (let [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 && ny >= 0 &&
                nx < cols && ny < rows &&
                !visited[ny][nx] &&
                grid[ny][nx] === 0
            ) {
                visited[ny][nx] = true;
                queue.push([nx, ny]);
            }
        }
    }

    return false;
}