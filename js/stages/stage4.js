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

  //重置AI匹配視覺化元素
  Utils.hideElement(Utils.getElement('ai-matching-visualization'));
  Utils.hideElement(Utils.getElement('match-percentage'));
  ['algorithm-node-1', 'algorithm-node-2', 'algorithm-node-3', 'algorithm-node-4'].forEach(nodeId => {
    Utils.hideElement(Utils.getElement(nodeId));
  });
  ['data-flow-1', 'data-flow-2', 'data-flow-3'].forEach(flowId => {
    Utils.hideElement(Utils.getElement(flowId));
  });
  ['data-point-1', 'data-point-2', 'data-point-3', 'data-point-4', 'data-point-5'].forEach(pointId => {
    Utils.hideElement(Utils.getElement(pointId));
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
      // 顯示演算法視覺化
      Utils.showElement(Utils.getElement('ai-matching-visualization'));
      Utils.showElement(Utils.getElement('match-percentage'));

      // 依次顯示演算法節點
      setTimeout(() => {
        Utils.showElement(Utils.getElement('algorithm-node-1'));
        Utils.getElement('algorithm-node-1').classList.add('processing');
      }, 500);

      setTimeout(() => {
        Utils.showElement(Utils.getElement('algorithm-node-2'));
      }, 1000);

      setTimeout(() => {
        Utils.showElement(Utils.getElement('algorithm-node-3'));
      }, 1500);

      setTimeout(() => {
        Utils.showElement(Utils.getElement('algorithm-node-4'));
      }, 2000);

      // 顯示數據流動線
      setTimeout(() => {
        const flow1 = Utils.getElement('data-flow-1');
        Utils.showElement(flow1);
        flow1.classList.add('active');

        // 顯示資料點
        setTimeout(() => {
          Utils.showElement(Utils.getElement('data-point-1'));
          Utils.showElement(Utils.getElement('data-point-2'));
        }, 300);
      }, 1200);

      setTimeout(() => {
        Utils.getElement('algorithm-node-1').classList.remove('processing');
        Utils.getElement('algorithm-node-2').classList.add('processing');

        const flow2 = Utils.getElement('data-flow-2');
        Utils.showElement(flow2);
        flow2.classList.add('active');

        // 顯示更多資料點
        setTimeout(() => {
          Utils.showElement(Utils.getElement('data-point-3'));
        }, 300);
      }, 1800);

      setTimeout(() => {
        Utils.getElement('algorithm-node-2').classList.remove('processing');
        Utils.getElement('algorithm-node-3').classList.add('processing');

        const flow3 = Utils.getElement('data-flow-3');
        Utils.showElement(flow3);
        flow3.classList.add('active');

        // 顯示更多資料點
        setTimeout(() => {
          Utils.showElement(Utils.getElement('data-point-4'));
          Utils.showElement(Utils.getElement('data-point-5'));
        }, 300);
      }, 2400);

      setTimeout(() => {
        Utils.getElement('algorithm-node-3').classList.remove('processing');
        Utils.getElement('algorithm-node-4').classList.add('processing');

        // 顯示匹配波紋表示完成
        Utils.showElement(Utils.getElement('match-ripple'));
        Utils.showElement(Utils.getElement('match-ripple-2'));
      }, 2800);
      break;

    case 2: // 受眾細分
      // 顯示細分框
      Utils.showElement(Utils.getElement('match-segment-box'));
      Utils.getElement('match-segment-box').style.left = '50%';
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
    case 1: // 深度匹配
      // 更新匹配百分比
      const matchPercent = Math.min(Math.floor(progress * 100), 100);
      Utils.updateText(Utils.getElement('match-percent-value'), matchPercent.toString());

      // 依據進度控制演算法節點的激活狀態
      if (progress < 0.3) {
        Utils.getElement('algorithm-node-1').classList.add('processing');
        Utils.getElement('algorithm-node-2').classList.remove('processing');
        Utils.getElement('algorithm-node-3').classList.remove('processing');
        Utils.getElement('algorithm-node-4').classList.remove('processing');
      } else if (progress < 0.6) {
        Utils.getElement('algorithm-node-1').classList.remove('processing');
        Utils.getElement('algorithm-node-2').classList.add('processing');
        Utils.getElement('algorithm-node-3').classList.remove('processing');
        Utils.getElement('algorithm-node-4').classList.remove('processing');
      } else if (progress < 0.9) {
        Utils.getElement('algorithm-node-1').classList.remove('processing');
        Utils.getElement('algorithm-node-2').classList.remove('processing');
        Utils.getElement('algorithm-node-3').classList.add('processing');
        Utils.getElement('algorithm-node-4').classList.remove('processing');
      } else {
        Utils.getElement('algorithm-node-1').classList.remove('processing');
        Utils.getElement('algorithm-node-2').classList.remove('processing');
        Utils.getElement('algorithm-node-3').classList.remove('processing');
        Utils.getElement('algorithm-node-4').classList.add('processing');
      }
      break;

    case 2: // 受眾細分
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

    case 3: // 匹配結果優化
      // 顯示次要受眾
      if (progress > 75) {
        Utils.showElement(Utils.getElement('secondary-audience'));
      }
      break;
  }
}