// Theme Management for JobBridge
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('jobbridge_theme') || 'light';
        this.setTheme(savedTheme);
        
        // Update the toggle button state
        this.updateToggleButton(savedTheme);
    }

    setTheme(theme) {
        // Add transition class to prevent jarring changes
        document.body.classList.add('theme-transitioning');
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('jobbridge_theme', theme);
        
        // Update the toggle button
        this.updateToggleButton(theme);
        
        // Smooth transition for theme change
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
    }

    updateToggleButton(theme) {
        const toggleButton = document.querySelector('.theme-toggle');
        const themeIcon = document.querySelector('.theme-icon');
        
        if (toggleButton && themeIcon) {
            if (theme === 'dark') {
                themeIcon.textContent = '☀️';
                toggleButton.setAttribute('aria-label', 'Switch to light mode');
                toggleButton.classList.add('dark');
            } else {
                themeIcon.textContent = '🌙';
                toggleButton.setAttribute('aria-label', 'Switch to dark mode');
                toggleButton.classList.remove('dark');
            }
        }
    }

    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        
        // Add a subtle animation to the toggle button
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) {
            toggleButton.style.transform = 'scale(0.9)';
            setTimeout(() => {
                toggleButton.style.transform = 'scale(1)';
            }, 150);
        }
    }

    getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }
}

// Global theme manager instance
let themeManager;

// Global function for HTML onclick handlers
function toggleTheme() {
    if (!themeManager) {
        themeManager = new ThemeManager();
    }
    themeManager.toggle();
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    themeManager = new ThemeManager();
});

// Export for use in other scripts
window.ThemeManager = ThemeManager;
window.toggleTheme = toggleTheme;
