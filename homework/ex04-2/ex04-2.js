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

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(61)) //=> 良
console.log(scoring(13)) //=> 不可

const score = Math.floor(Math.random() * 100)
console.log(`あなたの点数は${score}点です。`)
console.log(`あなたの評価は${scoring(score)}です。`)

