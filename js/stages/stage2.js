// 第二階段 - RAG知識庫建立
import * as Utils from '../utils.js';

// 文檔粒子流向核心的計時器
let docFlowTimer = null;
let embeddingPointsCreated = false;

// 重置元素
export function resetElements() {
  // 重置知識庫標題
  const knowledgeTitle = document.querySelector('.knowledge-title');
  if (knowledgeTitle) {
    Utils.hideElement(knowledgeTitle);
  }

  // 重置知識核心
  Utils.hideElement(Utils.getElement('knowledge-core'));
  Utils.hideElement(Utils.getElement('core-ring-1'));
  Utils.hideElement(Utils.getElement('core-ring-2'));

  // 重置核心能量效果
  const coreEnergy = document.querySelector('.core-energy');
  if (coreEnergy) {
    Utils.hideElement(coreEnergy);
  }

  // 重置RAG過程
  const ragProcess = document.querySelector('.rag-process');
  if (ragProcess) {
    Utils.hideElement(ragProcess);
  }
  document.querySelectorAll('.rag-step').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置資料統計
  const dataStats = document.querySelector('.data-stats');
  if (dataStats) {
    Utils.hideElement(dataStats);
  }
  document.querySelectorAll('.data-stat-item').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置知識點連接線
  document.querySelectorAll('.knowledge-connection').forEach(el => {
    if (el) el.remove();
  });

  // 重置文檔粒子
  document.querySelectorAll('.doc-particle').forEach(el => {
    Utils.hideElement(el);
    el.classList.remove('flowing');
  });

  // 重置知識點
  document.querySelectorAll('.knowledge-point').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置嵌入點
  document.querySelectorAll('.embedding-point').forEach(el => {
    if (el) el.remove();
  });
  embeddingPointsCreated = false;

  // 重置優化框
  Utils.hideElement(Utils.getElement('optimization-box'));

  // 重置優化狀態文字
  Utils.updateText(Utils.getElement('retrieval-speed'), '優化中...');
  Utils.updateText(Utils.getElement('relation-network'), '建立中...');
  Utils.updateText(Utils.getElement('accuracy-test'), '測試中...');

  // 清除計時器
  if (docFlowTimer) {
    clearInterval(docFlowTimer);
    docFlowTimer = null;
  }
}

// 創建RAG流程和資料統計元素
function createAdditionalElements() {
  const stageVisual = document.getElementById('stage-visual-1');
  if (!stageVisual) return;

  // 添加知識庫標題
  const knowledgeTitle = document.createElement('div');
  knowledgeTitle.className = 'knowledge-title';
  knowledgeTitle.textContent = '提案與結案的RAG豐富化';
  stageVisual.appendChild(knowledgeTitle);

  // 添加核心能量效果
  const coreEnergy = document.createElement('div');
  coreEnergy.className = 'core-energy';
  const core = stageVisual.querySelector('.knowledge-core');
  if (core) {
    core.appendChild(coreEnergy);
  }

  // 添加RAG過程說明
  const ragProcess = document.createElement('div');
  ragProcess.className = 'rag-process';
  ragProcess.innerHTML = `
    <div class="rag-process-title">
      <span class="rag-indicator"></span>
      RAG處理流程
    </div>
    <div class="rag-step" id="rag-step-1">
      <span class="rag-step-dot"></span>
      檢索相關文檔 (Retrieval)
    </div>
    <div class="rag-step" id="rag-step-2">
      <span class="rag-step-dot"></span>
      分析文檔內容
    </div>
    <div class="rag-step" id="rag-step-3">
      <span class="rag-step-dot"></span>
      生成知識表示 (Generation)
    </div>
    <div class="rag-step" id="rag-step-4">
      <span class="rag-step-dot"></span>
      優化檢索效率
    </div>
  `;
  stageVisual.appendChild(ragProcess);

  // 添加資料統計卡
  const dataStats = document.createElement('div');
  dataStats.className = 'data-stats';
  dataStats.innerHTML = `
    <div class="data-stats-title">知識庫資料統計</div>
    <div class="data-stat-item" id="data-stat-1">
      <span>產業白皮書:</span>
      <span class="data-stat-value">543份</span>
    </div>
    <div class="data-stat-item" id="data-stat-2">
      <span>成功提案:</span>
      <span class="data-stat-value">372個</span>
    </div>
    <div class="data-stat-item" id="data-stat-3">
      <span>廣告投放數據:</span>
      <span class="data-stat-value">527個</span>
    </div>
    <div class="data-stat-item" id="data-stat-4">
      <span>產業專案:</span>
      <span class="data-stat-value">1,234篇</span>
    </div>
    <div class="data-stat-item" id="data-stat-5">
      <span>總知識點:</span>
      <span class="data-stat-value">86,540個</span>
    </div>
  `;
  stageVisual.appendChild(dataStats);

  // 添加嵌入點可視化容器
  const embeddingViz = document.createElement('div');
  embeddingViz.className = 'embedding-viz';
  stageVisual.appendChild(embeddingViz);

  // 添加四個知識點
  const knowledgePoints = [
    {
      id: 'knowledge-point-1',
      className: 'knowledge-point knowledge-point-top-left',
      content: '<span style="color: #26c6da; margin-right: 5px;">✓</span> 向量檢索技術'
    },
    {
      id: 'knowledge-point-2',
      className: 'knowledge-point knowledge-point-top-right',
      content: '<span style="color: #26c6da; margin-right: 5px;">✓</span> 整合543份產業白皮書'
    },
    {
      id: 'knowledge-point-3',
      className: 'knowledge-point knowledge-point-bottom-left',
      content: '<span style="color: #26c6da; margin-right: 5px;">✓</span> 學習372個成功提案'
    },
    {
      id: 'knowledge-point-4',
      className: 'knowledge-point knowledge-point-bottom-right',
      content: '<span style="color: #26c6da; margin-right: 5px;">✓</span> 分析527個廣告投放數據'
    }
  ];

  // 創建知識點
  knowledgePoints.forEach(point => {
    const elem = document.createElement('div');
    elem.id = point.id;
    elem.className = point.className;
    elem.innerHTML = point.content;
    stageVisual.appendChild(elem);
  });
}

