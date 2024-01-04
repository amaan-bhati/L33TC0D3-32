var hIndex = function (citations) {
    let n = citations.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let h = n - mid;

…};
