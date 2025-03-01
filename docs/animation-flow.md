
# 動畫流程文檔

本文檔詳細說明了 AI Audience 智能受眾引擎中各階段的動畫流程，包括使用的元件、相對位置和出現時間。

## 第一階段：消費者資料庫

## 第二階段：RAG知識庫建立 (更新版)

### 動畫流程

1. **初始化 RAG 架構** (0-2000ms)
   - RAG標題和副標題淡入 (`rag-header`) - 頂部
   - 知識庫核心淡入 (`knowledge-core`) - 中央位置
   - 核心環開始旋轉 (`core-ring`) - 環繞核心，共3層

2. **整合產業資料** (2000-5000ms)
   - RAG工作流程顯示 (`rag-workflow`) - 中下部區域
   - 三大步驟框依次淡入 (`retrieval-box`, `augmentation-box`, `generation-box`)
   - 連接箭頭顯示 (`rag-workflow-arrow`) - 步驟框之間
   - 文檔粒子開始顯示 (`doc-particle`) - 分布在整個視覺區域
   - 數據統計框顯示 (`rag-stats`) - 右下角位置

3. **知識索引建立** (5000-8000ms)
   - 知識點標籤開始顯示 (`knowledge-tag`) - 分布在視覺區域周圍
   - 知識庫優化進度框顯示 (`rag-progress`) - 左下角位置
   - 進度條開始填充 (`progress-fill`) - 進度框內部

4. **知識優化完成** (8000-10000ms)
   - 所有進度條達到100% - 進度框內部
   - 核心脈動效果增強 (`corePulse` 動畫) - 知識庫核心

### 使用元件
- **RAG標題區域** (`rag-header`) - `css/stages/stage2.css` - 頂部
- **知識庫核心** (`knowledge-core`) - `css/stages/stage2.css` - 中央位置
- **核心環** (`core-ring`) - `css/stages/stage2.css` - 環繞核心
- **RAG工作流程** (`rag-workflow`) - `css/stages/stage2.css` - 中下部區域
- **步驟框** (`rag-step-box`) - `css/stages/stage2.css` - 工作流程內部
- **文檔粒子** (`doc-particle`) - `css/stages/stage2.css` - 分布在視覺區域
- **知識點標籤** (`knowledge-tag`) - `css/stages/stage2.css` - 分布在視覺區域周圍
- **數據統計框** (`rag-stats`) - `css/stages/stage2.css` - 右下角位置
- **知識庫優化進度框** (`rag-progress`) - `css/stages/stage2.css` - 左下角位置


### 動畫流程

1. **初始化資料基礎** (0-2000ms)
   - 主球體淡入 (`sphere`) - 中央位置
   - 背景粒子開始顯示 (`sphere-particle`) - 分布在球體周圍

2. **載入消費者輪廓** (2000-5000ms)
   - 計數器框淡入 (`counter-box`) - 左上角
   - 計數器數值開始增加 (`counter-value`) - 從0增加到數百萬
   - 球體開始脈動動畫 (`pulse` 動畫) - 中央位置

3. **建立消費者標籤** (5000-8000ms)
   - 標籤容器淡入 (`tag-container`) - 右上角
   - 標籤一個接一個顯示 (`tag`) - 每個標籤有短暫的延遲

4. **啟動預測模型** (8000-10000ms)
   - 預測AI框淡入 (`predictive-ai-box`) - 底部中央
   - AI指示器開始閃爍 (`ai-indicator` 和 `blink` 動畫)
   - 準確度指示器增加 (`ai-accuracy`) - 顯示最終準確度

### 使用元件
- **球體容器** (`sphere-container`) - `css/stages/stage1.css` - 中央位置
- **粒子元素** (`sphere-particle`) - `css/stages/stage1.css` - 分布在視覺區域內
- **計數器框** (`counter-box`) - `css/stages/stage1.css` - 左上角
- **標籤容器** (`tag-container`) - `css/stages/stage1.css` - 右上角
- **預測AI框** (`predictive-ai-box`) - `css/stages/stage1.css` - 底部中央

## 第二階段：RAG知識庫建立

### 動畫流程

1. **初始化 RAG 架構** (0-2000ms)
   - RAG標籤淡入 (`rag-label`) - 上方中央
   - 知識庫核心淡入 (`knowledge-core`) - 中央位置
   - 核心環開始旋轉 (`core-ring`) - 環繞核心

