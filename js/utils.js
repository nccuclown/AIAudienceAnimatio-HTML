// 工具函數

// 格式化數字
export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

// 數字計數器動畫
export function animateCounter(start, end, duration, counterElement, tagCountElement) {
  const startTime = Date.now();

  const updateCounter = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;

    if (elapsed < duration) {
      const progress = elapsed / duration;
      const currentValue = Math.floor(start + (end - start) * progress);
      const tagCount = Math.floor(currentValue * 0.35 / 1000);

      counterElement.textContent = formatNumber(currentValue);
      tagCountElement.textContent = formatNumber(tagCount);

      requestAnimationFrame(updateCounter);
    } else {
      counterElement.textContent = formatNumber(end);
      tagCountElement.textContent = formatNumber(Math.floor(end * 0.35 / 1000));
    }
  };

  updateCounter();
}

// 設置進度條
export function setProgressBar(element, percentage) {
  if (element) {
    element.style.width = `${percentage}%`;
  }
}

// 顯示元素
export function showElement(element, className = 'active') {
  if (element) {
    element.classList.add(className);
  }
}

// 隱藏元素
export function hideElement(element, className = 'active') {
  if (element) {
    element.classList.remove(className);
  }
}

// 設置延時顯示元素
export function showElementWithDelay(element, delay, className = 'active') {
  if (element) {
    setTimeout(() => {
      element.classList.add(className);
    }, delay);
  }
}

// 獲取元素
export function getElement(id) {
  return document.getElementById(id);
}

// 添加類別
export function addClass(element, className) {
  if (element) {
    element.classList.add(className);
  }
}

// 移除類別
export function removeClass(element, className) {
  if (element) {
    element.classList.remove(className);
  }
}

// 更新文本內容
export function updateText(element, text) {
  if (element) {
    element.textContent = text;
  }
}

// 帶有延時的順序顯示多個元素
export function showElementsSequentially(elements, baseDelay = 100) {
  elements.forEach((element, index) => {
    setTimeout(() => {
      showElement(element);
    }, index * baseDelay);
  });
}

// 生成背景粒子
export function generateBackgroundParticles(container, count, colors) {
  container.innerHTML = ''; // 清空容器

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'bg-particle';

    // 隨機大小、位置和顏色
    const size = 2 + Math.random() * 4;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    container.appendChild(particle);
  }
}

// 計算進度顯示
export function calculateProgress(current, total) {
  return Math.floor((current / total) * 100);
}