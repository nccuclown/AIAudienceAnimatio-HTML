// 第二階段 - RAG知識庫建立
import * as Utils from '../utils.js';

// 文檔粒子流向核心的計時器
let docFlowTimer = null;

// 初始化第二階段
export function initialize(container) {
  // 清理之前的內容
  container.innerHTML = '';

  // 創建視覺容器
  const stageVisual = document.createElement('div');
  stageVisual.id = 'stage-visual-1';
  stageVisual.className = 'stage-visual';
  container.appendChild(stageVisual);

  // 創建RAG容器
  const ragContainer = document.createElement('div');
  ragContainer.className = 'rag-container';
  stageVisual.appendChild(ragContainer);

  // 添加RAG頭部信息
  const ragHeader = document.createElement('div');
  ragHeader.className = 'rag-header';
  ragHeader.innerHTML = `
    <div class="rag-title">檢索增強生成 (RAG)</div>
    <div class="rag-subtitle">融合專業領域知識，提供精準上下文增強</div>
  `;
  ragContainer.appendChild(ragHeader);

  // 創建知識庫核心
  const knowledgeCore = document.createElement('div');
  knowledgeCore.className = 'knowledge-core';
  ragContainer.appendChild(knowledgeCore);

  // 添加核心環
  for (let i = 0; i < 3; i++) {
    const coreRing = document.createElement('div');
    coreRing.className = 'core-ring';
    knowledgeCore.appendChild(coreRing);
  }

  // 創建RAG工作流程
  const ragWorkflow = document.createElement('div');
  ragWorkflow.className = 'rag-workflow';
  ragWorkflow.innerHTML = `
    <div class="rag-step-box retrieval-box">
      <div class="rag-step-icon">R</div>
      <div class="rag-step-title">檢索 (Retrieval)</div>
      <div class="rag-step-description">從大規模知識庫中檢索相關文檔，提供專業背景知識</div>
    </div>

    <div class="rag-workflow-arrow arrow-1"></div>

    <div class="rag-step-box augmentation-box">
      <div class="rag-step-icon">A</div>
      <div class="rag-step-title">增強 (Augmentation)</div>
      <div class="rag-step-description">將檢索到的知識與用戶需求智能融合，強化上下文理解</div>
    </div>

    <div class="rag-workflow-arrow arrow-2"></div>

    <div class="rag-step-box generation-box">
      <div class="rag-step-icon">G</div>
      <div class="rag-step-title">生成 (Generation)</div>
      <div class="rag-step-description">基於增強的上下文生成精確、專業且有深度的回應</div>
    </div>
  `;
  ragContainer.appendChild(ragWorkflow);

  // 創建RAG數據統計
  const ragStats = document.createElement('div');
  ragStats.className = 'rag-stats';
  ragStats.innerHTML = `
    <div class="rag-stats-title">知識庫數據統計</div>
    <div class="rag-stat-item" id="rag-stat-1">
      <span>產業文檔:</span>
      <span class="rag-stat-value">5,467 份</span>
    </div>
    <div class="rag-stat-item" id="rag-stat-2">
      <span>專業詞彙:</span>
      <span class="rag-stat-value">12,890 條</span>
    </div>
    <div class="rag-stat-item" id="rag-stat-3">
      <span>知識節點:</span>
      <span class="rag-stat-value">72,345 個</span>
    </div>
    <div class="rag-stat-item" id="rag-stat-4">
      <span>平均相關度:</span>
      <span class="rag-stat-value">94.3%</span>
    </div>
    <div class="rag-stat-item" id="rag-stat-5">
      <span>更新頻率:</span>
      <span class="rag-stat-value">每日</span>
    </div>
  `;
  ragContainer.appendChild(ragStats);

  // 創建RAG進度框
  const ragProgress = document.createElement('div');
  ragProgress.className = 'rag-progress';
  ragProgress.innerHTML = `
    <div class="rag-progress-title">知識庫優化</div>
    <div class="rag-progress-item">
      <div>語義索引建立</div>
      <div class="progress-bar">
        <div class="progress-fill" id="progress-1"></div>
      </div>
    </div>
    <div class="rag-progress-item">
      <div>實體關係圖譜</div>
      <div class="progress-bar">
        <div class="progress-fill" id="progress-2"></div>
      </div>
    </div>
    <div class="rag-progress-item">
      <div>跨文檔推理</div>
      <div class="progress-bar">
        <div class="progress-fill" id="progress-3"></div>
      </div>
    </div>
  `;
  ragContainer.appendChild(ragProgress);

  // 創建文檔粒子
  createDocParticles(stageVisual, 25);

  // 創建知識點標籤
  createKnowledgeTags(ragContainer);
}

