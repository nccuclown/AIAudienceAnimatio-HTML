// 核心模塊
import Config from './config.js';
import * as Utils from './utils.js';
import * as Stage1 from './stages/stage1.js';
import * as Stage2 from './stages/stage2.js';
import * as Stage3 from './stages/stage3.js';
import * as Stage4 from './stages/stage4.js';
import * as Stage5 from './stages/stage5.js';

// 階段處理器映射
const stageHandlers = [
  Stage1,
  Stage2,
  Stage3,
  Stage4,
  Stage5
];

// 全局變量
let activeStageIndex = 0; // 當前階段
let activeStepIndex = 0;  // 當前步驟
let stepProgress = 0;     // 當前步驟進度
let isTransitioning = false; // 是否正在轉場
let stepTimer = null;     // 步驟計時器
let progressTimer = null; // 進度計時器
let isAutoPlayEnabled = false; // 是否啟用自動播放
let autoPlayTimer = null; // 自動播放計時器

// 初始化應用
function init() {
  // 生成頁籤
  generateTabs();

  // 生成階段內容
  generateStages();

  // 添加頁籤點擊事件
  attachTabEvents();

  // 添加自動播放開關事件
  setupAutoPlayToggle();

  // 隱藏轉場覆蓋層
  document.getElementById('transition-overlay').classList.remove('active');

  // 顯示第一個階段
  switchToStage(0);
}

// 設置自動播放開關
function setupAutoPlayToggle() {
  const autoPlayToggle = document.getElementById('auto-play-toggle');

  autoPlayToggle.addEventListener('change', function() {
    isAutoPlayEnabled = this.checked;

    if (isAutoPlayEnabled) {
      // 如果當前階段的所有步驟已完成，自動切換到下一階段
      const stageSteps = Config.timeline[activeStageIndex];
      if (activeStepIndex >= stageSteps.length) {
        autoPlayNextStage();
      }
    } else {
      // 停止自動播放計時器
      if (autoPlayTimer) {
        clearTimeout(autoPlayTimer);
        autoPlayTimer = null;
      }
    }
  });
}

// 自動播放下一階段
function autoPlayNextStage() {
  if (!isAutoPlayEnabled) return;

  // 清除現有的自動播放計時器
  if (autoPlayTimer) {
    clearTimeout(autoPlayTimer);
  }

  // 設置切換到下一階段的計時器
  autoPlayTimer = setTimeout(() => {
    // 計算下一階段索引
    const nextStageIndex = (activeStageIndex + 1) % Config.stages.length;

    // 切換到下一階段
    switchToStage(nextStageIndex);
  }, 2000); // 等待2秒後切換
}

// 生成頁籤
function generateTabs() {
  const tabContainer = document.getElementById('tab-container');
  let tabsHtml = '';

  Config.stages.forEach((stage, index) => {
    const isActive = index === 0 ? 'active' : '';
    tabsHtml += `<div class="stage-indicator ${isActive}" data-stage="${stage.id}">${index + 1}. ${stage.name}</div>`;
  });

  tabContainer.innerHTML = tabsHtml;
}

// 生成階段內容
function generateStages() {
  const stagesContainer = document.getElementById('stages-container');
  let stagesHtml = '';

  Config.stages.forEach(stage => {
    stagesHtml += Config.templates.stage(stage.id, stage.title, stage.description);
  });

  stagesContainer.innerHTML = stagesHtml;

  // 添加視覺區域內容
  document.getElementById('stage-visual-0').innerHTML = Config.templates.stage1Visual;
  document.getElementById('stage-visual-1').innerHTML = Config.templates.stage2Visual;
  document.getElementById('stage-visual-2').innerHTML = Config.templates.stage3Visual;
  document.getElementById('stage-visual-3').innerHTML = Config.templates.stage4Visual;
  document.getElementById('stage-visual-4').innerHTML = Config.templates.stage5Visual;
}

// 添加頁籤點擊事件
function attachTabEvents() {
  const tabs = document.querySelectorAll('.stage-indicator');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (isTransitioning) return; // 轉場中不可點擊

      const stageIndex = parseInt(tab.getAttribute('data-stage'));
      if (stageIndex !== activeStageIndex) {
        // 停止任何自動播放計時器
        if (autoPlayTimer) {
          clearTimeout(autoPlayTimer);
          autoPlayTimer = null;
        }

        switchToStage(stageIndex);
      }
    });
  });
}

// 切換到指定階段
function switchToStage(stageIndex) {
  // 停止所有計時器
  clearAllTimers();

  // 更新當前階段索引
  activeStageIndex = stageIndex;

  // 重置步驟索引和進度
  activeStepIndex = 0;
  stepProgress = 0;

  // 更新階段指示器
  updateTabIndicators(stageIndex);

  // 更新階段顯示
  updateStageVisibility(stageIndex);

  // 重置所有元素狀態
  resetAllElements();

  // 開始階段動畫
  startStageAnimation();
}

