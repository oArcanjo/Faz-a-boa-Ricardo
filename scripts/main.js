// Gerenciamento de tema
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
}

// Gerenciamento de tabs
function initTabs() {
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetTab = trigger.getAttribute("data-tab")

      // Remove active class from all triggers and contents
      tabTriggers.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked trigger and corresponding content
      trigger.classList.add("active")
      document.getElementById(targetTab).classList.add("active")
    })
  })
}

// Função para copiar texto
async function copyToClipboard(text, label) {
  try {
    await navigator.clipboard.writeText(text)
    showToast("Copiado!", `${label} foi copiado para a área de transferência.`, "success")
  } catch (err) {
    console.error("Falha ao copiar:", err)
    showToast("Erro", "Não foi possível copiar. Tente novamente.", "error")
  }
}

// Sistema de toast notifications
function showToast(title, description, type = "success") {
  // Remove existing toasts
  const existingToasts = document.querySelectorAll(".toast")
  existingToasts.forEach((toast) => toast.remove())

  // Create new toast
  const toast = document.createElement("div")
  toast.className = `toast ${type}`
  toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
    `

  document.body.appendChild(toast)

  // Show toast
  setTimeout(() => toast.classList.add("show"), 100)

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initTheme()
  initTabs()
})

// Função global para botões de telefone
function copyPhone(number, label) {
  copyToClipboard(number, label)
}

// Função global para botões de cópia
function copyText(text, label) {
  copyToClipboard(text, label)
}
