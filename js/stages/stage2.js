// 第二階段 - RAG知識庫建立
import * as Utils from '../utils.js';

// 文檔粒子流向核心的計時器
let docFlowTimer = null;

// 初始化該階段需要的元素
let knowledgeCore = null;
let coreRings = null;
let ragLabel = null;
let optimizationBox = null;
let optimizationItems = [];
let knowledgePoints = [];
let docParticles = [];

// 初始化第二階段
export function initialize(container) {
  // 清理之前的內容
  container.innerHTML = '';

  // 創建RAG容器
  const ragContainer = document.createElement('div');
  ragContainer.className = 'rag-container';
  container.appendChild(ragContainer);

  // RAG 標籤
  ragLabel = document.createElement('div');
  ragLabel.className = 'rag-label';
  ragLabel.textContent = 'RAG 知識庫技術';
  ragContainer.appendChild(ragLabel);

  // 知識庫核心
  knowledgeCore = document.createElement('div');
  knowledgeCore.id = 'knowledge-core';
  knowledgeCore.className = 'knowledge-core';
  ragContainer.appendChild(knowledgeCore);

  // 核心環
  const coreRing = document.createElement('div');
  coreRing.id = 'core-ring';
  coreRing.className = 'core-ring';
  ragContainer.appendChild(coreRing);

  // 添加知識點
  for (let i = 1; i <= 8; i++) {
    const point = document.createElement('div');
    point.id = `knowledge-point-${i}`;
    point.className = 'knowledge-point';
    point.style.top = `${20 + Math.random() * 60}%`;
    point.style.left = `${20 + Math.random() * 60}%`;
    knowledgePoints.push(point);
    ragContainer.appendChild(point);
  }

  // 添加文檔粒子
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'doc-particles-container';
  ragContainer.appendChild(particlesContainer);

  for (let i = 1; i <= 10; i++) {
    const particle = document.createElement('div');
    particle.id = `doc-particle-${i}`;
    particle.className = 'doc-particle';
    particle.style.top = `${20 + Math.random() * 60}%`;
    particle.style.left = `${20 + Math.random() * 60}%`;
    docParticles.push(particle);
    particlesContainer.appendChild(particle);
  }

  // 知識庫優化框
  optimizationBox = document.createElement('div');
  optimizationBox.id = 'optimization-box';
  optimizationBox.className = 'optimization-box';
  optimizationBox.innerHTML = `
    <div class="optimization-title">知識庫優化</div>
    <div class="optimization-items">
      <div class="optimization-item" id="optimization-item-1">
        <div class="optimization-name">知識庫優化</div>
        <div class="optimization-status">進行中...</div>
      </div>
      <div class="optimization-item" id="optimization-item-2">
        <div class="optimization-name">檢索速度: 優化</div>
        <div class="optimization-status">進行中...</div>
      </div>
      <div class="optimization-item" id="optimization-item-3">
        <div class="optimization-name">關聯網絡: 建立</div>
        <div class="optimization-status">進行中...</div>
      </div>
      <div class="optimization-item" id="optimization-item-4">
        <div class="optimization-name">準確度測試: 測試</div>
        <div class="optimization-status">進行中...</div>
      </div>
    </div>
  `;
  ragContainer.appendChild(optimizationBox);

  // 保存優化項目引用
  optimizationItems = document.querySelectorAll('.optimization-item');
}

// 處理文檔粒子流向核心的動畫
function startDocumentFlow() {
  // 避免重複啟動
  if (docFlowTimer) {
    clearInterval(docFlowTimer);
  }

  // 獲取核心中心點
  const core = document.getElementById('knowledge-core');
  if (!core) return;

  const coreRect = core.getBoundingClientRect();
  const coreCenterX = coreRect.left + coreRect.width / 2;
  const coreCenterY = coreRect.top + coreRect.height / 2;

  // 定期創建一個文檔粒子並讓它流向核心
  docFlowTimer = setInterval(() => {
    // 創建新的粒子
    const particle = document.createElement('div');
    particle.className = 'doc-particle active';
    document.querySelector('.doc-particles-container').appendChild(particle);

    // 隨機位置
    particle.style.top = `${20 + Math.random() * 60}%`;
    particle.style.left = `${20 + Math.random() * 60}%`;

    const particleRect = particle.getBoundingClientRect();
    const particleCenterX = particleRect.left + particleRect.width / 2;
    const particleCenterY = particleRect.top + particleRect.height / 2;

    // 計算流向核心的移動向量
    const moveX = coreCenterX - particleCenterX;
    const moveY = coreCenterY - particleCenterY;

    // 設置粒子的自定義屬性
    particle.style.setProperty('--flow-x', `${moveX}px`);
    particle.style.setProperty('--flow-y', `${moveY}px`);

    // 添加流動動畫類
    particle.classList.add('flowing');

    // 動畫結束後刪除粒子
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 2000);
  }, 300);
}

