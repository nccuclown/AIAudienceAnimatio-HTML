// 第三階段 - 數據融合
import * as Utils from '../utils.js';

// 重置元素
export function resetElements() {
  // 重置數據框
  Utils.hideElement(Utils.getElement('client-data-box'));
  Utils.hideElement(Utils.getElement('audience-data-box'));

  // 重置TNL MG Tag
  Utils.hideElement(Utils.getElement('tnl-tag'));

  // 重置數據粒子
  document.querySelectorAll('.data-particle').forEach(el => {
    Utils.hideElement(el);
    el.classList.remove('merging');
  });

  // 重置數據箭頭
  Utils.hideElement(Utils.getElement('left-arrow'));
  Utils.hideElement(Utils.getElement('right-arrow'));

  // 重置數據類型標籤
  document.querySelectorAll('.data-type-label').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置融合完成框
  Utils.hideElement(Utils.getElement('fusion-complete-box'));
  Utils.hideElement(Utils.getElement('enhanced-tags'));

  // 重置數據增長指示器
  Utils.updateText(Utils.getElement('data-increase-value'), '0');
}

// 處理步驟開始
export function handleStepStart(stepIndex) {
  switch(stepIndex) {
    case 0: // TNL MG Tag 初始化
      // 顯示TNL MG Tag
      Utils.showElement(Utils.getElement('tnl-tag'));
      break;

    case 1: // 客戶數據連接
      // 顯示數據框
      Utils.showElement(Utils.getElement('client-data-box'));
      Utils.showElement(Utils.getElement('audience-data-box'));

      // 顯示數據粒子
      document.querySelectorAll('.data-particle').forEach((el, index) => {
        setTimeout(() => {
          Utils.showElement(el);
        }, index * 100);
      });
      break;

    case 2: // 資料清洗與標準化
      // 顯示數據箭頭
      Utils.showElement(Utils.getElement('left-arrow'));
      Utils.showElement(Utils.getElement('right-arrow'));

      // 顯示數據類型標籤
      Utils.showElementWithDelay(Utils.getElement('type-label-1'), 0);
      Utils.showElementWithDelay(Utils.getElement('type-label-2'), 300);
      Utils.showElementWithDelay(Utils.getElement('type-label-3'), 600);
      Utils.showElementWithDelay(Utils.getElement('type-label-4'), 900);
      Utils.showElementWithDelay(Utils.getElement('type-label-5'), 1200);
      break;

    case 3: // 數據融合完成
      // 顯示融合完成框
      Utils.showElement(Utils.getElement('fusion-complete-box'));

      // 啟動數據粒子合併動畫
      document.querySelectorAll('.data-particle').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('merging');
        }, index * 200);
      });
      break;
  }
}

// 處理進度更新
export function handleProgress(stepIndex, progress) {
  switch(stepIndex) {
    case 3: // 數據融合完成
      // 更新數據增長值
      const increaseValue = Math.min(Math.floor(progress / 2), 31);
      Utils.updateText(Utils.getElement('data-increase-value'), increaseValue);

      // 顯示增強標籤
      if (progress > 75) {
        Utils.showElement(Utils.getElement('enhanced-tags'));
      }
      break;
  }
}