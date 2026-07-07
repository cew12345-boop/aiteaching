const STORAGE_KEY = "aiTeachingQuestProgress";

const levels = [
  {
    id: 1,
    file: "level1.html",
    title: "指引星圖站",
    short: "七章核心導航",
    treasure: "星圖晶片",
    icon: "01",
    summary: "掌握指引七個章節的任務位置，先看懂全書地圖。",
    type: "match",
    objective: "把七個章節概念與最貼近的教師行動配對。",
    prompt: "請依據「中小學教師數位與 AI 教學指引」的閱讀邏輯，點選左側章節，再點右側最適合的行動說明。",
    pairs: [
      ["願景與趨勢", "理解 AI 對學校教育的影響，建立不逃避也不盲從的共識。"],
      ["教學設計", "從學習目標出發，安排 AI 支援閱讀、討論、共創與發表。"],
      ["備課與教材", "用 AI 生成初稿、題目、差異化素材，再由教師判斷修正。"],
      ["評量與回饋", "運用 AI 協助形成性回饋，但保留教師的專業判斷。"],
      ["倫理與安全", "處理個資、偏誤、著作權、幻覺與學生依賴等風險。"],
      ["AI 素養框架", "培養學生理解、使用、評估與負責任創造 AI 的能力。"],
      ["數位學習平台", "善用平台資料、任務、診斷與學習歷程支持教學決策。"]
    ],
    insight: "指引不是工具清單，而是幫教師把 AI 放回教學目標、學生需求與安全治理之中。"
  },
  {
    id: 2,
    file: "level2.html",
    title: "AI 備課工坊",
    short: "提示詞鍛造",
    treasure: "提示詞引擎",
    icon: "02",
    summary: "學會把 AI 當成備課助理，而不是把教學判斷交出去。",
    type: "select",
    objective: "挑出一個高品質教師提示詞必備的五個零件。",
    prompt: "任務：你要請 AI 協助設計一節國小高年級「AI 與資訊判讀」課。請選出最應放進提示詞的五項資訊。",
    required: ["教學年段與學生先備經驗", "明確學習目標", "課堂時間與活動流程限制", "評量方式與成功標準", "要求產出可修改的草案並標示假設"],
    options: [
      ["教學年段與學生先備經驗", "讓 AI 產出符合學生程度的內容。"],
      ["明確學習目標", "避免只做漂亮活動，卻沒有學習焦點。"],
      ["課堂時間與活動流程限制", "讓建議能放進真實課表。"],
      ["評量方式與成功標準", "讓任務能被觀察與回饋。"],
      ["要求產出可修改的草案並標示假設", "提醒教師保留審稿與調整權。"],
      ["請 AI 直接產生不可更動的完整教案", "這會削弱教師專業判斷。"],
      ["不提供學生程度，只要求越創新越好", "容易產生不合現場的設計。"],
      ["要求 AI 保證資料完全正確", "AI 無法保證，仍需要查證。"]
    ],
    insight: "好的提示詞不是咒語，而是把「學生、目標、限制、評量、教師判斷」說清楚。"
  },
  {
    id: 3,
    file: "level3.html",
    title: "課堂應用模擬艙",
    short: "教師學生進階三路線",
    treasure: "協作光盾",
    icon: "03",
    summary: "把 AI 放進課堂活動，讓學生思考、表達與修正，而不是只拿答案。",
    type: "scenario",
    objective: "依序選出教師版、學生版、進階版的課堂應用做法。",
    prompt: "情境：閱讀課要讓學生比較兩篇網路文章可信度。請為三種層次選出最合適做法。",
    scenarios: [
      {
        label: "教師版",
        answer: "教師先用 AI 產生文章比較表與引導問題，再自行查核來源並調整難度。",
        options: [
          "教師先用 AI 產生文章比較表與引導問題，再自行查核來源並調整難度。",
          "教師把兩篇文章貼給 AI，直接採用 AI 的可信度判斷。",
          "教師只示範工具功能，不安排閱讀任務。"
        ]
      },
      {
        label: "學生版",
        answer: "學生用 AI 協助整理觀點，但必須回到原文標註證據並說明判斷理由。",
        options: [
          "學生用 AI 協助整理觀點，但必須回到原文標註證據並說明判斷理由。",
          "學生把題目丟給 AI，複製最佳答案交作業。",
          "學生不能接觸 AI，只能聽教師講解。"
        ]
      },
      {
        label: "進階版",
        answer: "小組比較 AI 回答與原文證據差異，整理成「可信資訊檢核規準」。",
        options: [
          "小組比較 AI 回答與原文證據差異，整理成「可信資訊檢核規準」。",
          "小組比賽誰讓 AI 寫得最快。",
          "小組只美化簡報，不討論資訊判讀。"
        ]
      }
    ],
    insight: "AI 課堂應用的重點是讓學生多一層思考，而不是少一段學習。"
  },
  {
    id: 4,
    file: "level4.html",
    title: "風險雷達室",
    short: "倫理安全偵測",
    treasure: "安全核心",
    icon: "04",
    summary: "辨識 AI 教學常見風險，建立可落地的注意事項。",
    type: "classify",
    objective: "把風險卡放到正確的防護分類。",
    prompt: "點選一張風險卡，再點選它最適合的防護分類。",
    categories: ["個資保護", "內容查證", "公平偏誤", "著作權", "學習依賴", "透明告知"],
    cards: [
      ["上傳學生姓名、照片與學習弱點給陌生 AI 服務", "個資保護"],
      ["AI 產生的歷史資料未查證就放進講義", "內容查證"],
      ["AI 對不同族群或性別給出刻板印象建議", "公平偏誤"],
      ["直接把受版權保護文章大量丟入工具改寫出版", "著作權"],
      ["學生只貼上 AI 答案，沒有理解與修正歷程", "學習依賴"],
      ["課程使用 AI 生成素材，卻完全沒有向學生說明", "透明告知"]
    ],
    insight: "AI 安全不是禁止使用，而是讓使用方式可說明、可查核、可負責。"
  },
  {
    id: 5,
    file: "level5.html",
    title: "AI 素養框架塔",
    short: "理解使用評估創造",
    treasure: "素養稜鏡",
    icon: "05",
    summary: "把 AI 素養拆成學生能練習的能力，而不是只會操作工具。",
    type: "match",
    objective: "將 AI 素養能力與課堂可觀察行為配對。",
    prompt: "請把每個 AI 素養面向，配對到最能觀察學生是否具備該能力的行為。",
    pairs: [
      ["理解 AI", "能說出 AI 可能依資料模式產生回答，不等於真正理解世界。"],
      ["有效使用 AI", "能寫出包含角色、目標、限制與輸出格式的提示詞。"],
      ["評估 AI", "能比對 AI 回答、原始資料與同儕觀點，找出需要修正處。"],
      ["負責任創造", "能標示 AI 協助內容，並處理引用、隱私與偏誤問題。"],
      ["人機協作", "能說明哪些部分交給 AI，哪些部分必須由人判斷。"]
    ],
    insight: "AI 素養的終點不是會問，而是能判斷、能合作、能負責。"
  },
  {
    id: 6,
    file: "level6.html",
    title: "數位平台指揮艙",
    short: "平台 AI 教學流程",
    treasure: "平台方舟",
    icon: "06",
    summary: "把數位學習平台資料轉化成教學決策與下一步支持。",
    type: "sequence",
    objective: "排出一個合理的數位平台 AI 教學流程。",
    prompt: "情境：老師使用數位學習平台的 AI 診斷與任務推薦功能。請把流程排成可執行順序。",
    sequence: [
      "確認學習目標與本節課要觀察的能力",
      "指派平台任務並蒐集學生作答與學習歷程",
      "閱讀 AI 診斷結果，找出共通迷思與個別需求",
      "設計分組補救、延伸挑戰與教師巡迴提問",
      "讓學生檢視回饋並修正作品或解題策略",
      "保存證據，回到教學目標檢討下一輪設計"
    ],
    insight: "平台資料的價值不在分數本身，而在幫教師做下一個更準的教學決定。"
  }
];

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { completed: [] };
  } catch {
    return { completed: [] };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function isCompleted(id) {
  return loadProgress().completed.includes(Number(id));
}

function completeLevel(id) {
  const progress = loadProgress();
  const numericId = Number(id);
  if (!progress.completed.includes(numericId)) {
    progress.completed.push(numericId);
    progress.completed.sort((a, b) => a - b);
    saveProgress(progress);
  }
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderHome() {
  const progress = loadProgress();
  const left = document.querySelector("[data-missions-left]");
  const right = document.querySelector("[data-missions-right]");
  const gems = document.querySelector("[data-gems]");
  const door = document.querySelector("[data-door]");
  if (!left || !right || !gems || !door) return;

  const cards = levels.map((level) => {
    const done = progress.completed.includes(level.id);
    return `
      <a class="mission-card" href="${level.file}" aria-label="進入${level.title}">
        <div class="mission-index">${level.icon}</div>
        <div>
          <h2>${level.title}</h2>
          <p>${level.short}｜${level.summary}</p>
        </div>
        <div class="treasure-badge ${done ? "done" : ""}" title="${done ? "已取得" : "尚未取得"}">${done ? "◆" : "◇"}</div>
      </a>
    `;
  });

  left.innerHTML = cards.slice(0, 3).join("");
  right.innerHTML = cards.slice(3).join("");
  gems.innerHTML = levels.map((level) => `<span class="mini-gem ${progress.completed.includes(level.id) ? "done" : ""}">${level.id}</span>`).join("");

  const unlocked = progress.completed.length >= levels.length;
  door.classList.toggle("unlocked", unlocked);
  door.textContent = unlocked ? "解開封印" : `${progress.completed.length}/6`;
  door.disabled = !unlocked;
  door.addEventListener("click", () => {
    if (unlocked) {
      document.querySelector("#certificateModal").showModal();
      drawCertificate();
    }
  });

  const reset = document.querySelector("[data-reset]");
  reset?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });

  const nameInput = document.querySelector("#teacherName");
  nameInput?.addEventListener("input", drawCertificate);
  document.querySelector("[data-download-certificate]")?.addEventListener("click", downloadCertificate);
}