// 更新優化項目狀態
function updateOptimizationStatus(index, status) {
  if (optimizationItems && optimizationItems[index]) {
    const statusElem = optimizationItems[index].querySelector('.optimization-status');
    if (statusElem) {
      statusElem.textContent = status;
    }
  }
}

// 重置元素狀態
export function resetElements() {
  // 隱藏所有元素
  if (knowledgeCore) knowledgeCore.classList.remove('active');
  if (coreRings) {
    if (Array.isArray(coreRings)) {
      coreRings.forEach(ring => ring.classList.remove('active'));
    } else {
      document.querySelectorAll('.core-ring').forEach(ring => ring.classList.remove('active'));
    }
  }
  if (ragLabel) ragLabel.classList.remove('active');
  if (optimizationBox) optimizationBox.classList.remove('active');

  // 停止粒子流動
  if (docFlowTimer) {
    clearInterval(docFlowTimer);
    docFlowTimer = null;
  }

  // 隱藏知識點
  knowledgePoints.forEach(point => {
    point.classList.remove('active');
  });

  // 隱藏文檔粒子
  docParticles.forEach(particle => {
    particle.classList.remove('active', 'flowing');
  });
}

// 處理步驟開始
export function handleStepStart(stepIndex) {
  console.log('RAG步驟開始:', stepIndex);

  // 步驟0: 初始化 RAG 架構
  if (stepIndex === 0) {
    // 顯示RAG標籤和核心
    if (ragLabel) {
      setTimeout(() => ragLabel.classList.add('active'), 100);
    }
    if (knowledgeCore) {
      setTimeout(() => knowledgeCore.classList.add('active'), 300);
    }
    // 顯示核心環
    setTimeout(() => {
      document.querySelectorAll('.core-ring').forEach(ring => {
        ring.classList.add('active');
      });
    }, 500);
  }

  // 步驟1: 整合產業資料
  else if (stepIndex === 1) {
    // 顯示知識點
    knowledgePoints.forEach((point, index) => {
      setTimeout(() => {
        if (point.classList) {
          point.classList.add('active');
        }
      }, 200 * index);
    });

    // 顯示文檔粒子
    docParticles.forEach((particle, index) => {
      setTimeout(() => {
        if (particle.classList) {
          particle.classList.add('active');
        }
      }, 300 * index);
    });

    // 開始粒子流動動畫
    setTimeout(startDocumentFlow, 1000);
  }

  // 步驟2: 知識索引建立
  else if (stepIndex === 2) {
    // 顯示優化框
    if (optimizationBox) {
      optimizationBox.classList.add('active');
    }

    // 依次顯示優化項目
    optimizationItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active');
      }, 400 * index);
    });
  }

  // 步驟3: 知識優化完成
  else if (stepIndex === 3) {
    // 更新所有優化項目的狀態為完成
    optimizationItems.forEach((item, index) => {
      setTimeout(() => {
        const statusElem = item.querySelector('.optimization-status');
        if (statusElem) {
          statusElem.textContent = '完成';
          statusElem.classList.add('completed');
        }
      }, 300 * index);
    });

    // 核心脈動效果增強
    if (knowledgeCore) {
      knowledgeCore.classList.add('enhanced-pulse');
    }
  }
}

// 處理步驟結束
export function handleStepEnd(stepIndex) {
  // 可以在這裡處理每個步驟結束時的清理工作
}

// 處理階段結束
export function handleStageEnd() {
  // 重置元素狀態
  resetElements();
}