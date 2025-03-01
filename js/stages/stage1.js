// 第一階段 - 消費者資料庫
import * as Utils from '../utils.js';

// 數據計數計時器
let dataCounterTimer = null;
let profileCreated = false;

// 生成人臉輪廓點位置算法
function generateFacePositions() {
  const positions = [];

  // 頭部輪廓 - 外圍明確點
  const headOutlinePoints = 30;
  for (let i = 0; i < headOutlinePoints; i++) {
    const angle = Math.PI * 2 * (i / headOutlinePoints);
    // 橢圓形頭部輪廓
    const radiusX = 46;
    const radiusY = 55;
    const x = 50 + radiusX * Math.cos(angle);
    const y = 40 + radiusY * Math.sin(angle) * 0.75; // 上窄下寬的橢圓

    // 下巴形狀調整
    let adjustedY = y;
    if (angle > Math.PI * 0.6 && angle < Math.PI * 1.4) {
      adjustedY = y + 5 * Math.sin((angle - Math.PI * 0.6) / (Math.PI * 0.8) * Math.PI);
    }

    positions.push({ 
      x: x, 
      y: adjustedY, 
      isEmphasis: true,
      delay: i * 50 // 讓輪廓按順序形成
    });
  }

  // 面部特徵 - 眼睛
  // 左眼
  const leftEyeCenterX = 40;
  const eyeCenterY = 35;
  const eyeSize = 5;
  const eyePoints = 8;

  for (let i = 0; i < eyePoints; i++) {
    const angle = Math.PI * 2 * (i / eyePoints);
    const x = leftEyeCenterX + eyeSize * Math.cos(angle);
    const y = eyeCenterY + eyeSize * Math.sin(angle) * 0.6; // 橢圓眼睛
    positions.push({ 
      x, y, 
      isEmphasis: true,
      delay: 200 + i * 30
    });
  }

  // 右眼
  const rightEyeCenterX = 60;
  for (let i = 0; i < eyePoints; i++) {
    const angle = Math.PI * 2 * (i / eyePoints);
    const x = rightEyeCenterX + eyeSize * Math.cos(angle);
    const y = eyeCenterY + eyeSize * Math.sin(angle) * 0.6;
    positions.push({ 
      x, y, 
      isEmphasis: true,
      delay: 200 + i * 30
    });
  }

  // 嘴巴 - 簡單的弧線
  const mouthPoints = 10;
  const mouthCenterY = 65;
  const mouthWidth = 20;
  const mouthHeight = 5;

  for (let i = 0; i < mouthPoints; i++) {
    // 生成半圓弧
    const t = i / (mouthPoints - 1);
    const angle = Math.PI * t;
    const x = 50 + mouthWidth * Math.cos(angle);
    const y = mouthCenterY + mouthHeight * Math.sin(angle);
    positions.push({ 
      x, y, 
      isEmphasis: true,
      delay: 400 + i * 20
    });
  }

  // 鼻子 - 簡單的直線
  const noseLine = 5;
  for (let i = 0; i < noseLine; i++) {
    const t = i / (noseLine - 1);
    const x = 50;
    const y = 40 + t * 15;
    positions.push({ 
      x, y, 
      isEmphasis: true,
      delay: 350 + i * 30
    });
  }

  // 填充粒子 - 臉部區域
  const facePoints = 180;
  for (let i = 0; i < facePoints; i++) {
    // 面部輪廓內隨機分佈
    const randomAngle = Math.random() * Math.PI * 2;
    const randomRadius = Math.random() * 38; // 比頭部輪廓小

    // 橢圓形分佈
    const x = 50 + randomRadius * Math.cos(randomAngle);
    const y = 40 + randomRadius * Math.sin(randomAngle) * 0.8;

    // 確保點在合理的臉部區域內
    const inFace = (
      y > 20 && // 不要太靠近頭頂
      y < 75 && // 不要超過下巴
      !(y < 40 && (x < 35 || x > 65)) // 避開額頭兩側
    );

    if (inFace) {
      positions.push({ 
        x, y, 
        isEmphasis: false,
        delay: 500 + Math.random() * 500
      });
    }
  }

  return positions;
}

// 創建用戶輪廓
function createUserProfile() {
  if (profileCreated) return;
  profileCreated = true;

  // 創建用戶輪廓容器
  const container = document.createElement('div');
  container.className = 'user-profile-container';
  container.id = 'user-profile';

  // 獲取人臉形狀的點位置
  const facePositions = generateFacePositions();

  // 創建數據點
  for (let i = 0; i < facePositions.length; i++) {
    const position = facePositions[i];
    const dot = document.createElement('div');
    dot.className = 'profile-data-dot';

    // 設置隨機初始位置（在容器外圍）
    const randomAngle = Math.random() * Math.PI * 2;
    const randomRadius = 150 + Math.random() * 100; // 遠離中心

    const startX = 50 + Math.cos(randomAngle) * randomRadius;
    const startY = 50 + Math.sin(randomAngle) * randomRadius;

    dot.style.left = `${startX}%`;
    dot.style.top = `${startY}%`;

    // 設置目標位置（人臉上的位置）
    const destX = position.x - startX;
    const destY = position.y - startY;

    dot.style.setProperty('--dest-x', `${destX}%`);
    dot.style.setProperty('--dest-y', `${destY}%`);

    // 設置特殊樣式
    if (position.isEmphasis) {
      dot.classList.add('emphasis');
    }

    // 隨機添加閃爍效果
    if (Math.random() > 0.7) {
      dot.classList.add('twinkle');
      dot.style.animationDelay = `${Math.random() * 2}s`;
    }

    // 設置自訂資料屬性以便後續使用
    dot.dataset.delay = position.delay || 0;

    container.appendChild(dot);
  }

  // 添加到球體容器
  const sphereContainer = document.querySelector('.sphere-container');
  if (sphereContainer) {
    sphereContainer.appendChild(container);
  } else {
    console.warn("找不到球體容器");
    const stageVisual = document.getElementById('stage-visual-0');
    if (stageVisual) {
      stageVisual.appendChild(container);
    }
  }
}

// 重置元素
export function resetElements() {
  // 重置狀態
  profileCreated = false;

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
      setTimeout(() => {
        createUserProfile();
      }, 500);
      break;

    case 1: // 載入消費者輪廓
      // 顯示球體粒子
      document.querySelectorAll('.sphere-particle').forEach(el => {
        Utils.showElement(el);
      });

      // 顯示用戶輪廓的數據點
      document.querySelectorAll('.profile-data-dot').forEach(el => {
        setTimeout(() => {
          el.classList.add('active');
        }, 300); // 快速顯示所有點
      });

      // 顯示計數器
      Utils.showElement(Utils.getElement('counter-box'));

      // 開始計數器動畫
      startDataCounter();
      break;

    case 2: // 建立消費者標籤
      // 顯示標籤容器
      Utils.showElement(Utils.getElement('tag-container'));

      // 開始數據點移動到目標位置 - 根據延遲依序移動
      document.querySelectorAll('.profile-data-dot').forEach(el => {
        const delay = parseInt(el.dataset.delay) || 0;
        setTimeout(() => {
          el.classList.add('moving');
        }, delay + 100);
      });

      // 在所有點到位後添加容器發光效果
      setTimeout(() => {
        const container = document.getElementById('user-profile');
        if (container) {
          container.classList.add('complete');
        }
      }, 2500);
      break;

    case 3: // 啟動預測模型
      // 顯示預測AI
      Utils.showElement(Utils.getElement('predictive-ai-box'));
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
  const steps = 50;
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