// 更新頁籤指示器
function updateTabIndicators(stageIndex) {
  const tabs = document.querySelectorAll('.stage-indicator');

  tabs.forEach((tab, index) => {
    if (parseInt(tab.getAttribute('data-stage')) === stageIndex) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

// 更新階段顯示
function updateStageVisibility(stageIndex) {
  const stages = document.querySelectorAll('.stage');

  stages.forEach((stage, index) => {
    if (index === stageIndex) {
      stage.classList.add('active');
    } else {
      stage.classList.remove('active');
    }
  });
}

// 重置所有元素狀態
function resetAllElements() {
  stageHandlers.forEach(handler => {
    if (typeof handler.resetElements === 'function') {
      handler.resetElements();
    }
  });
}

// 開始階段動畫
function startStageAnimation() {
  // 重置當前階段的步驟索引和進度
  activeStepIndex = 0;
  stepProgress = 0;

  // 獲取當前階段的所有步驟
  const stageSteps = Config.timeline[activeStageIndex];

  // 播放階段內所有步驟的動畫，但不會自動切換到下一階段
  playAllStepsInSequence(stageSteps, 0);
}

// 按顺序播放阶段内的所有步骤
function playAllStepsInSequence(steps, startIndex) {
  if (startIndex >= steps.length) {
    // 所有步骤播放完毕

    // 如果启用了自动播放，则准备切换到下一阶段
    if (isAutoPlayEnabled) {
      autoPlayNextStage();
    }

    return;
  }

  const currentStep = steps[startIndex];

  // 更新步骤进度指示器
  updateStepIndicator(currentStep);

  // 开始进度计时器
  startProgressTimer(currentStep.duration);

  // 触发当前步骤的动画
  activeStepIndex = startIndex;
  triggerStepAnimation();

  // 设置下一步骤的计时器
  stepTimer = setTimeout(() => {
    // 移动到下一步骤，但不会自动进入下一阶段
    playAllStepsInSequence(steps, startIndex + 1);
  }, currentStep.duration);
}

// 更新步驟指示器
function updateStepIndicator(stepConfig) {
  const stepNameElement = document.getElementById('current-step-name');
  const stepProgressElement = document.getElementById('step-progress-percentage');
  const stepDescriptionElement = document.getElementById('step-description');
  const progressFillElement = document.getElementById('step-progress-fill');

  // 更新步驟名稱
  stepNameElement.textContent = stepConfig.name;

  // 更新步驟說明
  stepDescriptionElement.textContent = stepConfig.description;

  // 重置進度百分比和進度條
  stepProgressElement.textContent = '0%';
  progressFillElement.style.width = '0%';
}

// 開始進度計時器
function startProgressTimer(duration) {
  // 清除現有的計時器
  if (progressTimer) {
    clearInterval(progressTimer);
  }

  // 重置進度
  stepProgress = 0;

  // 設定新的計時器，每50毫秒更新一次進度
  const interval = 50;
  const steps = duration / interval;
  const increment = 100 / steps;

  progressTimer = setInterval(() => {
    stepProgress += increment;

    if (stepProgress >= 100) {
      stepProgress = 100;
      clearInterval(progressTimer);
    }

    // 更新進度顯示
    updateProgress(stepProgress);

    // 根據進度觸發動畫
    triggerProgressBasedAnimations(stepProgress);

  }, interval);
}

// 更新進度顯示
function updateProgress(progress) {
  const percentage = Math.min(Math.round(progress), 100);

  // 更新進度文字
  const stepProgressElement = document.getElementById('step-progress-percentage');
  stepProgressElement.textContent = `${percentage}%`;

  // 更新進度條
  const progressFillElement = document.getElementById('step-progress-fill');
  progressFillElement.style.width = `${percentage}%`;
}

// 觸發步驟動畫
function triggerStepAnimation() {
  const handler = stageHandlers[activeStageIndex];

  if (handler && typeof handler.handleStepStart === 'function') {
    handler.handleStepStart(activeStepIndex);
  }
}

// 根據進度觸發動畫
function triggerProgressBasedAnimations(progress) {
  const handler = stageHandlers[activeStageIndex];

  if (handler && typeof handler.handleProgress === 'function') {
    handler.handleProgress(activeStepIndex, progress);
  }
}

// 清除所有計時器
function clearAllTimers() {
  if (stepTimer) {
    clearTimeout(stepTimer);
    stepTimer = null;
  }

  if (progressTimer) {
    clearInterval(progressTimer);
    progressTimer = null;
  }

  if (autoPlayTimer) {
    clearTimeout(autoPlayTimer);
    autoPlayTimer = null;
  }
}

// 頁面加載後初始化
window.addEventListener('load', init);