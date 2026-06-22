const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const toggleIcon = document.querySelector(".theme-toggle__icon");
const storageKey = "profile-card-theme";

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem(storageKey);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme) => {
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  toggleIcon.textContent = isDark ? "Light" : "Dark";
};

applyTheme(getPreferredTheme());

toggle.addEventListener("click", () => {
  const nextTheme = root.classList.contains("dark") ? "light" : "dark";

  localStorage.setItem(storageKey, nextTheme);
  applyTheme(nextTheme);
});
