document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById('counterDisplay')
    const incrementButton = document.getElementById('incrementButton')
    const decrementButton = document.getElementById('decrementButton')

    let count = 0
    incrementButton.addEventListener("click", () => {
        count++
        updateCounterDisplay()

    })

    decrementButton.addEventListener("click", () => {
        count--
        updateCounterDisplay()
    })
    function updateCounterDisplay() {
        counterDisplay.innerHTML=count
    }
})