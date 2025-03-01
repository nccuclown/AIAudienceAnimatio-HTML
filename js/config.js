// 配置文件
const Config = {
  // 顏色配置
  colors: {
    primary: "#ffbb00",
    secondary: "#ff8a00",
    accent: "#ff5500",
    blue: "#26c6da",
    lightBlue: "#00bcd4",
    background: "#0a0a10"
  },

  // 階段設定
  stages: [
    {
      id: 0,
      name: "消費者資料庫",
      title: "龐大的消費者資料庫",
      description: "AI Audience 從數百萬消費者輪廓開始，打造了一個龐大的資料庫。Predictive AI 讓我們預測每個人的潛在需求。通過分析用戶在不同平台的行為，我們能夠精準識別其消費模式、品牌偏好及興趣愛好。",
      techLabel: "Powered by Predictive AI"
    },
    {
      id: 1,
      name: "RAG知識庫建立",
      title: "提案與結案的RAG豐富化",
      description: "我們將過去的提案、結案與產業白皮書融入 AI Audience，用 RAG 技術豐富它的知識庫，讓它更專業、更懂市場與客戶。這種知識生成與檢索技術讓系統能夠理解複雜的產業背景和市場趨勢。",
      techLabel: "RAG - Retrieval-Augmented Generation"
    },
    {
      id: 2,
      name: "數據融合",
      title: "TNL MG Tag整合客戶數據",
      description: "透過獨特的 TNL MG Tag，我們整合客戶的第一方數據，讓 AI Audience 的資料庫更豐富、更貼近您的需求。TNL MG Tag搭建了一座從客戶數據到消費者資料庫的橋樑，確保分析結果直接關聯到您的業務目標。",
      techLabel: "Data Fusion with TNL MG Tag"
    },
    {
      id: 3,
      name: "精準受眾匹配",
      title: "精準受眾匹配",
      description: "在完整的內外數據支援下，AI Audience 能迅速找到最精準的受眾，無論您的產品是什麼。我們的AI引擎分析數百萬種可能組合，找出與您產品特性最匹配的受眾群體，最大化行銷投資回報。",
      techLabel: "AI Agent + Predictive AI"
    },
    {
      id: 4,
      name: "受眾分析報告",
      title: "完整受眾分析報告",
      description: "最後，AI Audience 為您生成一份完整的受眾分析報告，涵蓋性別、年齡、興趣與購買行為，幫助您做出最佳決策。這份深入的分析不僅提供受眾的基本特徵，更能洞察其消費動機和決策因素。",
      techLabel: "Generative AI"
    }
  ],

  // 時間線設定
  timeline: [
    // 第一階段: 消費者資料庫
    [
      { 
        name: "初始化資料基礎", 
        duration: 2000,
        description: "AI Audience 初始化消費者資料庫架構"
      },
      { 
        name: "載入消費者輪廓", 
        duration: 3000,
        description: "載入數百萬個消費者輪廓資料"
      },
      { 
        name: "建立消費者標籤", 
        duration: 3000,
        description: "為每個輪廓創建特性標籤"
      },
      { 
        name: "啟動預測模型", 
        duration: 2000,
        description: "Predictive AI 開始分析消費者潛在需求"
      }
    ],
    // 第二階段: RAG知識庫建立
    [
      { 
        name: "初始化 RAG 架構", 
        duration: 2000,
        description: "建立 Retrieval-Augmented Generation 基礎架構"
      },
      { 
        name: "整合產業資料", 
        duration: 3000,
        description: "匯入產業白皮書和專案資料"
      },
      { 
        name: "知識索引建立", 
        duration: 3000,
        description: "建立資料索引和關聯性網絡"
      },
      { 
        name: "知識優化完成", 
        duration: 2000,
        description: "優化知識結構確保快速檢索能力"
      }
    ],
    // 第三階段: 數據融合
    [
      { 
        name: "TNL MG Tag 初始化", 
        duration: 2000,
        description: "啟動專有的 TNL MG Tag 系統"
      },
      { 
        name: "客戶數據連接", 
        duration: 3000,
        description: "安全連接客戶第一方數據"
      },
      { 
        name: "資料清洗與標準化", 
        duration: 3000,
        description: "確保數據品質並轉換為標準格式"
      },
      { 
        name: "數據融合完成", 
        duration: 2000,
        description: "完成內外部數據的無縫整合"
      }
    ],
    // 第四階段: 精準受眾匹配
    [
      { 
        name: "需求分析", 
        duration: 2000,
        description: "分析客戶產品特性和需求"
      },
      { 
        name: "受眾細分", 
        duration: 3000,
        description: "依據匹配結果進行受眾細分"
      },
      { 
        name: "匹配結果優化", 
        duration: 2000,
        description: "最終優化匹配結果確保精準度"
      }
    ],
    // 第五階段: 受眾分析報告
    [
      { 
        name: "報告架構生成", 
        duration: 2000,
        description: "建立分析報告基本架構"
      },
      { 
        name: "人口統計分析", 
        duration: 3000,
        description: "處理性別、年齡等人口統計數據"
      },
      { 
        name: "行為偏好分析", 
        duration: 3000,
        description: "分析消費行為和品牌偏好"
      },
      { 
        name: "最終報告生成", 
        duration: 2000,
        description: "完成綜合受眾分析報告"
      }
    ]
  ],

  // 轉場訊息
  transitionMessages: [
    "消費者資料庫就緒，開始建立 RAG 知識庫...",
    "知識庫準備完成，進行數據融合...",
    "數據融合成功，開始受眾匹配流程...",
    "受眾匹配完成，生成分析報告...",
    "報告已完成，重新開始新的分析..."
  ],

  // HTML 模板
  templates: {
    // 階段模板
    stage: (stageId, title, description) => `
      <div class="stage" id="stage-${stageId}">
        <div class="stage-visual" id="stage-visual-${stageId}">
          <!-- 由特定階段的JavaScript生成 -->
        </div>
        <div class="stage-description">
          ${description}
        </div>
      </div>
    `,

    // 第一階段視覺區域
    stage1Visual: `
      <!-- 球體視覺效果 -->
      <div class="sphere-container">
        <div class="sphere" id="sphere"></div>
        <!-- 粒子 -->
        <div class="sphere-particle" style="top: 30%; left: 20%; background-color: #ffbb00; animation-delay: 0.2s;"></div>
        <div class="sphere-particle" style="top: 50%; left: 70%; background-color: #ff8a00; animation-delay: 0.5s;"></div>
        <div class="sphere-particle" style="top: 80%; left: 40%; background-color: #ff5500; animation-delay: 0.7s;"></div>
        <div class="sphere-particle" style="top: 20%; left: 60%; background-color: #26c6da; animation-delay: 0.3s;"></div>
        <div class="sphere-particle" style="top: 70%; left: 30%; background-color: #00bcd4; animation-delay: 0.1s;"></div>
        <div class="sphere-particle" style="top: 40%; left: 50%; background-color: #ffbb00; animation-delay: 0.6s; box-shadow: 0 0 10px #ffbb00;"></div>
      </div>

      <!-- 計數器 -->
      <div class="counter-box" id="counter-box">
        <div class="counter-value" id="counter-value">0</div>
        <div>消費者輪廓資料庫</div>
        <div style="font-size: 0.8rem; margin-top: 5px; color: #ff8a00;">收集標籤數: <span id="tag-count">0</span>+ 種</div>
      </div>

      <!-- 標籤容器 -->
      <div class="tag-container" id="tag-container">
        <div class="tag-title">消費者特性標籤</div>
        <div class="tags">
          <span class="tag" id="tag-1" style="border-color: #ffbb00;">搜尋廣告點擊</span>
          <span class="tag" id="tag-2" style="border-color: #ff8a00;">科技新聞閱讀</span>
          <span class="tag" id="tag-3" style="border-color: #26c6da;">線上購物頻率</span>
          <span class="tag" id="tag-4" style="border-color: #ff5500;">高消費族群</span>
          <span class="tag" id="tag-5" style="border-color: #00bcd4;">品牌忠誠度</span>
          <span class="tag" id="tag-6" style="border-color: #ffbb00;">社群互動高</span>
        </div>
      </div>

      <!-- 预测AI -->
      <div class="predictive-ai-box" id="predictive-ai-box">
        <div class="ai-title">
          <span class="ai-indicator"></span>
          Predictive AI 分析引擎
        </div>
        <div style="font-size: 0.9rem; margin-bottom: 8px;">
          預測用戶潛在需求與行為模式
        </div>
        <div class="accuracy-indicator" id="ai-accuracy">
          準確度: 87%
        </div>
      </div>
    `,

    // 第二階段視覺區域
    stage2Visual: `
      <!-- RAG標籤 -->
      <div class="rag-label" id="rag-label">RAG - Retrieval-Augmented Generation</div>

      <!-- 知識庫核心 -->
      <div class="knowledge-core" id="knowledge-core">
        <div class="core-ring" id="core-ring-1"></div>
        <div class="core-ring" id="core-ring-2"></div>
      </div>

      <!-- 知識點 -->
      <div class="knowledge-point" id="knowledge-point-1">
        <span style="color: #26c6da; margin-right: 5px;">✓</span>
        從1234篇產業專案中提取關鍵詞彙
      </div>
      <div class="knowledge-point" id="knowledge-point-2">
        <span style="color: #26c6da; margin-right: 5px;">✓</span>
        整合543份產業白皮書
      </div>
      <div class="knowledge-point" id="knowledge-point-3">
        <span style="color: #26c6da; margin-right: 5px;">✓</span>
        分析527個廣告投放數據
      </div>
      <div class="knowledge-point" id="knowledge-point-4">
        <span style="color: #26c6da; margin-right: 5px;">✓</span>
        學習372個成功提案
      </div>

      <!-- 文檔粒子 -->
      <div class="doc-particle" id="doc-particle-1" style="top: 30%; left: 60%; background-color: #ffbb00;"></div>
      <div class="doc-particle" id="doc-particle-2" style="top: 60%; left: 70%; background-color: #ff8a00;"></div>
      <div class="doc-particle" id="doc-particle-3" style="top: 20%; left: 40%; background-color: #26c6da;"></div>
      <div class="doc-particle" id="doc-particle-4" style="top: 50%; left: 30%; background-color: #ff5500;"></div>
      <div class="doc-particle" id="doc-particle-5" style="top: 70%; left: 50%; background-color: #ffbb00;"></div>
      
      <!-- 知識火箭 -->
      <div class="knowledge-rocket" id="knowledge-rocket"></div>

      <!-- 知识库优化 -->
      <div class="optimization-box" id="optimization-box">
        <div class="optimization-title">知識庫優化</div>
        <div class="optimization-item">
          <span class="optimization-dot" style="background-color: #26c6da;"></span>
          檢索速度: <span class="optimization-status" id="retrieval-speed">優化中...</span>
        </div>
        <div class="optimization-item">
          <span class="optimization-dot" style="background-color: #ff8a00;"></span>
          關聯網絡: <span class="optimization-status" id="relation-network">建立中...</span>
        </div>
        <div class="optimization-item">
          <span class="optimization-dot" style="background-color: #ff5500;"></span>
          準確度測試: <span class="optimization-status" id="accuracy-test">測試中...</span>
        </div>
      </div>
    `,

    // 第三階段視覺區域
    stage3Visual: `
      <!-- 數據融合容器 -->
      <div class="data-fusion-container">
        <!-- 客戶數據框 -->
        <div class="client-data-box" id="client-data-box">
          <div class="data-box-header" style="color: #ffbb00;">客戶第一方數據</div>
        </div>

        <!-- AI Audience 資料庫框 -->
        <div class="audience-data-box" id="audience-data-box">
          <div class="data-box-header" style="color: #26c6da;">AI Audience 資料庫</div>
        </div>

        <!-- TNL MG Tag -->
        <div class="tnl-tag" id="tnl-tag">
          TNL MG Tag
          <div class="tnl-ring"></div>
        </div>

        <!-- 數據粒子 - 左側 -->
        <div class="data-particle" id="data-particle-1" style="top: 30%; left: 20%; background-color: #ffbb00;"></div>
        <div class="data-particle" id="data-particle-2" style="top: 40%; left: 25%; background-color: #ff8a00;"></div>
        <div class="data-particle" id="data-particle-3" style="top: 35%; left: 30%; background-color: #26c6da;"></div>
        <div class="data-particle" id="data-particle-4" style="top: 45%; left: 15%; background-color: #ff5500;"></div>
        <div class="data-particle" id="data-particle-5" style="top: 50%; left: 35%; background-color: #ffbb00;"></div>

        <!-- 數據粒子 - 右側 -->
        <div class="data-particle" id="data-particle-6" style="top: 30%; right: 20%; background-color: #26c6da;"></div>
        <div class="data-particle" id="data-particle-7" style="top: 40%; right: 25%; background-color: #00bcd4;"></div>
        <div class="data-particle" id="data-particle-8" style="top: 35%; right: 30%; background-color: #ffbb00;"></div>
        <div class="data-particle" id="data-particle-9" style="top: 45%; right: 15%; background-color: #ff8a00;"></div>
        <div class="data-particle" id="data-particle-10" style="top: 50%; right: 35%; background-color: #26c6da;"></div>

        <!-- 数据流向箭头 - 左侧 -->
        <svg width="180" height="10" class="data-fusion-arrow" id="left-arrow" style="left: 32%; top: 45%;">
          <defs>
            <marker id="arrowhead-yellow" markerWidth="10" markerHeight="7" 
            refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#ffbb00"/>
            </marker>
          </defs>
          <line x1="0" y1="5" x2="170" y2="5" stroke="#ffbb00" 
          stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrowhead-yellow)" />
        </svg>

        <!-- 数据流向箭头 - 右侧 -->
        <svg width="180" height="10" class="data-fusion-arrow" id="right-arrow" style="right: 32%; top: 45%;">
          <defs>
            <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" 
            refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#26c6da"/>
            </marker>
          </defs>
          <line x1="0" y1="5" x2="170" y2="5" stroke="#26c6da" 
          stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrowhead-blue)" />
        </svg>

        <!-- 数据类型标签 - 左侧 -->
        <div class="data-type-label" id="type-label-1" style="left: 15%; top: 35%; color: #ffbb00; border-color: #ffbb00;">
          購買記錄
        </div>
        <div class="data-type-label" id="type-label-2" style="left: 20%; top: 45%; color: #ff8a00; border-color: #ff8a00;">
          瀏覽行為
        </div>
        <div class="data-type-label" id="type-label-3" style="left: 17%; top: 55%; color: #ff5500; border-color: #ff5500;">
          品牌偏好
        </div>

        <!-- 数据类型标签 - 右侧 -->
        <div class="data-type-label" id="type-label-4" style="right: 15%; top: 35%; color: #26c6da; border-color: #26c6da;">
          消費者特性
        </div>
        <div class="data-type-label" id="type-label-5" style="right: 20%; top: 45%; color: #00bcd4; border-color: #00bcd4;">
          行為標籤
        </div>

        <!-- 融合完成提示 -->
        <div class="fusion-complete-box" id="fusion-complete-box">
          <div class="fusion-title">
            <span class="pulsing-dot" style="background-color: #ffbb00;"></span>
            數據融合完成
          </div>
          <div id="data-increase-indicator" style="font-size: 0.9rem; text-align: center;">
            資料量增加: +<span id="data-increase-value">0</span>%
          </div>

          <div class="enhanced-tags" id="enhanced-tags">
            <div style="margin-bottom: 5px; color: #ffbb00;">增強標籤:</div>
            <div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center;">
              <span class="enhanced-tag">消費週期</span>
              <span class="enhanced-tag">決策流程</span>
              <span class="enhanced-tag">價格敏感度</span>
            </div>
          </div>
        </div>
      </div>
    `,

    // 第四階段視覺區域
    stage4Visual: `
      <!-- 匹配容器 -->
      <div class="matching-container">
        <!-- 球體粒子背景 -->
        <div style="position: absolute; width: 300px; height: 300px; border-radius: 50%; left: 50%; top: 40%; transform: translate(-50%, -50%);">
          <!-- 粒子 生成20个 -->
          <div class="sphere-particle" style="top: 30%; left: 20%; background-color: #ffbb00; animation-delay: 0.2s;"></div>
          <div class="sphere-particle" style="top: 50%; left: 70%; background-color: #ff8a00; animation-delay: 0.5s;"></div>
          <div class="sphere-particle" style="top: 80%; left: 40%; background-color: #ff5500; animation-delay: 0.7s;"></div>
          <div class="sphere-particle" style="top: 20%; left: 60%; background-color: #26c6da; animation-delay: 0.3s;"></div>
          <div class="sphere-particle" style="top: 70%; left: 30%; background-color: #00bcd4; animation-delay: 0.1s;"></div>
          <!-- 添加更多粒子... -->
        </div>

        <!-- 產品需求卡片 -->
        <div class="product-card" id="product-card">
          <h3 class="product-title">客戶產品需求</h3>
          <div style="font-weight: bold; margin-bottom: 10px;">新款高端智能手機</div>
          <div style="font-size: 0.8rem; color: #aaa; margin-bottom: 5px;">產品特性:</div>
          <div>
            <span class="feature-tag" id="feature-tag-1">AI相機</span>
            <span class="feature-tag" id="feature-tag-2">高續航</span>
            <span class="feature-tag" id="feature-tag-3">全面屏</span>
          </div>
          <div style="font-size: 0.8rem; color: #aaa; margin: 10px 0 5px;">目標受眾:</div>
          <div>
            <span class="audience-tag" id="audience-tag-1">科技愛好者</span>
            <span class="audience-tag" id="audience-tag-2">專業人士</span>
            <span class="audience-tag" id="audience-tag-3">高消費族群</span>
          </div>
        </div>

        <!-- 匹配波紋 -->
        <div class="match-ripple" id="match-ripple"></div>
        <div class="match-ripple-2" id="match-ripple-2"></div>

        <!-- 细分进度框 -->
        <div class="match-segment-box" id="match-segment-box">
          <div class="segment-title">細分受眾進行中</div>

          <div style="margin-bottom: 8px;">
            <div class="progress-label">
              <span>偏好匹配</span>
              <span id="preference-percentage">0%</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar" id="preference-bar" style="background-color: #26c6da;"></div>
            </div>
          </div>

          <div style="margin-bottom: 8px;">
            <div class="progress-label">
              <span>消費力評估</span>
              <span id="spending-percentage">0%</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar" id="spending-bar" style="background-color: #ff8a00;"></div>
            </div>
          </div>

          <div>
            <div class="progress-label">
              <span>行為模式分析</span>
              <span id="behavior-percentage">0%</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar" id="behavior-bar" style="background-color: #ffbb00;"></div>
            </div>
          </div>
        </div>

        <!-- 匹配結果 -->
        <div class="match-result" id="match-result">
          <div class="match-title">
            <span class="pulsing-dot" style="background-color: #ffbb00;"></span>
            科技迷 - 高消費力
          </div>
          <div style="font-size: 0.8rem; margin-bottom: 8px;">
            受眾規模: 1.2M
          </div>
          <div>
            <span class="trait-tag" id="trait-tag-1">科技愛好者</span>
            <span class="trait-tag" id="trait-tag-2">攝影愛好</span>
            <span class="trait-tag" id="trait-tag-3">科技新聞閱讀者</span>
            <span class="trait-tag" id="trait-tag-4">精準比對度: 93%</span>
          </div>

          <div class="secondary-audience" id="secondary-audience">
            <div style="margin-bottom: 5px; color: #26c6da;">次要受眾群組:</div>
            <div>新興科技早期採用者 (0.8M)</div>
          </div>
        </div>
      </div>
    `,

    // 第五階段視覺區域
    stage5Visual: `
      <!-- 報告容器 -->
      <div class="report-container" id="report-container">
        <div class="report-content">
          <div class="main-sections">
            <div class="left-column">
              <!-- 人口統計 -->
              <div class="report-section" id="demographics-section">
                <div class="section-title">人口統計</div>

                <div class="gender-chart">
                  <div class="chart-label">性別分布:</div>
                  <div class="gender-bar">
                    <div class="male-bar" id="male-bar">62%</div>
                    <div class="female-bar" id="female-bar">38%</div>
                  </div>
                  <div class="gender-labels" id="gender-labels">
                    <div>男性</div>
                    <div>女性</div>
                  </div>
                </div>

                <div class="age-chart">
                  <div class="chart-label">年齡分布:</div>
                  <div class="age-bars">
                    <div class="age-bar-container">
                      <div class="age-bar age-bar-1" id="age-bar-1"></div>
                      <div class="age-label">18-24</div>
                    </div>
                    <div class="age-bar-container">
                      <div class="age-bar age-bar-2" id="age-bar-2"></div>
                      <div class="age-label">25-34</div>
                    </div>
                    <div class="age-bar-container">
                      <div class="age-bar age-bar-3" id="age-bar-3"></div>
                      <div class="age-label">35-44</div>
                    </div>
                    <div class="age-bar-container">
                      <div class="age-bar age-bar-4" id="age-bar-4"></div>
                      <div class="age-label">45+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="right-column">
              <!-- 消費行為 -->
              <div class="report-section" id="behavior-section">
                <div class="section-title">消費行為</div>
                <div class="behavior-grid">
                  <div class="behavior-item" id="behavior-item-1">
                    <div class="behavior-label">平均消費</div>
                    <div class="behavior-value">$3,500</div>
                  </div>
                  <div class="behavior-item" id="behavior-item-2">
                    <div class="behavior-label">購買頻率</div>
                    <div class="behavior-value">每月1-2次</div>
                  </div>
                </div>

                <div class="section-title" style="margin-top: 10px;">常購買產品類型</div>
                <div class="interest-tags" style="margin-top: 5px;">
                  <div class="interest-tag" id="product-tag-1">智能手機</div>
                  <div class="interest-tag" id="product-tag-2">筆記型電腦</div>
                  <div class="interest-tag" id="product-tag-3">智能穿戴</div>
                  <div class="interest-tag" id="product-tag-4">攝影器材</div>
                  <div class="interest-tag" id="product-tag-5">音響設備</div>
                </div>
              </div>

              <!-- 興趣標籤 -->
              <div class="report-section" id="interest-section">
                <div class="section-title">興趣標籤</div>
                <div class="interest-tags">
                  <div class="interest-tag" id="interest-tag-1">科技</div>
                  <div class="interest-tag" id="interest-tag-2">攝影</div>
                  <div class="interest-tag" id="interest-tag-3">科技新聞</div>
                  <div class="interest-tag" id="interest-tag-4">早期採用者</div>
                </div>

                <div class="analysis-box" id="analysis-box">
                  <div class="analysis-title">匹配分析</div>
                  <div>此受眾群體對新科技產品有強烈興趣，願意為高端功能支付更多。使用自訂的AI技術行銷方案可提高轉化率預估38%。</div>
                </div>
              </div>

              <!-- 行銷建議 -->
              <div class="marketing-suggestions" id="marketing-suggestions">
                <div class="marketing-title">行銷建議</div>
                <ul class="suggestion-list">
                  <li class="suggestion-item" id="suggestion-item-1">強調產品的創新技術和AI能力</li>
                  <li class="suggestion-item" id="suggestion-item-2">提供專業使用案例和詳細規格</li>
                  <li class="suggestion-item" id="suggestion-item-3">使用科技影響者進行產品推廣</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="report-glow" id="report-glow"></div>
      </div>
    `
  },
  // 新增 stageContent 陣列，包含每個階段的視覺內容
  stageContent: [
    // 第一階段
    `
      <div class="stage-visual" id="stage1-visual"></div>
    `,
    // 第二階段
    `
      <div class="stage-visual" id="stage2-visual"></div>
    `,
    // 第三階段
    `
      <div class="stage-visual" id="stage3-visual"></div>
    `,
    // 第四階段
    `
      <div class="stage-visual" id="stage4-visual"></div>
    `,
    // 第五階段
    `
      <div class="stage-visual" id="stage5-visual"></div>
    `
  ]
};

// 改为默认导出
export default Config;