2. **整合產業資料** (2000-5000ms)
   - 知識點一個接一個淡入 (`knowledge-point`) - 環繞核心
   - 文檔粒子逐漸出現 (`doc-particle`) - 分布在視覺區域內

3. **知識索引建立** (5000-8000ms)
   - 知識庫優化框淡入 (`optimization-box`) - 底部中央
   - 優化項目顯示 (`optimization-item`) - 從上到下順序顯示

4. **知識優化完成** (8000-10000ms)
   - 優化狀態更新為完成 (`optimization-status`) - 所有項目顯示「完成」
   - 核心脈動效果增強 (`pulse` 動畫) - 中央位置核心發光

### 使用元件
- **RAG標籤** (`rag-label`) - `css/stages/stage2.css` - 頂部中央
- **知識庫核心** (`knowledge-core`) - `css/stages/stage2.css` - 中央位置
- **核心環** (`core-ring`) - `css/stages/stage2.css` - 環繞核心
- **知識點** (`knowledge-point`) - `css/stages/stage2.css` - 分布在核心周圍
- **文檔粒子** (`doc-particle`) - `css/stages/stage2.css` - 分布在視覺區域
- **知識庫優化框** (`optimization-box`) - `css/stages/stage2.css` - 底部中央

## 第三階段：數據融合

### 動畫流程

1. **TNL MG Tag 初始化** (0-2000ms)
   - 客戶數據框淡入 (`client-data-box`) - 左上區域
   - AI Audience 數據框淡入 (`audience-data-box`) - 右上區域
   - TNL MG Tag標籤淡入 (`tnl-tag`) - 中央位置

2. **客戶數據連接** (2000-5000ms)
   - 數據類型標籤淡入 (`data-type-label`) - 分布在兩側
   - 數據粒子開始顯示 (`data-particle`) - 分布在兩側數據框附近
   - 數據流向箭頭顯示 (`data-fusion-arrow`) - 連接兩側數據框

3. **資料清洗與標準化** (5000-8000ms)
   - 數據粒子開始向中央移動 (`data-particle` + `moveToCenter` 動畫)
   - 數據流向箭頭開始脈動 (`pulse-line` 動畫)

4. **數據融合完成** (8000-10000ms)
   - 融合完成框淡入 (`fusion-complete-box`) - 底部中央
   - 數據增加指示器顯示值增加 (`data-increase-value`)
   - 增強標籤淡入 (`enhanced-tags`) - 底部中央框內

### 使用元件
- **數據融合容器** (`data-fusion-container`) - `css/stages/stage3.css` - 整個視覺區域
- **客戶數據框** (`client-data-box`) - `css/stages/stage3.css` - 左上區域
- **AI Audience 數據框** (`audience-data-box`) - `css/stages/stage3.css` - 右上區域
- **TNL MG Tag** (`tnl-tag`) - `css/stages/stage3.css` - 中央位置
- **數據粒子** (`data-particle`) - `css/stages/stage3.css` - 分布在兩側
- **數據流向箭頭** (`data-fusion-arrow`) - `css/stages/stage3.css` - 連接兩側數據框
- **數據類型標籤** (`data-type-label`) - `css/stages/stage3.css` - 分布在兩側
- **融合完成框** (`fusion-complete-box`) - `css/stages/stage3.css` - 底部中央

## 第四階段：精準受眾匹配

### 動畫流程

1. **需求分析** (0-2000ms)
   - 產品卡片淡入 (`product-card`) - 左側
   - 產品特性標籤顯示 (`feature-tag`) - 卡片內部
   - 目標受眾標籤顯示 (`audience-tag`) - 卡片內部

2. **深度匹配** (2000-5000ms)
   - 匹配波紋開始顯示 (`match-ripple`) - 中央位置
   - 匹配條件框淡入 (`match-criteria`) - 分布在左側區域
   - 球體粒子動畫開始 (`sphere-particle`) - 分布在中央區域

3. **受眾細分** (5000-8000ms)
   - 匹配細分框淡入 (`match-segment-box`) - 上方中央
   - 進度條開始填充 (`progress-bar`) - 從左到右填充
   - 進度百分比更新 (`preference-percentage`, `spending-percentage`, `behavior-percentage`)

4. **匹配結果優化** (8000-10000ms)
   - 匹配結果框淡入 (`match-result`) - 右側
   - 特性標籤顯示 (`trait-tag`) - 結果框內部
   - 次要受眾群組淡入 (`secondary-audience`) - 結果框底部

