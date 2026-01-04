// Dark Mode Toggle
function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 根據本地存儲或系統偏好設置初始狀態
    if (savedMode === 'enabled' || (savedMode === null && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon(true);
    } else {
        updateDarkModeIcon(false);
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    updateDarkModeIcon(isDarkMode);
}

function updateDarkModeIcon(isDarkMode) {
    const icon = document.getElementById('darkModeIcon');
    if (isDarkMode) {
        icon.className = 'layui-icon layui-icon-sun'; // 顯示太陽圖標，表示可切換到亮色
    } else {
        icon.className = 'layui-icon layui-icon-moon'; // 顯示月亮圖標，表示可切換到暗色
    }
}

// 頁面加載時初始化
document.addEventListener('DOMContentLoaded', initDarkMode);

// 響應系統主題變化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('darkMode') === null) {
        // 如果用戶未手動設置，跟隨系統設置
        if (e.matches) {
            document.body.classList.add('dark-mode');
            updateDarkModeIcon(true);
        } else {
            document.body.classList.remove('dark-mode');
            updateDarkModeIcon(false);
        }
    }
});
