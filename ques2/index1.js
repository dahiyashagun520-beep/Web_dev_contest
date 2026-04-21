let count = 1;

    const countDisplay = document.getElementById("count");
    const incBtn = document.getElementById("increase");
    const decBtn = document.getElementById("decrease");

    function updateUI() {
      countDisplay.textContent = count;
      incBtn.disabled = count === 10;
      decBtn.disabled = count === 0;
    }

    incBtn.addEventListener("click", () => {
      if (count < 10) {
        count++;
        updateUI();
      }
    });

    decBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        updateUI();
      }
    });

    // Initial setup
    updateUI();