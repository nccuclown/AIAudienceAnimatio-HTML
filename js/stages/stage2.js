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
      
      // 添加第三個環
      if (!Utils.getElement('core-ring-3')) {
        const ring3 = document.createElement('div');
        ring3.id = 'core-ring-3';
        ring3.classList.add('core-ring');
        Utils.getElement('knowledge-core').parentNode.appendChild(ring3);
      }
      Utils.showElement(Utils.getElement('core-ring-3'));
      
      // 顯示RAG概念標籤
      setTimeout(() => {
        document.querySelectorAll('.rag-concept').forEach(el => {
          Utils.showElement(el);
        });
      }, 1000);
      break;

    case 1: // 整合產業資料
      // 建立知識連接
      createKnowledgeConnections();
      
      // 顯示連接線
      setTimeout(() => {
        document.querySelectorAll('.knowledge-connection').forEach(el => {
          Utils.showElement(el);
        });
      }, 500);
      
      // 啟動數據流動粒子
      setTimeout(() => {
        document.querySelectorAll('.data-flow-particle').forEach(el => {
          Utils.showElement(el);
        });
      }, 1000);
      
      // 顯示知識點

  // 添加知識連接線和數據流動粒子
  function createKnowledgeConnections() {
    const container = document.getElementById('stage-visual-1');
    const core = Utils.getElement('knowledge-core');
    const knowledgePoints = document.querySelectorAll('.knowledge-point');
    
    // 清除舊的連接線
    document.querySelectorAll('.knowledge-connection').forEach(el => el.remove());
    
    // 為每個知識點創建一條連接線
    knowledgePoints.forEach((point, index) => {
      const connection = document.createElement('div');
      connection.classList.add('knowledge-connection');
      connection.id = `connection-${index}`;
      
      // 計算連接線的位置和角度
      const coreRect = core.getBoundingClientRect();
      const pointRect = point.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const coreX = coreRect.left + coreRect.width/2 - containerRect.left;
      const coreY = coreRect.top + coreRect.height/2 - containerRect.top;
      const pointX = pointRect.left + pointRect.width/2 - containerRect.left;
      const pointY = pointRect.top + pointRect.height/2 - containerRect.top;
      
      // 計算長度和角度
      const deltaX = pointX - coreX;
      const deltaY = pointY - coreY;
      const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      // 設置連接線樣式
      connection.style.width = `${length}px`;
      connection.style.transformOrigin = 'left center';
      connection.style.transform = `translate(${coreX}px, ${coreY}px) rotate(${angle}deg)`;
      
      container.appendChild(connection);
      
      // 創建數據流動粒子
      for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.classList.add('data-flow-particle');
        particle.id = `particle-${index}-${i}`;
        
        // 隨機起始位置
        const startX = pointX + (Math.random() * 40 - 20);
        const startY = pointY + (Math.random() * 40 - 20);
        
        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;
        
        // 設置目標位置變量
        particle.style.setProperty('--targetX', `${coreX - startX}px`);
        particle.style.setProperty('--targetY', `${coreY - startY}px`);
        
        // 添加動畫延遲
        particle.style.animationDelay = `${0.5 + i * 0.3 + index * 0.2}s`;
        
        container.appendChild(particle);
      }
    });
    
    // 添加RAG概念標籤
    const concepts = ['retrieval', 'augmentation', 'generation'];
    concepts.forEach(concept => {
      const conceptElement = document.createElement('div');
      conceptElement.classList.add('rag-concept', concept);
      conceptElement.id = `rag-concept-${concept}`;
      conceptElement.textContent = concept.toUpperCase();
      container.appendChild(conceptElement);
    });
  }
  
  // 更新優化框的進度和狀態
  function updateOptimizationStatus(progress) {
    if (progress < 0.6) return; // 只有在進度超過60%時才開始更新
    
    const items = [
      { id: 'retrieval-speed', threshold: 0.7, value: '+175%' },
      { id: 'relation-network', threshold: 0.85, value: '98.3%' },
      { id: 'accuracy-test', threshold: 1.0, value: '96.5%' }
    ];
    
    items.forEach(item => {
      const el = Utils.getElement(item.id);
      const valueEl = document.getElementById(`${item.id}-value`);
      
      if (progress >= item.threshold) {
        // 更新為完成狀態
        Utils.updateText(el, '完成');
        el.parentElement.querySelector('.optimization-status').classList.remove('in-progress');
        el.parentElement.querySelector('.optimization-status').classList.add('complete');
        
        // 顯示數值
        if (valueEl) {
          valueEl.classList.add('active');
        } else {
          const newValueEl = document.createElement('span');
          newValueEl.id = `${item.id}-value`;
          newValueEl.classList.add('optimization-value', 'active');
          newValueEl.textContent = item.value;
          el.parentElement.appendChild(newValueEl);
        }
      }
    });
    
    // 更新進度條
    const progressBar = document.getElementById('optimization-progress');
    if (progressBar) {
      progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
    }
  }

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