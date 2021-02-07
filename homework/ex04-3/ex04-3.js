const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoring(score) {
    if (score > 90) {
        const result = "秀"
        return result
    }

    else if (score > 60) {
        const result = "良"
        return result
    }

    else {
        const result = "不可"
        return result
    }

}

for (i = 0; i < 10; i++) {
    score = scores[i]
    console.log(scoring(score))
}

