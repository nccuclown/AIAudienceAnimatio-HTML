// 第四階段 - 精準受眾匹配
import * as Utils from '../utils.js';

// 重置元素
export function resetElements() {
  // 隱藏所有元素
  Utils.hideElement(Utils.getElement('product-card'));

  Utils.hideAllElements('feature-tag', 3);
  Utils.hideAllElements('audience-tag', 3);


  // 重置細分框
  Utils.hideElement(Utils.getElement('match-segment-box'));

  // 重置結果框
  Utils.hideElement(Utils.getElement('match-result'));
  Utils.hideAllElements('trait-tag', 4);
  Utils.hideElement(Utils.getElement('secondary-audience'));
  Utils.hideElement(Utils.getElement('match-ripple'));
  Utils.hideElement(Utils.getElement('match-ripple-2'));
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

      // 顯示粒子 (假設存在)
      document.querySelectorAll('.sphere-particle').forEach((el, index) => {
        setTimeout(() => {
          Utils.showElement(el);
        }, index * 100);
      });
      // 顯示匹配波紋
      Utils.showElement(Utils.getElement('match-ripple'));
      Utils.showElement(Utils.getElement('match-ripple-2'));
      break;

    case 1: // 受眾細分 (原本的第3步，現在變成第2步)
      // 顯示細分框
      Utils.showElement(Utils.getElement('match-segment-box'));
      Utils.getElement('match-segment-box').style.left = '50%';
      break;

    case 2: // 匹配結果優化 (原本的第4步，現在變成第3步)
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
    case 1: // 受眾細分 (原第3步，現為第2步)
      // 更新偏好匹配進度
      const preferenceProgress = Math.min(Math.floor(progress * 2), 100);
      Utils.setProgressBar(Utils.getElement('preference-bar'), preferenceProgress);
      Utils.updateText(Utils.getElement('preference-percentage'), `${preferenceProgress}%`);

      // 更新消費力評估進度
      const spendingProgress = Math.min(Math.floor(progress * 1.4), 100);
      Utils.setProgressBar(Utils.getElement('spending-bar'), spendingProgress);
      Utils.updateText(Utils.getElement('spending-percentage'), `${spendingProgress}%`);

      // 更新行為模式分析進度
      const behaviorProgress = Math.min(Math.floor(progress * 1.1), 100);
      Utils.setProgressBar(Utils.getElement('behavior-bar'), behaviorProgress);
      Utils.updateText(Utils.getElement('behavior-percentage'), `${behaviorProgress}%`);
      break;

    case 2: // 匹配結果優化 (原第4步，現為第3步)
      // 顯示次要受眾
      if (progress > 75) {
        Utils.showElement(Utils.getElement('secondary-audience'));
      }
      break;
  }
}

export function displayStep(stepIndex, progress) {
  switch(stepIndex) {
    case 0: // 需求分析
      // 顯示產品需求卡片
      Utils.showElement(Utils.getElement('product-card'));

      // 依序顯示產品特性和目標受眾標籤
      if (progress > 0.3) {
        Utils.showElement(Utils.getElement('feature-tag-1'));
      }
      if (progress > 0.5) {
        Utils.showElement(Utils.getElement('feature-tag-2'));
      }
      if (progress > 0.7) {
        Utils.showElement(Utils.getElement('feature-tag-3'));
      }
      if (progress > 0.6) {
        Utils.showElement(Utils.getElement('audience-tag-1'));
      }
      if (progress > 0.8) {
        Utils.showElement(Utils.getElement('audience-tag-2'));
        Utils.showElement(Utils.getElement('audience-tag-3'));
      }
      break;

    case 1: // 受眾細分 (原來的第3步，現在變成第2步)
      // 顯示細分框
      Utils.showElement(Utils.getElement('match-segment-box'));
      break;

    case 2: // 匹配結果優化 (原來的第4步，現在變成第3步)
      // 隱藏細分框
      Utils.hideElement(Utils.getElement('match-segment-box'));

      // 顯示匹配結果
      Utils.showElement(Utils.getElement('match-result'));
      Utils.getElement('match-result').style.left = '70%';

      // 顯示特性標籤
      if (progress > 0.3) {
        Utils.showElement(Utils.getElement('trait-tag-1'));
      }
      if (progress > 0.5) {
        Utils.showElement(Utils.getElement('trait-tag-2'));
      }
      if (progress > 0.7) {
        Utils.showElement(Utils.getElement('trait-tag-3'));
        Utils.showElement(Utils.getElement('trait-tag-4'));
      }

      // 在80%進度顯示次要受眾框
      if (progress > 0.8) {
        Utils.showElement(Utils.getElement('secondary-audience'));
      }
      break;
  }
}