### 使用元件
- **匹配容器** (`matching-container`) - `css/stages/stage4.css` - 整個視覺區域
- **球體粒子** (`sphere-particle`) - `css/stages/stage4.css` - 中央區域
- **產品卡片** (`product-card`) - `css/stages/stage4.css` - 左側
- **匹配波紋** (`match-ripple`) - `css/stages/stage4.css` - 中央位置
- **匹配條件** (`match-criteria`) - `css/stages/stage4.css` - 左側區域
- **匹配細分框** (`match-segment-box`) - `css/stages/stage4.css` - 上方中央
- **匹配結果** (`match-result`) - `css/stages/stage4.css` - 右側

## 第五階段：受眾分析報告

### 動畫流程

1. **報告架構生成** (0-2000ms)
   - 報告容器淡入 (`report-container`) - 中央位置
   - 報告標題顯示 (`report-title` 和 `report-subtitle`) - 容器頂部
   - 報告發光效果開始 (`report-glow`) - 容器周圍

2. **人口統計分析** (2000-5000ms)
   - 人口統計區塊淡入 (`demographics-section`) - 容器上部
   - 性別分布條動態填充 (`gender-bar`) - 從左到右
   - 年齡分布條動態增長 (`age-bar`) - 從下到上

3. **行為偏好分析** (5000-8000ms)
   - 消費行為區塊淡入 (`behavior-section`) - 容器中部
   - 行為項目逐個顯示 (`behavior-item`) - 從左到右，從上到下
   - 興趣標籤區塊淡入 (`interest-section`) - 容器中下部
   - 興趣標籤逐個顯示 (`interest-tag`) - 從左到右
   - 匹配分析框淡入 (`analysis-box`) - 區塊底部

4. **最終報告生成** (8000-10000ms)
   - 行銷建議區塊淡入 (`marketing-suggestions`) - 容器底部
   - 建議項目逐個顯示 (`suggestion-item`) - 從上到下
   - 報告發光效果加強 (`pulse` 動畫) - 容器周圍

### 使用元件
- **報告容器** (`report-container`) - `css/stages/stage5.css` - 中央位置
- **人口統計區塊** (`demographics-section`) - `css/stages/stage5.css` - 容器上部
- **性別分布圖** (`gender-chart` 和 `gender-bar`) - `css/stages/stage5.css` - 區塊內部
- **年齡分布圖** (`age-chart` 和 `age-bar`) - `css/stages/stage5.css` - 區塊內部
- **消費行為區塊** (`behavior-section`) - `css/stages/stage5.css` - 容器中部
- **行為項目** (`behavior-item`) - `css/stages/stage5.css` - 區塊內部
- **興趣標籤區塊** (`interest-section`) - `css/stages/stage5.css` - 容器中下部
- **興趣標籤** (`interest-tag`) - `css/stages/stage5.css` - 區塊內部
- **匹配分析框** (`analysis-box`) - `css/stages/stage5.css` - 區塊底部
- **行銷建議區塊** (`marketing-suggestions`) - `css/stages/stage5.css` - 容器底部
- **建議項目** (`suggestion-item`) - `css/stages/stage5.css` - 區塊內部

## 動畫模組

所有階段的動畫效果由以下模組提供支持：

### 核心動畫模組
- **animations.css** (`css/animations.css`) - 定義全局動畫關鍵幀
  - `pulse` - 元素尺寸脈動效果
  - `float` - 元素上下浮動效果
  - `ripple` - 波紋擴散效果
  - `rotate` - 元素旋轉效果
  - `fade` 系列 - 元素淡入淡出效果
  - `moveToCenter` - 元素向中心移動效果
  - `blink` - 元素閃爍效果
  - `expandWidth` 和 `expandHeight` - 元素尺寸擴展效果

### 階段控制模組
- **core.js** (`js/core.js`) - 管理動畫流程和階段轉換
  - `switchToStage` - 處理階段切換
  - `startStageAnimation` - 開始階段動畫
  - `playAllStepsInSequence` - 按順序播放階段內的所有步驟
  - `triggerStepAnimation` - 觸發步驟動畫
  - `triggerProgressBasedAnimations` - 根據進度觸發動畫

### 階段特定模組
- **stageX.js** (`js/stages/stageX.js`, X=1-5) - 控制特定階段的動畫邏輯
  - `handleStepStart` - 處理步驟開始時的動畫
  - `handleProgress` - 處理進度變化時的動畫
  - `resetElements` - 重置元素狀態
