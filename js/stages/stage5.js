// 第五階段 - 受眾分析報告
import * as Utils from '../utils.js';

const ANIMATION_TIMES = {
  SECTION_APPEAR: 200,
  GENDER_CHARTS: 500,
  AGE_BARS: 700,
  BEHAVIOR_START: 900,
  BEHAVIOR_INTERVAL: 200,
  INTEREST_START: 1200,
  INTEREST_INTERVAL: 200,
  ANALYSIS_BOX: 1800,
  SUGGESTIONS_START: 2000,
  SUGGESTION_ITEM_INTERVAL: 200,
};

// 重置元素
export function resetElements() {
  // 重置報告容器
  Utils.hideElement(Utils.getElement('report-container'));

  // 重置人口統計區塊
  Utils.hideElement(Utils.getElement('demographics-section'));

  // 重置性別分布圖
  Utils.hideElement(Utils.getElement('male-bar'));
  Utils.hideElement(Utils.getElement('female-bar'));
  Utils.hideElement(Utils.getElement('gender-labels'));

  // 重置年齡分布圖
  document.querySelectorAll('[id^="age-bar-"]').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置消費行為區塊
  Utils.hideElement(Utils.getElement('behavior-section'));

  // 重置行為項目
  document.querySelectorAll('.behavior-item').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置興趣區塊
  Utils.hideElement(Utils.getElement('interest-section'));

  // 重置興趣標籤
  document.querySelectorAll('.interest-tag').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置分析框
  Utils.hideElement(Utils.getElement('analysis-box'));

  // 重置行銷建議
  Utils.hideElement(Utils.getElement('marketing-suggestions'));

  // 重置建議項目
  document.querySelectorAll('.suggestion-item').forEach(el => {
    Utils.hideElement(el);
  });

  // 重置發光效果
  Utils.hideElement(Utils.getElement('report-glow'));
}

// 處理步驟開始
export function handleStepStart(stepIndex) {
  switch(stepIndex) {
    case 0: // 報告架構生成
      // 顯示報告容器
      const reportContainer = Utils.getElement('report-container');
      Utils.showElement(reportContainer);

      // 確保報告容器在視窗中正確顯示
      setTimeout(() => {
        // 確保元素存在後再進行操作
        if (reportContainer) {
          reportContainer.classList.add('active');

          // 逐步顯示各個報告區段
          setTimeout(() => {
            const sections = document.querySelectorAll('.report-section');
            sections.forEach((section, index) => {
              setTimeout(() => {
                section.classList.add('active');
              }, index * ANIMATION_TIMES.SECTION_APPEAR);
            });

            // 顯示性別標籤和條形圖
            setTimeout(() => {
              const genderLabels = Utils.getElement('gender-labels');
              const maleBar = Utils.getElement('male-bar');
              const femaleBar = Utils.getElement('female-bar');

              if (genderLabels) Utils.showElement(genderLabels);
              if (maleBar) Utils.showElement(maleBar);
              if (femaleBar) Utils.showElement(femaleBar);
            }, ANIMATION_TIMES.GENDER_CHARTS);

            // 顯示年齡條
            setTimeout(() => {
              const ageBars = document.querySelectorAll('.age-bar');
              ageBars.forEach((bar) => {
                bar.classList.add('active');
              });
            }, ANIMATION_TIMES.AGE_BARS);

            // 顯示行為項目
            setTimeout(() => {
              const behaviorItems = document.querySelectorAll('.behavior-item');
              behaviorItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('active');
                }, index * ANIMATION_TIMES.BEHAVIOR_INTERVAL);
              });
            }, ANIMATION_TIMES.BEHAVIOR_START);

            // 顯示興趣標籤
            setTimeout(() => {
              const interestTags = document.querySelectorAll('.interest-tag');
              interestTags.forEach((tag, index) => {
                setTimeout(() => {
                  tag.classList.add('active');
                }, index * ANIMATION_TIMES.INTEREST_INTERVAL);
              });
              
              // 新增產品類型標籤動畫
              const productTags = document.querySelectorAll('[id^="product-tag-"]');
              productTags.forEach((tag, index) => {
                setTimeout(() => {
                  tag.classList.add('active');
                }, index * ANIMATION_TIMES.INTEREST_INTERVAL + 100);
              });
            }, ANIMATION_TIMES.INTEREST_START);

            // 顯示分析框
            setTimeout(() => {
              const analysisBox = Utils.getElement('analysis-box');
              if (analysisBox) Utils.showElement(analysisBox);
            }, ANIMATION_TIMES.ANALYSIS_BOX);
          }, 300);
        }
      }, 100);
      break;

    case 1: // 人口統計分析
      // 顯示人口統計區塊
      Utils.showElement(Utils.getElement('demographics-section'));
      break;

    case 2: // 行為偏好分析
      // 顯示消費行為區塊
      Utils.showElement(Utils.getElement('behavior-section'));

      // 顯示興趣區塊
      Utils.showElement(Utils.getElement('interest-section'));
      break;

    case 3: // 最終報告生成
      // 顯示行銷建議
      const marketingSuggestions = Utils.getElement('marketing-suggestions');
      if (marketingSuggestions) Utils.showElement(marketingSuggestions);

      // 逐個顯示建議項目
      document.querySelectorAll('.suggestion-item').forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('active');
        }, ANIMATION_TIMES.SUGGESTIONS_START + index * ANIMATION_TIMES.SUGGESTION_ITEM_INTERVAL);
      });

      // 顯示報告發光效果
      setTimeout(() => {
        const reportGlow = Utils.getElement('report-glow');
        if (reportGlow) reportGlow.classList.add('active');
      }, ANIMATION_TIMES.SUGGESTIONS_START + 800);
      break;
  }
}

// 處理進度更新
export function handleProgress(stepIndex, progress) {
  // 根據進度百分比更新元素
  switch(stepIndex) {
    case 1: // 人口統計分析
      if (progress > 50) {
        // 確保性別分布完全顯示
        const maleBar = Utils.getElement('male-bar');
        const femaleBar = Utils.getElement('female-bar');
        if (maleBar) maleBar.classList.add('active');
        if (femaleBar) femaleBar.classList.add('active');
      }
      break;

    case 2: // 行為偏好分析
      // 根據進度顯示行為項目
      if (progress > 25) Utils.showElement(Utils.getElement('behavior-item-1'));
      if (progress > 40) Utils.showElement(Utils.getElement('behavior-item-2'));
      if (progress > 55) Utils.showElement(Utils.getElement('behavior-item-3'));
      if (progress > 70) Utils.showElement(Utils.getElement('behavior-item-4'));

      // 顯示興趣標籤
      if (progress > 50) Utils.showElement(Utils.getElement('interest-tag-1'));
      if (progress > 60) Utils.showElement(Utils.getElement('interest-tag-2'));
      if (progress > 70) Utils.showElement(Utils.getElement('interest-tag-3'));
      if (progress > 80) Utils.showElement(Utils.getElement('interest-tag-4'));
      
      // 顯示分析框
      if (progress > 90) {
        Utils.showElement(Utils.getElement('analysis-box'));
      }
      break;
  }
}