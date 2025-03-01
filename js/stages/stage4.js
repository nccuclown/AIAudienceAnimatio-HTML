// 第四階段 - 精準受眾匹配
import * as Utils from '../utils.js';

// 重置元素
export function resetElements() {
  // 重置產品卡片
  Utils.hideElement(Utils.getElement('product-card'));

  // 重置特性標籤
  document.querySelectorAll('.feature-tag').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置目標受眾標籤
  document.querySelectorAll('.audience-tag').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置匹配波紋
  Utils.hideElement(Utils.getElement('match-ripple'));
  Utils.hideElement(Utils.getElement('match-ripple-2'));

  // 匹配條件已被移除

  // 重置細分框
  Utils.hideElement(Utils.getElement('match-segment-box'));

  // 重置進度條
  document.getElementById('preference-bar').style.width = '0%';
  document.getElementById('spending-bar').style.width = '0%';
  document.getElementById('behavior-bar').style.width = '0%';

  // 重置進度百分比
  Utils.updateText(Utils.getElement('preference-percentage'), '0%');
  Utils.updateText(Utils.getElement('spending-percentage'), '0%');
  Utils.updateText(Utils.getElement('behavior-percentage'), '0%');

  // 重置匹配結果
  Utils.hideElement(Utils.getElement('match-result'));

  // 重置特性標籤
  document.querySelectorAll('.trait-tag').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置次要受眾
  Utils.hideElement(Utils.getElement('secondary-audience'));

  // 重置粒子
  document.querySelectorAll('.sphere-particle').forEach(el => {
    Utils.hideElement(el);
  });
}

// 處理步驟開始
export function handleStepStart(stepIndex) {
  switch(stepIndex) {
    case 0: // 需求分析
      // 顯示產品卡片
      Utils.showElement(Utils.getElement('product-card'));

      // 顯示特性標籤
      Utils.showElementWithDelay(Utils.getElement('feature-tag-1'), 300);
      Utils.showElementWithDelay(Utils.getElement('feature-tag-2'), 600);
      Utils.showElementWithDelay(Utils.getElement('feature-tag-3'), 900);

      // 顯示目標受眾標籤
      Utils.showElementWithDelay(Utils.getElement('audience-tag-1'), 1200);
      Utils.showElementWithDelay(Utils.getElement('audience-tag-2'), 1500);
      Utils.showElementWithDelay(Utils.getElement('audience-tag-3'), 1800);

      // 顯示粒子
      document.querySelectorAll('.sphere-particle').forEach((el, index) => {
        setTimeout(() => {
          Utils.showElement(el);
        }, index * 100);
      });
      break;

    case 1: // 深度匹配
      // 顯示匹配波紋
      Utils.showElement(Utils.getElement('match-ripple'));
      Utils.showElement(Utils.getElement('match-ripple-2'));

      // 匹配條件已被移除，無需顯示
      break;

    case 2: // 受眾細分
      // 顯示細分框
      Utils.showElement(Utils.getElement('match-segment-box'));
      break;

    case 3: // 匹配結果優化
      // 顯示匹配結果
      Utils.showElement(Utils.getElement('match-result'));
      Utils.getElement('match-result').style.left = '70%';

      // 顯示特性標籤
      Utils.showElementWithDelay(Utils.getElement('trait-tag-1'), 200);
      Utils.showElementWithDelay(Utils.getElement('trait-tag-2'), 400);
      Utils.showElementWithDelay(Utils.getElement('trait-tag-3'), 600);
      Utils.showElementWithDelay(Utils.getElement('trait-tag-4'), 800);
      break;
  }
}

// 處理進度更新
export function handleProgress(stepIndex, progress) {
  switch(stepIndex) {
    case 2: // 受眾細分
      break;

    case 3: // 匹配結果優化
      // 顯示次要受眾
      if (progress > 75) {
        Utils.showElement(Utils.getElement('secondary-audience'));
      }
      break;
  }
}