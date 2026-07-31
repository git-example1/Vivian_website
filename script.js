// 簡單的滾動淡入效果 (Fade-in on scroll)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Website Ready!");

  // 可以點擊導覽列與主視覺按鈕滑順滾動
  const links = document.querySelectorAll('.nav-links a, .hero-actions a');

  for (const link of links) {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
});