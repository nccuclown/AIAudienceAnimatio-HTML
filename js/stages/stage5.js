// 第五階段 - 受眾分析報告
import * as Utils from '../utils.js';

// 重置元素
export function resetElements() {
  // 重置報告容器
  Utils.hideElement(Utils.getElement('report-container'));

  // 重置人口統計區塊
  Utils.hideElement(Utils.getElement('demographics-section'));

  // 重置性別分布圖
  Utils.hideElement(Utils.getElement('male-bar'));
  Utils.hideElement(Utils.getElement('female-bar'));
  Utils.hideElement(Utils.getElement('gender-labels'));

  // 重置年齡分布圖
  document.querySelectorAll('[id^="age-bar-"]').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置消費行為區塊
  Utils.hideElement(Utils.getElement('behavior-section'));

  // 重置行為項目
  document.querySelectorAll('.behavior-item').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置興趣區塊
  Utils.hideElement(Utils.getElement('interest-section'));

  // 重置興趣標籤
  document.querySelectorAll('.interest-tag').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置分析框
  Utils.hideElement(Utils.getElement('analysis-box'));

  // 重置行銷建議
  Utils.hideElement(Utils.getElement('marketing-suggestions'));

  // 重置建議項目
  document.querySelectorAll('.suggestion-item').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置發光效果
  Utils.hideElement(Utils.getElement('report-glow'));
}

// 處理步驟開始
export function handleStepStart(stepIndex) {
  switch(stepIndex) {
    case 0: // 報告架構生成
      // 顯示報告容器
      Utils.showElement(Utils.getElement('report-container'));
      break;

    case 1: // 人口統計分析
      // 顯示人口統計區塊
      Utils.showElement(Utils.getElement('demographics-section'));
      break;

    case 2: // 行為偏好分析
      // 顯示消費行為區塊
      Utils.showElement(Utils.getElement('behavior-section'));

      // 顯示興趣區塊
      Utils.showElement(Utils.getElement('interest-section'));
      break;

    case 3: // 最終報告生成
      // 顯示分析框
      Utils.showElement(Utils.getElement('analysis-box'));

      // 顯示行銷建議
      Utils.showElement(Utils.getElement('marketing-suggestions'));
      break;
  }
}

// 處理進度更新
export function handleProgress(stepIndex, progress) {
  switch(stepIndex) {
    case 1: // 人口統計分析
      // 更新性別分布圖
      if (progress > 40) {
        Utils.showElement(Utils.getElement('male-bar'));
        Utils.showElement(Utils.getElement('female-bar'));
      }

      if (progress > 50) {
        Utils.showElement(Utils.getElement('gender-labels'));
      }

      // 更新年齡分布圖
      if (progress > 60) {
        // 計算每個年齡組的高度百分比
        const heights = [15, 45, 30, 10]; // 定義的最終高度

        // 根據進度計算當前高度
        const currentProgress = Math.max(0, progress - 60); // 從60%開始計算
        const factor = currentProgress / 40; // 40% = 100 - 60

        // 設置每個年齡組的高度
        heights.forEach((height, index) => {
          const bar = Utils.getElement(`age-bar-${index + 1}`);
          const currentHeight = Math.min(Math.floor(height * factor), height);
          bar.style.height = `${currentHeight}%`;
          Utils.showElement(bar);
        });
      }
      break;

    case 2: // 行為偏好分析
      // 顯示行為項目
      if (progress > 25) Utils.showElement(Utils.getElement('behavior-item-1'));
      if (progress > 40) Utils.showElement(Utils.getElement('behavior-item-2'));
      if (progress > 55) Utils.showElement(Utils.getElement('behavior-item-3'));
      if (progress > 70) Utils.showElement(Utils.getElement('behavior-item-4'));

      // 顯示興趣標籤
      if (progress > 50) Utils.showElement(Utils.getElement('interest-tag-1'));
      if (progress > 60) Utils.showElement(Utils.getElement('interest-tag-2'));
      if (progress > 70) Utils.showElement(Utils.getElement('interest-tag-3'));
      if (progress > 80) Utils.showElement(Utils.getElement('interest-tag-4'));
      break;

    case 3: // 最終報告生成
      // 顯示建議項目
      if (progress > 30) Utils.showElement(Utils.getElement('suggestion-item-1'));
      if (progress > 50) Utils.showElement(Utils.getElement('suggestion-item-2'));
      if (progress > 70) Utils.showElement(Utils.getElement('suggestion-item-3'));

      // 顯示報告發光效果
      if (progress > 90) {
        Utils.showElement(Utils.getElement('report-glow'));
      }
      break;
  }
}