function getLevelFromPage() {
  const id = Number(document.body.dataset.level);
  return levels.find((level) => level.id === id);
}

function renderLevel() {
  const level = getLevelFromPage();
  if (!level) return;

  document.title = `${level.title}｜AI 教學封印任務`;
  document.querySelector("[data-level-kicker]").textContent = `LEVEL ${level.icon}｜${level.short}`;
  document.querySelector("[data-level-title]").textContent = level.title;
  document.querySelector("[data-level-summary]").textContent = level.summary;
  document.querySelector("[data-level-objective]").textContent = level.objective;
  document.querySelector("[data-level-prompt]").textContent = level.prompt;
  document.querySelector("[data-reward]").textContent = level.icon;
  document.querySelector("[data-reward-name]").textContent = level.treasure;

  const mount = document.querySelector("[data-task]");
  if (level.type === "match") renderMatch(level, mount);
  if (level.type === "select") renderSelect(level, mount);
  if (level.type === "scenario") renderScenario(level, mount);
  if (level.type === "classify") renderClassify(level, mount);
  if (level.type === "sequence") renderSequence(level, mount);

  const complete = document.querySelector("[data-complete]");
  complete.addEventListener("click", () => validateLevel(level));
  if (isCompleted(level.id)) {
    setFeedback(`你已取得「${level.treasure}」。可以重玩，也可以回首頁查看封印門。`, "good");
  }
}

