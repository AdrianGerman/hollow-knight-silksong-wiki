const KEY = "instrumentos_view"

function setView(view) {
  const showGrid = view === "grid"

  document.querySelectorAll(".view-grid").forEach((el) => {
    el.classList.toggle("hidden", !showGrid)
  })

  document.querySelectorAll(".view-list").forEach((el) => {
    el.classList.toggle("hidden", showGrid)
  })

  const btnGrid = document.getElementById("view-grid")
  const btnList = document.getElementById("view-list")

  btnGrid?.setAttribute("aria-pressed", String(showGrid))
  btnList?.setAttribute("aria-pressed", String(!showGrid))

  btnGrid?.classList.toggle("bg-white/[0.06]", showGrid)
  btnList?.classList.toggle("bg-white/[0.06]", !showGrid)

  localStorage.setItem(KEY, view)
}

document.addEventListener("DOMContentLoaded", () => {
  const btnGrid = document.getElementById("view-grid")
  const btnList = document.getElementById("view-list")

  const saved = localStorage.getItem(KEY)
  setView(saved === "list" ? "list" : "grid")

  btnGrid?.addEventListener("click", () => setView("grid"))
  btnList?.addEventListener("click", () => setView("list"))
})
