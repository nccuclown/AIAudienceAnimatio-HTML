// 第一階段 - 消費者資料庫
import * as Utils from '../utils.js';

// 數據計數計時器
let dataCounterTimer = null;

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
      break;

    case 1: // 載入消費者輪廓
      // 顯示球體粒子
      document.querySelectorAll('.sphere-particle').forEach(el => {
        Utils.showElement(el);
      });

      // 顯示計數器
      Utils.showElement(Utils.getElement('counter-box'));

      // 開始計數器動畫
      startDataCounter();
      break;

    case 2: // 建立消費者標籤
      // 顯示標籤容器
      Utils.showElement(Utils.getElement('tag-container'));
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