function renderMatch(level, mount) {
  const rightItems = shuffle(level.pairs.map((pair) => pair[1]));
  mount.innerHTML = `
    <div class="task-grid">
      <section class="panel">
        <h3>章節概念</h3>
        <div class="bank" data-bank>
          ${level.pairs.map((pair, index) => `<button class="bank-card" data-card="${index}">${pair[0]}</button>`).join("")}
        </div>
      </section>
      <section class="panel">
        <h3>教師行動</h3>
        <div class="drop-list">
          ${rightItems.map((item, index) => `
            <div class="drop-row">
              <div class="drop-label">${item}</div>
              <button class="drop-zone" data-zone="${index}" data-answer="${item}">點此放入章節概念</button>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
  setupClickMatching(level);
}

function setupClickMatching(level) {
  let selected = null;
  document.querySelectorAll("[data-card]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("used")) return;
      selected = button;
      document.querySelectorAll("[data-card]").forEach((card) => card.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
  document.querySelectorAll("[data-zone]").forEach((zone) => {
    zone.addEventListener("click", () => {
      if (!selected) return;
      if (zone.dataset.card) {
        document.querySelector(`[data-card="${zone.dataset.card}"]`)?.classList.remove("used");
      }
      const pair = level.pairs[Number(selected.dataset.card)];
      zone.textContent = pair[0];
      zone.dataset.value = pair[0];
      zone.dataset.card = selected.dataset.card;
      zone.classList.add("filled");
      selected.classList.add("used");
      selected.classList.remove("selected");
      selected = null;
    });
  });
}

function renderSelect(level, mount) {
  mount.innerHTML = `
    <section class="panel">
      <div class="choice-grid">
        ${shuffle(level.options).map(([title, detail]) => `
          <button class="choice" data-choice="${title}">
            <strong>${title}</strong>
            <span>${detail}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
  document.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => button.classList.toggle("selected"));
  });
}

