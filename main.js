function main() {
    // 「バー」（barクラスの要素）
    const bar = document.querySelector(".bar")
    // 「ボール」(ballクラスの要素)
    const ball = document.querySelector(".ball")
    // オン・オフの状態
    let isOn = false
    // バーをクリックした時の動作
    bar.addEventListener("click", () => {
        // オン⇔オフを切替
        isOn = !isOn
        // バーのスタイル
        let barStyle = "bar"
        // ボールのスタイル
        let ballStyle = "ball"
        // "オン"の場合、bar-onとball-onスタイルを追加
        if (isOn) {
            barStyle += " " + "bar-on"
            ballStyle += " " + "ball-on"
        }
        // スタイルを適用
        bar.className = barStyle
        ball.className = ballStyle
    })
}

window.addEventListener("load", main)