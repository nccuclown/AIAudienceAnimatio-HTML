
# 開發者指南

## 項目結構

```
├── css/                   # 樣式文件
│   ├── stages/            # 階段特定樣式
│   ├── animations.css     # 動畫效果
│   └── base.css           # 基礎樣式
├── js/                    # JavaScript 文件
│   ├── stages/            # 階段特定腳本
│   ├── config.js          # 配置參數
│   ├── core.js            # 核心控制器
│   └── utils.js           # 工具函數
├── src/                   # React 源代碼
│   ├── App.jsx            # 主應用組件
│   ├── App.css            # 應用樣式
│   └── index.jsx          # 入口文件
├── index.html             # 主 HTML 文件
├── vite.config.js         # Vite 配置
└── package.json           # 項目依賴
```

## 開發環境設置

1. 克隆項目：
   ```bash
   git clone <repository-url>
   ```

2. 安裝依賴：
   ```bash
   npm install
   ```

3. 啟動開發服務器：
   ```bash
   npm run dev
   ```

## 主要文件說明

### 配置文件 (js/config.js)

`config.js` 包含應用程序的主要配置：
- 顏色方案和主題設置
- 階段定義和描述
- 時間線和步驟配置

修改此文件可以調整應用程序的內容和行為，如添加新階段或修改現有階段的描述。

### 核心控制器 (js/core.js)

`core.js` 是應用程序的主要控制器，負責：
- 初始化應用程序
- 管理階段轉換
- 控制時間線和步驟進度
- 更新視覺元素和動畫

### 階段特定腳本 (js/stages/)

每個階段都有專門的 JavaScript 文件，負責該階段的特定視覺和交互行為：
- 初始化階段視覺元素
- 處理階段內步驟和進度
- 管理特定動畫和效果

### 樣式文件 (css/)

- `base.css` - 定義全局樣式和布局
- `animations.css` - 包含所有動畫定義
- `stages/*.css` - 包含每個階段的特定樣式

## 擴展指南

### 添加新階段

1. 在 `config.js` 中添加新階段定義
2. 創建新的階段特定 CSS 文件
3. M創建新的階段特定 JavaScript 文件
4. 在 `index.html` 中引用新文件
5. 在 `core.js` 中注冊新階段

### 修改視覺效果

1. 調整相關 CSS 文件中的樣式規則
2. 更新 `config.js` 中的顏色配置
3. 修改相應階段的視覺元素 HTML 結構

### 調整時間線

修改 `config.js` 中的時間線配置：
- 添加或調整步驟
- 更改步驟持續時間
- 更新步驟描述

## 部署指南

### 構建生產版本

```bash
npm run build
```

構建後的文件將位於 `dist` 目錄。

### 在 Replit 上部署

項目已配置為在 Replit 上自動部署：
- 使用 `npm run build` 命令構建項目
- 使用 `dist` 作為靜態部署目錄
- 可通過 Replit 的部署功能一鍵部署

### 監控和維護

- 檢查部署日誌了解可能的問題
- 定期更新依賴以確保安全和穩定性
- 使用 Replit 的工具監控應用程序性能