function renderScenario(level, mount) {
  mount.innerHTML = `
    <div class="task-grid">
      ${level.scenarios.map((scenario, index) => `
        <section class="panel">
          <h3>${scenario.label}</h3>
          <div class="choice-grid">
            ${shuffle(scenario.options).map((option) => `
              <button class="choice" data-scenario="${index}" data-choice="${option}">
                <strong>${option}</strong>
              </button>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  `;
  document.querySelectorAll("[data-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(`[data-scenario="${button.dataset.scenario}"]`).forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
}

function renderClassify(level, mount) {
  mount.innerHTML = `
    <div class="task-grid">
      <section class="panel">
        <h3>風險卡</h3>
        <div class="bank">
          ${shuffle(level.cards).map(([text, category], index) => `<button class="bank-card" data-risk="${index}" data-category="${category}">${text}</button>`).join("")}
        </div>
      </section>
      <section class="panel">
        <h3>防護分類</h3>
        <div class="drop-list">
          ${level.categories.map((category) => `
            <div class="drop-row">
              <div class="drop-label">${category}</div>
              <button class="drop-zone" data-category-zone="${category}">點此放入風險卡</button>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
  let selected = null;
  document.querySelectorAll("[data-risk]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("used")) return;
      selected = button;
      document.querySelectorAll("[data-risk]").forEach((card) => card.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
  document.querySelectorAll("[data-category-zone]").forEach((zone) => {
    zone.addEventListener("click", () => {
      if (!selected) return;
      if (zone.dataset.risk) {
        document.querySelector(`[data-risk="${zone.dataset.risk}"]`)?.classList.remove("used");
      }
      zone.textContent = selected.textContent;
      zone.dataset.value = selected.dataset.category;
      zone.dataset.risk = selected.dataset.risk;
      zone.classList.add("filled");
      selected.classList.add("used");
      selected.classList.remove("selected");
      selected = null;
    });
  });
}

function renderSequence(level, mount) {
  mount.innerHTML = `
    <section class="panel">
      <div class="sequence">
        ${shuffle(level.sequence).map((item, index) => `
          <div class="sequence-item" data-seq-item>
            <span class="seq-num">${index + 1}</span>
            <span>${item}</span>
            <button class="btn ghost" data-up>上移</button>
            <button class="btn ghost" data-down>下移</button>
          </div>
        `).join("")}
      </div>
    </section>
  `;
  document.querySelectorAll("[data-up]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest("[data-seq-item]");
      item.previousElementSibling?.before(item);
      refreshSequenceNumbers();
    });
  });
  document.querySelectorAll("[data-down]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest("[data-seq-item]");
      item.nextElementSibling?.after(item);
      refreshSequenceNumbers();
    });
  });
}

function refreshSequenceNumbers() {
  document.querySelectorAll(".seq-num").forEach((num, index) => {
    num.textContent = index + 1;
  });
}

