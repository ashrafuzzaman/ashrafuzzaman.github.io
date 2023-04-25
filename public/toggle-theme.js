const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let themeValue = getPreferTheme();

function setPreference(themeValue) {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function getThemeButtons() {
  return document.querySelectorAll(".theme-btn");
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", themeValue);

  const themeButtons = getThemeButtons();
  themeButtons?.forEach(btn => btn.setAttribute("aria-label", themeValue));
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  const themeButtons = getThemeButtons();
  themeButtons?.forEach(btn =>
    btn.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference(themeValue);
    })
  );
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference(themeValue);
  });
