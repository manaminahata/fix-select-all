window.addEventListener("click", () => {
  const button = document.getElementById("select-all");
  const checkBoxes = document.querySelectorAll("[type=checkbox][name=check]");
  console.log("ボタン選択");
  button.value = ["全選択", "全解除"][+(button.checked ^= true)];
  checkBoxes.forEach((e) => (e.checked = button.checked));
});
