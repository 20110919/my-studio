let count = 0;

document.getElementById("increase-btn").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});
