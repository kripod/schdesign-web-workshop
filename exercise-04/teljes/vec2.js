const magnitude = ([x, y]) => Math.sqrt(x * x + y * y);

const add = ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2];

const subtract = ([x1, y1], [x2, y2]) => [x1 - x2, y1 - y2];

const limit = ([x, y], maxMagnitude) => {
    const m = magnitude([x, y]);
    if (m <= maxMagnitude) return [x, y];

    const scalingFactor = maxMagnitude / m;
    return [x * scalingFactor, y * scalingFactor];
};
