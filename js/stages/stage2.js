// 第二階段 - RAG知識庫建立
import * as Utils from '../utils.js';

// 重置元素
export function resetElements() {
  // 重置RAG標籤
  Utils.hideElement(Utils.getElement('rag-label'));

  // 重置知識核心
  Utils.hideElement(Utils.getElement('knowledge-core'));
  Utils.hideElement(Utils.getElement('core-ring-1'));
  Utils.hideElement(Utils.getElement('core-ring-2'));

  // 重置文檔粒子
  document.querySelectorAll('.doc-particle').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置知識點
  document.querySelectorAll('.knowledge-point').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置優化框
  Utils.hideElement(Utils.getElement('optimization-box'));

  // 重置優化狀態文字
  Utils.updateText(Utils.getElement('retrieval-speed'), '優化中...');
  Utils.updateText(Utils.getElement('relation-network'), '建立中...');
  Utils.updateText(Utils.getElement('accuracy-test'), '測試中...');
}

// 處理步驟開始
export function handleStepStart(stepIndex) {
  switch(stepIndex) {
    case 0: // 初始化 RAG 架構
      // 顯示RAG標籤
      Utils.showElement(Utils.getElement('rag-label'));

      // 顯示知識核心
      Utils.showElement(Utils.getElement('knowledge-core'));
      Utils.showElement(Utils.getElement('core-ring-1'));
      Utils.showElement(Utils.getElement('core-ring-2'));
      break;

    case 1: // 整合產業資料
      // 顯示文檔粒子
      document.querySelectorAll('.doc-particle').forEach((el, index) => {
        setTimeout(() => {
          Utils.showElement(el);
        }, index * 100);
      });
      break;

    case 2: // 知識索引建立
      // 顯示知識點
      Utils.showElementWithDelay(Utils.getElement('knowledge-point-1'), 0);
      Utils.showElementWithDelay(Utils.getElement('knowledge-point-2'), 500);
      Utils.showElementWithDelay(Utils.getElement('knowledge-point-3'), 1000);
      Utils.showElementWithDelay(Utils.getElement('knowledge-point-4'), 1500);
      break;

    case 3: // 知識優化完成
      // 顯示優化框
      Utils.showElement(Utils.getElement('optimization-box'));
      break;
  }
}

// 處理進度更新
export function handleProgress(stepIndex, progress) {
  switch(stepIndex) {
    case 3: // 知識優化完成
      // 更新優化狀態
      if (progress > 50) {
        Utils.updateText(Utils.getElement('retrieval-speed'), '優化完成');
      }

      if (progress > 70) {
        Utils.updateText(Utils.getElement('relation-network'), '建立完成');
      }

      if (progress > 90) {
        Utils.updateText(Utils.getElement('accuracy-test'), '通過');
      }
      break;
  }
}