function validateLevel(level) {
  let ok = false;
  if (level.type === "match") {
    ok = [...document.querySelectorAll("[data-zone]")].every((zone) => {
      const chosen = zone.dataset.value;
      const action = zone.dataset.answer;
      return level.pairs.some(([left, right]) => left === chosen && right === action);
    });
  }
  if (level.type === "select") {
    const selected = [...document.querySelectorAll(".choice.selected")].map((button) => button.dataset.choice);
    ok = selected.length === level.required.length && level.required.every((item) => selected.includes(item));
  }
  if (level.type === "scenario") {
    ok = level.scenarios.every((scenario, index) => {
      const selected = document.querySelector(`[data-scenario="${index}"].selected`);
      return selected?.dataset.choice === scenario.answer;
    });
  }
  if (level.type === "classify") {
    ok = [...document.querySelectorAll("[data-category-zone]")].every((zone) => zone.dataset.value === zone.dataset.categoryZone);
  }
  if (level.type === "sequence") {
    const current = [...document.querySelectorAll("[data-seq-item] span:nth-child(2)")].map((item) => item.textContent);
    ok = current.every((item, index) => item === level.sequence[index]);
  }

  if (ok) {
    completeLevel(level.id);
    setFeedback(`任務完成，取得「${level.treasure}」。${level.insight}`, "good");
    document.querySelector("[data-complete]").textContent = "已取得寶物";
  } else {
    setFeedback("封印還沒有鬆動。請再檢查一次：你的答案是否同時符合學習目標、教師判斷與安全使用？", "warn");
  }
}

function setFeedback(message, type = "") {
  const feedback = document.querySelector("[data-feedback]");
  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
}

function drawCertificate() {
  const canvas = document.querySelector("#certificateCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const name = document.querySelector("#teacherName")?.value.trim() || "完成任務的教師";
  canvas.width = 1400;
  canvas.height = 980;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#07111f");
  gradient.addColorStop(0.48, "#123252");
  gradient.addColorStop(1, "#2a1905");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#42d8ff";
  ctx.lineWidth = 10;
  ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);
  ctx.strokeStyle = "#ffbf55";
  ctx.lineWidth = 4;
  ctx.strokeRect(92, 92, canvas.width - 184, canvas.height - 184);

  ctx.fillStyle = "rgba(66,216,255,0.12)";
  for (let i = 0; i < 9; i += 1) {
    ctx.beginPath();
    ctx.arc(700, 430, 130 + i * 32, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(66,216,255,${0.2 - i * 0.016})`;
    ctx.stroke();
  }

  ctx.fillStyle = "#eef8ff";
  ctx.textAlign = "center";
  ctx.font = "700 58px PingFang TC, sans-serif";
  ctx.fillText("中小學教師數位與 AI 教學指引", 700, 205);
  ctx.font = "900 76px PingFang TC, sans-serif";
  ctx.fillText("AI 教學封印任務完成證書", 700, 310);

  ctx.fillStyle = "#ffdf95";
  ctx.font = "900 82px PingFang TC, sans-serif";
  ctx.fillText(name, 700, 470);

  ctx.fillStyle = "#d4e7f3";
  ctx.font = "38px PingFang TC, sans-serif";
  ctx.fillText("已完成六大關卡：指引理解、AI 備課、課堂應用、倫理安全、AI 素養與數位平台教學。", 700, 580);
  ctx.fillText("願以務實、負責、以學生學習為中心的方式推動 AI 教育。", 700, 640);

  ctx.fillStyle = "#42d8ff";
  ctx.font = "700 34px PingFang TC, sans-serif";
  ctx.fillText(`完成日期：${new Date().toLocaleDateString("zh-TW")}`, 700, 765);
  ctx.fillStyle = "#ffbf55";
  ctx.font = "900 48px PingFang TC, sans-serif";
  ctx.fillText("AI SEAL UNLOCKED", 700, 860);
}

function downloadCertificate() {
  drawCertificate();
  const canvas = document.querySelector("#certificateCanvas");
  const link = document.createElement("a");
  link.download = "AI教學封印任務完成證書.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderLevel();
});