// 創建知識點之間的連接線
function createKnowledgeConnections() {
  const stageVisual = document.getElementById('stage-visual-1');
  const knowledgeCore = stageVisual.querySelector('.knowledge-core');
  const knowledgePoints = stageVisual.querySelectorAll('.knowledge-point');

  if (!knowledgeCore || knowledgePoints.length === 0) return;

  // 獲取核心中心位置
  const coreRect = knowledgeCore.getBoundingClientRect();
  const coreCenterX = coreRect.left + coreRect.width / 2;
  const coreCenterY = coreRect.top + coreRect.height / 2;

  // 為每個知識點創建連接線
  knowledgePoints.forEach((point, index) => {
    const pointRect = point.getBoundingClientRect();
    const pointCenterX = pointRect.left + pointRect.width / 2;
    const pointCenterY = pointRect.top + pointRect.height / 2;

    // 計算連線長度和角度
    const dx = pointCenterX - coreCenterX;
    const dy = pointCenterY - coreCenterY;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    // 創建連接線
    const connection = document.createElement('div');
    connection.className = 'knowledge-connection';
    connection.style.width = `${length}px`;
    connection.style.transform = `rotate(${angle}deg)`;

    // 設置位置（從核心中心點出發）
    connection.style.left = `${coreCenterX - stageVisual.getBoundingClientRect().left}px`;
    connection.style.top = `${coreCenterY - stageVisual.getBoundingClientRect().top}px`;

    // 添加到DOM
    stageVisual.appendChild(connection);

    // 延遲顯示連接線
    setTimeout(() => {
      connection.classList.add('active');
    }, 1000 + index * 300);
  });
}

// 創建知識嵌入點
function createEmbeddingPoints() {
  if (embeddingPointsCreated) return;
  embeddingPointsCreated = true;

  const embeddingViz = document.querySelector('.embedding-viz');
  if (!embeddingViz) return;

  // 創建多個嵌入點，密集地分佈在容器內
  const numPoints = 300;
  const width = embeddingViz.offsetWidth;
  const height = embeddingViz.offsetHeight;

  for (let i = 0; i < numPoints; i++) {
    const point = document.createElement('div');
    point.className = 'embedding-point';

    // 生成點的位置，集中在多個區域
    let x, y;

    // 將點分配到3-5個不同的集群中
    const cluster = Math.floor(Math.random() * 5);
    switch (cluster) {
      case 0: // 左上區域
        x = Math.random() * 30 + 10;
        y = Math.random() * 30 + 15;
        break;
      case 1: // 右上區域
        x = Math.random() * 30 + 60;
        y = Math.random() * 30 + 15;
        break;
      case 2: // 中央區域
        x = Math.random() * 40 + 30;
        y = Math.random() * 40 + 30;
        break;
      case 3: // 左下區域
        x = Math.random() * 30 + 15;
        y = Math.random() * 30 + 60;
        break;
      case 4: // 右下區域
        x = Math.random() * 30 + 55;
        y = Math.random() * 30 + 60;
        break;
    }

    // 為一些點添加高亮效果
    if (Math.random() < 0.1) {
      point.classList.add('highlight');
    }

    // 設置位置
    point.style.left = `${x}%`;
    point.style.top = `${y}%`;

    embeddingViz.appendChild(point);

    // 延遲顯示，創造資料逐漸加載的效果
    setTimeout(() => {
      point.classList.add('active');
    }, 500 + Math.random() * 2000);
  }
}