// 創建文檔粒子
function createDocParticles(container, count) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'doc-particle';

    // 隨機位置
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 80 + 10;
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;

    container.appendChild(particle);
  }
}

// 創建知識點標籤
function createKnowledgeTags(container) {
  const tags = [
    { text: '產業分析報告', x: 15, y: 20 },
    { text: '競品策略研究', x: 75, y: 25 },
    { text: '市場趨勢洞察', x: 65, y: 65 },
    { text: '用戶行為數據', x: 20, y: 70 },
    { text: '媒體投放優化', x: 30, y: 40 }
  ];

  tags.forEach(tag => {
    const tagElement = document.createElement('div');
    tagElement.className = 'knowledge-tag';
    tagElement.textContent = tag.text;
    tagElement.style.left = `${tag.x}%`;
    tagElement.style.top = `${tag.y}%`;
    container.appendChild(tagElement);
  });
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
  docFlowTimer = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * docParticles.length);
    const particle = docParticles[randomIndex];
    if (!particle) return;

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

// 更新進度條
function updateProgress(progressId, value) {
  const progressFill = document.getElementById(progressId);
  if (progressFill) {
    progressFill.style.width = `${value}%`;
  }
}

// 分步驟顯示第二階段的所有元素
export function executeStep(step) {
  switch (step) {
    case 0: // 初始化 RAG 架構
      // 顯示RAG頭部信息
      setTimeout(() => {
        Utils.addActiveClass(document.querySelector('.rag-header'));
      }, 200);

      // 顯示知識庫核心
      setTimeout(() => {
        Utils.addActiveClass(document.querySelector('.knowledge-core'));
      }, 500);

      // 顯示核心環
      setTimeout(() => {
        document.querySelectorAll('.core-ring').forEach((ring, index) => {
          setTimeout(() => {
            Utils.addActiveClass(ring);
          }, 700 + index * 200);
        });
      }, 800);
      break;

    case 1: // 整合產業資料
      // 顯示RAG流程
      setTimeout(() => {
        Utils.addActiveClass(document.querySelector('.rag-workflow'));
      }, 200);

      // 顯示RAG步驟框
      setTimeout(() => {
        document.querySelectorAll('.rag-step-box').forEach(box => {
          Utils.addActiveClass(box);
        });
      }, 500);

      // 顯示連接箭頭
      setTimeout(() => {
        document.querySelectorAll('.rag-workflow-arrow').forEach(arrow => {
          Utils.addActiveClass(arrow);
        });
      }, 1500);

      // 顯示文檔粒子
      setTimeout(() => {
        document.querySelectorAll('.doc-particle').forEach((particle, index) => {
          setTimeout(() => {
            Utils.addActiveClass(particle);
          }, 100 * index);
        });

        // 開始粒子流動
        setTimeout(() => {
          startDocParticleFlow();
        }, 2000);
      }, 800);

      // 顯示RAG數據統計
      setTimeout(() => {
        Utils.addActiveClass(document.querySelector('.rag-stats'));

        // 逐個顯示統計項
        document.querySelectorAll('.rag-stat-item').forEach((item, index) => {
          setTimeout(() => {
            Utils.addActiveClass(item);
          }, 300 * index);
        });
      }, 1200);
      break;

    case 2: // 知識索引建立
      // 顯示知識點標籤
      setTimeout(() => {
        document.querySelectorAll('.knowledge-tag').forEach((tag, index) => {
          setTimeout(() => {
            Utils.addActiveClass(tag);
          }, 300 * index);
        });
      }, 500);

      // 顯示進度優化框
      setTimeout(() => {
        Utils.addActiveClass(document.querySelector('.rag-progress'));

        // 逐步填充進度條
        setTimeout(() => {
          updateProgress('progress-1', 90);
        }, 800);

        setTimeout(() => {
          updateProgress('progress-2', 75);
        }, 1500);

        setTimeout(() => {
          updateProgress('progress-3', 60);
        }, 2200);
      }, 1000);
      break;

    case 3: // 知識優化完成
      // 完成所有進度條
      setTimeout(() => {
        updateProgress('progress-1', 100);
        updateProgress('progress-2', 100);
        updateProgress('progress-3', 100);
      }, 500);

      // 增強核心脈動效果
      setTimeout(() => {
        const core = document.querySelector('.knowledge-core');
        if (core) {
          core.style.boxShadow = '0 0 40px #ffbb00';
          core.style.animation = 'pulse 2s infinite alternate';
        }
      }, 1000);

      // 清除計時器
      if (docFlowTimer) {
        clearInterval(docFlowTimer);
        docFlowTimer = null;
      }
      break;
  }
}

// 清理階段
export function cleanup() {
  // 清除計時器
  if (docFlowTimer) {
    clearInterval(docFlowTimer);
    docFlowTimer = null;
  }
}