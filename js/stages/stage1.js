// 第一階段 - 消費者資料庫
import * as Utils from '../utils.js';

// 數據計數計時器
let dataCounterTimer = null;
// 用戶輪廓點的目標位置
const profilePointPositions = [];

// 初始化用戶輪廓點的目標位置
function initProfilePointPositions() {
  // 定義人臉輪廓的坐標點，相對於容器的百分比
  // 這些坐標定義了一個基本的人臉輪廓
  const faceOutline = [
    // 頭部輪廓 - 橢圓形
    ...Array.from({ length: 20 }, (_, i) => {
      const angle = Math.PI * 2 * (i / 20);
      return {
        x: 50 + 45 * Math.cos(angle),
        y: 50 + 40 * Math.sin(angle)
      };
    }),
    // 眼睛
    { x: 35, y: 40 }, { x: 37, y: 38 }, { x: 39, y: 40 }, { x: 37, y: 42 },
    { x: 65, y: 40 }, { x: 63, y: 38 }, { x: 61, y: 40 }, { x: 63, y: 42 },
    // 鼻子
    { x: 50, y: 50 }, { x: 47, y: 55 }, { x: 53, y: 55 },
    // 嘴巴
    { x: 40, y: 65 }, { x: 45, y: 68 }, { x: 50, y: 70 },
    { x: 55, y: 68 }, { x: 60, y: 65 }
  ];

  return faceOutline;
}

// 創建用戶輪廓元素
function createUserProfile() {
  // 初始化目標位置
  const positions = initProfilePointPositions();

  // 創建用戶輪廓容器
  const container = document.createElement('div');
  container.className = 'user-profile-container';
  container.id = 'user-profile';

  // 創建用戶輪廓SVG
  const outline = document.createElement('div');
  outline.className = 'profile-outline';
  outline.id = 'profile-outline';

  // 使用SVG繪製人臉輪廓
  outline.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,10 
               C25,10 15,30 15,50 
               C15,75 30,90 50,90 
               C70,90 85,75 85,50 
               C85,30 75,10 50,10 Z
               M35,40 C36,38 38,38 39,40 C38,42 36,42 35,40 Z
               M65,40 C64,38 62,38 61,40 C62,42 64,42 65,40 Z
               M50,50 Q45,60 40,65 Q50,70 60,65 Q55,60 50,50 Z" 
            fill="none" stroke="#ffbb00" stroke-width="1" />
    </svg>
  `;

  container.appendChild(outline);

  // 創建數據點
  for (let i = 0; i < 100; i++) {
    const dot = document.createElement('div');
    dot.className = 'profile-data-dot';

    // 設置隨機初始位置（相對於球體容器）
    const randomAngle = Math.random() * Math.PI * 2;
    const randomRadius = 80 + Math.random() * 70; // 距離中心的距離

    const startX = 50 + Math.cos(randomAngle) * randomRadius;
    const startY = 50 + Math.sin(randomAngle) * randomRadius;

    dot.style.left = `${startX}%`;
    dot.style.top = `${startY}%`;

    // 隨機選擇一個目標位置
    const targetIndex = Math.floor(Math.random() * positions.length);
    const target = positions[targetIndex];

    // 計算並存儲目標位置（相對於初始位置的偏移）
    const destX = target.x - startX;
    const destY = target.y - startY;

    dot.style.setProperty('--dest-x', `${destX}%`);
    dot.style.setProperty('--dest-y', `${destY}%`);

    container.appendChild(dot);
  }

  // 添加到球體容器
  const sphereContainer = Utils.getElement('stage-visual-0');
  sphereContainer.appendChild(container);
}

// 重置元素
export function resetElements() {
  // 重置球體
  Utils.hideElement(Utils.getElement('sphere'));

  // 重置球體粒子
  document.querySelectorAll('.sphere-particle').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置計數器
  Utils.hideElement(Utils.getElement('counter-box'));
  Utils.getElement('counter-value').textContent = '0';
  Utils.getElement('tag-count').textContent = '0';

  // 重置標籤容器
  Utils.hideElement(Utils.getElement('tag-container'));
  document.querySelectorAll('.tag').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置預測AI
  Utils.hideElement(Utils.getElement('predictive-ai-box'));
  Utils.hideElement(Utils.getElement('ai-accuracy'));

  // 重置用戶輪廓
  const userProfile = document.getElementById('user-profile');
  if (userProfile) {
    userProfile.remove();
  }

  // 清除計時器
  if (dataCounterTimer) {
    clearInterval(dataCounterTimer);
    dataCounterTimer = null;
  }
}

// 處理步驟開始
export function handleStepStart(stepIndex) {
  switch(stepIndex) {
    case 0: // 初始化資料基礎
      // 顯示球體
      Utils.showElement(Utils.getElement('sphere'));

      // 創建用戶輪廓
      createUserProfile();
      break;

    case 1: // 載入消費者輪廓
      // 顯示球體粒子
      document.querySelectorAll('.sphere-particle').forEach(el => {
        Utils.showElement(el);
      });

      // 顯示用戶輪廓的數據點
      document.querySelectorAll('.profile-data-dot').forEach((el, index) => {
        setTimeout(() => {
          Utils.showElement(el);
        }, index * 20); // 分散顯示時間
      });

      // 顯示計數器
      Utils.showElement(Utils.getElement('counter-box'));

      // 開始計數器動畫
      startDataCounter();
      break;

    case 2: // 建立消費者標籤
      // 顯示標籤容器
      Utils.showElement(Utils.getElement('tag-container'));

      // 開始數據點移動到目標位置
      document.querySelectorAll('.profile-data-dot').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('moving');
        }, 100 + index * 15); // 分散開始時間
      });
      break;

    case 3: // 啟動預測模型
      // 顯示預測AI
      Utils.showElement(Utils.getElement('predictive-ai-box'));

      // 顯示用戶輪廓外框
      Utils.showElement(Utils.getElement('profile-outline'));
      break;
  }
}

// 處理進度更新
export function handleProgress(stepIndex, progress) {
  switch(stepIndex) {
    case 2: // 建立消費者標籤
      // 根據進度顯示標籤
      if (progress > 20) Utils.showElement(Utils.getElement('tag-1'));
      if (progress > 35) Utils.showElement(Utils.getElement('tag-2'));
      if (progress > 50) Utils.showElement(Utils.getElement('tag-3'));
      if (progress > 65) Utils.showElement(Utils.getElement('tag-4'));
      if (progress > 80) Utils.showElement(Utils.getElement('tag-5'));
      if (progress > 95) Utils.showElement(Utils.getElement('tag-6'));
      break;

    case 3: // 啟動預測模型
      // 顯示準確度
      if (progress > 75) {
        Utils.showElement(Utils.getElement('ai-accuracy'));
      }
      break;
  }
}

// 啟動數據計數器
function startDataCounter() {
  let count = 0;
  const maxCount = 3000000;
  const steps = 50; // 增加的步數
  const increment = Math.floor(maxCount / steps);

  // 清除現有計時器
  if (dataCounterTimer) {
    clearInterval(dataCounterTimer);
  }

  // 設定新的計時器
  dataCounterTimer = setInterval(() => {
    count += increment;

    if (count >= maxCount) {
      count = maxCount;
      clearInterval(dataCounterTimer);
    }

    // 更新計數器顯示
    Utils.getElement('counter-value').textContent = Utils.formatNumber(count);
    Utils.getElement('tag-count').textContent = Utils.formatNumber(Math.floor(count * 0.35 / 1000));

  }, 100);
}