// 開始文檔粒子流向核心的動畫
function startDocParticleFlow() {
  const docParticles = document.querySelectorAll('.doc-particle.active');
  const knowledgeCore = document.querySelector('.knowledge-core');

  if (!knowledgeCore || docParticles.length === 0) return;

  // 獲取知識核心的位置
  const coreRect = knowledgeCore.getBoundingClientRect();
  const coreCenterX = coreRect.left + coreRect.width / 2;
  const coreCenterY = coreRect.top + coreRect.height / 2;

  // 定期讓隨機的文檔粒子流向核心
  let counter = 0;
  docFlowTimer = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * docParticles.length);
    const particle = docParticles[randomIndex];

    if (particle && !particle.classList.contains('flowing')) {
      // 計算粒子到核心的相對位置
      const particleRect = particle.getBoundingClientRect();
      const flowX = coreCenterX - particleRect.left;
      const flowY = coreCenterY - particleRect.top;

      // 設置流動目標
      particle.style.setProperty('--flow-x', `${flowX}px`);
      particle.style.setProperty('--flow-y', `${flowY}px`);

      // 開始流動動畫
      particle.classList.add('flowing');

      // 流動完成後重置
      setTimeout(() => {
        particle.classList.remove('flowing');
        particle.style.opacity = '1'; // 重置透明度
      }, 2100);
    }

    counter++;
    if (counter > 30) {
      clearInterval(docFlowTimer);
      docFlowTimer = null;
    }
  }, 300);
}

// 處理步驟開始
export function handleStepStart(stepIndex) {
  switch(stepIndex) {
    case 0: // 初始化 RAG 架構
      // 創建額外的UI元素
      createAdditionalElements();

      // 顯示知識庫標題
      Utils.showElement(document.querySelector('.knowledge-title'));

      // 顯示知識核心
      Utils.showElement(Utils.getElement('knowledge-core'));
      Utils.showElement(Utils.getElement('core-ring-1'));
      Utils.showElement(Utils.getElement('core-ring-2'));

      // 顯示核心能量效果
      setTimeout(() => {
        const coreEnergy = document.querySelector('.core-energy');
        if (coreEnergy) Utils.showElement(coreEnergy);
      }, 800);

      // 顯示RAG處理流程框
      setTimeout(() => {
        const ragProcess = document.querySelector('.rag-process');
        if (ragProcess) Utils.showElement(ragProcess);
      }, 1000);

      // 顯示第一個RAG步驟
      setTimeout(() => {
        Utils.showElement(document.getElementById('rag-step-1'));
      }, 1500);
      break;

    case 1: // 整合產業資料
      // 顯示資料統計
      Utils.showElement(document.querySelector('.data-stats'));

      // 逐步顯示資料統計項目
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          Utils.showElement(document.getElementById(`data-stat-${i}`));
        }, 300 * i);
      }

      // 顯示第二個RAG步驟
      setTimeout(() => {
        Utils.showElement(document.getElementById('rag-step-2'));
      }, 1000);

      // 顯示文檔粒子
      document.querySelectorAll('.doc-particle').forEach((el, index) => {
        setTimeout(() => {
          Utils.showElement(el);
        }, index * 100);
      });

      // 創建嵌入點
      setTimeout(() => {
        createEmbeddingPoints();
      }, 1500);
      break;

    case 2: // 知識索引建立
      // 顯示第三個RAG步驟
      setTimeout(() => {
        Utils.showElement(document.getElementById('rag-step-3'));
      }, 500);

      // 顯示知識點 - 四個角落的知識點
      setTimeout(() => {
        document.querySelectorAll('.knowledge-point').forEach((point, index) => {
          setTimeout(() => {
            Utils.showElement(point);
          }, index * 500);
        });
      }, 1000);

      // 創建知識點連接線
      setTimeout(() => {
        createKnowledgeConnections();
      }, 3000);

      // 開始文檔粒子流向核心
      setTimeout(() => {
        startDocParticleFlow();
      }, 3500);

      // 顯示優化框
      setTimeout(() => {
        Utils.showElement(Utils.getElement('optimization-box'));
      }, 4000);
      break;

    case 3: // 知識優化完成
      // 顯示第四個RAG步驟
      setTimeout(() => {
        Utils.showElement(document.getElementById('rag-step-4'));
      }, 500);

      // 繼續文檔粒子流向核心（如果之前已停止）
      if (!docFlowTimer) {
        setTimeout(() => {
          startDocParticleFlow();
        }, 1000);
      }
      break;
  }
}

// 處理進度更新
export function handleProgress(stepIndex, progress) {
  switch(stepIndex) {
    case 3: // 知識優化完成
      // 更新優化狀態
      if (progress > 30) {
        Utils.updateText(Utils.getElement('retrieval-speed'), '優化完成');
      }

      if (progress > 60) {
        Utils.updateText(Utils.getElement('relation-network'), '建立完成');
      }

      if (progress > 90) {
        Utils.updateText(Utils.getElement('accuracy-test'), '通過');
      }
      break;
  }
}