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

function toggleTheme() {
  if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light-mode');
  } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
  }
}
