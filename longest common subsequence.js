var longestCommonSubsequence = function (text1, text2) {
    const n = text1.length;
    const m = text2.length;

    const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const c1 = text1[i];
            const c2 = text2[j];

            if (c1 === c2) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
};
