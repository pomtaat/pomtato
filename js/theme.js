document.addEventListener('DOMContentLoaded', function() {
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
      document.body.classList.add(currentTheme);
  } else {
      // Default to system preference
      const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
      if (isDark) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.add('light-mode');
      }
  }
});
