const KEY = "view_mode"

function setView(view) {
  const showGrid = view === "grid"

  document.querySelectorAll(".view-grid").forEach((el) => {
    el.classList.toggle("hidden", !showGrid)
    el.classList.toggle("animate-view-in", showGrid)
  })

  document.querySelectorAll(".view-list").forEach((el) => {
    el.classList.toggle("hidden", showGrid)
    el.classList.toggle("animate-view-in", !showGrid)
  })

  const btnGrid = document.getElementById("view-grid")
  const btnList = document.getElementById("view-list")

  btnGrid?.setAttribute("aria-pressed", String(showGrid))
  btnList?.setAttribute("aria-pressed", String(!showGrid))

  btnGrid?.setAttribute("data-active", String(showGrid))
  btnList?.setAttribute("data-active", String(!showGrid))

  localStorage.setItem(KEY, view)
}

document.addEventListener("DOMContentLoaded", () => {
  const btnGrid = document.getElementById("view-grid")
  const btnList = document.getElementById("view-list")

  if (!btnGrid || !btnList) return

  const saved = localStorage.getItem(KEY)
  setView(saved === "list" ? "list" : "grid")

  btnGrid.addEventListener("click", () => setView("grid"))
  btnList.addEventListener("click", () => setView("list"))
})
