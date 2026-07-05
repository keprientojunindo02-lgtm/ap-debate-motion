const motionBank = [
    {
      category: "Economy",
      difficulty: "Intermediate",
      motion:
        `This House Would nationalise the healthcare industry in developing economies.`,
      note:
        `Efficiency and access vs. market-driven innovation and fiscal burden.`
    },
    {
      category: "Economy",
      difficulty: "Open",
      motion:
        `This House Believes That universal basic income should replace all other welfare programs.`,
      note:
        `Simplicity and dignity vs. targeted support for greater need.`
    },
    {
      category: "Economy",
      difficulty: "Novice",
      motion:
        `This House Would abolish tipping culture in the service industry.`,
      note:
        `Worker income stability vs. employer wage responsibility.`
    },
    {
      category: "Economy",
      difficulty: "Intermediate",
      motion:
        `This House Would impose a wealth tax on individuals worth over $50 million.`,
      note:
        `Redistribution and investment vs. capital flight risk.`
    },

    {
      category: "Social Policy",
      difficulty: "Novice",
      motion:
        `This House Would make voting mandatory for all eligible citizens.`,
      note:
        `Civic duty and legitimacy vs. freedom not to participate.`
    },
    {
      category: "Social Policy",
      difficulty: "Intermediate",
      motion:
        `This House Believes That platforms should be liable for user misinformation.`,
      note:
        `Platform accountability vs. free expression and enforcement.`
    },
    {
      category: "Social Policy",
      difficulty: "Novice",
      motion:
        `This House Would ban animals in scientific research.`,
      note:
        `Animal welfare vs. scientific and medical progress.`
    },
    {
      category: "Social Policy",
      difficulty: "Open",
      motion:
        `This House Believes That affirmative action does more harm than good long-term.`,
      note:
        `Historical redress vs. unintended stigma or inefficiency.`
    },

    {
      category: "Politics & Governance",
      difficulty: "Open",
      motion:
        `This House Would replace representative democracy with sortition for legislatures.`,
      note:
        `Representativeness vs. expertise and continuity.`
    },
    {
      category: "Politics & Governance",
      difficulty: "Novice",
      motion:
        `This House Believes That term limits should apply to all elected officials.`,
      note:
        `Fresh leadership vs. experience and voter choice.`
    },
    {
      category: "Politics & Governance",
      difficulty: "Intermediate",
      motion:
        `This House Would abolish the electoral college for a direct popular vote.`,
      note:
        `Majority legitimacy vs. protecting smaller regions.`
    },
    {
      category: "Politics & Governance",
      difficulty: "Open",
      motion:
        `This House Believes That political parties should be banned.`,
      note:
        `A hard motion — probe coordination without parties.`
    },

    {
      category: "International Relations",
      difficulty: "Intermediate",
      motion:
        `This House Would prioritise regional alliances over the UN.`,
      note:
        `Responsiveness vs. universal norms and legitimacy.`
    },
    {
      category: "International Relations",
      difficulty: "Intermediate",
      motion:
        `This House Believes That developed nations must accept climate refugees.`,
      note:
        `Emissions responsibility vs. sovereign immigration control.`
    },
    {
      category: "International Relations",
      difficulty: "Open",
      motion:
        `This House Woud sanction countries that miss climate commitments.`,
      note:
        `Enforcement vs. harm to ordinary citizens and sovereignty.`
    },
    {
      category: "International Relations",
      difficulty: "Novice",
      motion:
        `This house believes That small nations should form economic blocs.`,
      note:
        `Bargaining power vs. lost policy flexibility.`
    },

    {
      category: "Law & Justice",
      difficulty: "Intermediate",
      motion:
        `This House Would abolish juries for judge-only trials.`,
      note:
        `Consistency and expertise vs. community judgment.`
    },
    {
      category: "Law & Justice",
      difficulty: "Novice",
      motion:
        `This House Believes That prisons should focus only on rehabilitation.`,
      note:
        `Deterrence and retribution vs. reintegration.`
    },
    {
      category: "Law & Justice",
      difficulty: "Open",
      motion:
        `This House Would legalise all recreational drugs.`,
      note:
        `Harm reduction vs. normalization risk.`
    },
    {
      category: "Law & Justice",
      difficulty: "Intermediate",
      motion:
        `This House Believes That juveniles in serious crimes should be tried as adults.`,
      note:
        `Accountability vs. developmental science on youth.`
    },

    {
      category: "Environment",
      difficulty: "Intermediate",
      motion:
        `This House Would ban private car ownership in major cities.`,
      note:
        `Emissions reduction vs. mobility and disruption.`
    },
    {
      category: "Environment",
      difficulty: "Open",
      motion:
        `This House Believes That developed nations should fund most climate mitigation.`,
      note:
        `Historical responsibility vs. present-day fairness.`
    },
    {
      category: "Environment",
      difficulty: "Novice",
      motion:
        `This House Would ban single-use plastics globally.`,
      note:
        `Enviromental harm vs. affordability and access.`
    },
    {
      category: "Environment",
      difficulty: "Open",
      motion:
        `This House Believes That geoengineering should be pursued despite the risks.`,
      note:
        `Climate urgency vs. irreversible side effects.`
    },

    {
      category: "Technology & AI",
      difficulty: "Novice",
      motion:
        `This House Would require AI-generated content to be labelled by law.`,
      note:
        `Transparency vs. enforceability across platforms.`
    },
    {
      category: "Technology & AI",
      difficulty: "Intermediate",
      motion:
        `This House Believes That AI should be regulated as strictly as nuclear tech.`,
      note:
        `Catastrophic risk vs. slowing beneficial innovation.`
    },
    {
      category: "Technology & AI",
      difficulty: "Intermediate",
      motion:
        `This House Would ban facial recognition in public spaces.`,
      note:
        `Privacy and misuse risk vs. security utility.`
    },
    {
      category: "Technology & AI",
      difficulty: "Open",
      motion:
        `This House Believes That AI's benefits outweigh job displacement risks.`,
      note:
        `Productivity gains vs. near-term labour disruption.`
    },

    {
      category: "Education",
      difficulty: "Novice",
      motion:
        `This House would abolish standardised testing in secondary education.`,
      note:
        `Fairness and stress vs. objective comparability.`
    },
    {
      category: "Education",
      difficulty: "Intermediate",
      motion:
        `This House Believes That university education should be free for all.`,
      note:
        `Access and mobility vs. funding trade-offs.`
    },
    {
      category: "Education",
      difficulty: "Novice",
      motion:
        `This House Would make financial literacy mandatory in all schools.`,
      note:
        `Practical life skills vs. an already-crowded curriculum.`
    },
    {
      category: "Education",
      difficulty: "Open",
      motion:
        `This House Believes That grades do more harm than good to learning.`,
      note:
        `Motivation and mental health vs. accountability.`
    },
    {
      category: "Gender & Identity",
      difficulty: "Intermediate",
      motion:
        `This House Would implement mandatory gender quotas in corporate leadership.`,
      note:
        `Correcting imbalance vs. merit-based selection.`
    },
    {
      category: "Gender & Identity",
      difficulty: "Novice",
      motion:
        `This House Believes That beauty pageants should be banned.`,
      note:
        `Objectification concerns vs. participant autonomy.`
    },
    {
      category: "Gender & Identity",
      difficulty: "Open",
      motion:
        `This House Would allow transgender athletes to compete per gender identity.`,
      note:
        `A contested motion — engage fairness and inclusion seriously.`
    },
    {
      category: "Gender & Identity",
      difficulty: "Intermediate",
      motion:
        `This House Believes That paternity leave should equal maternity leave.`,
      note:
        `Gender equity at home vs. business cost and recovery needs.`
    }
];

const categories = [
  "Random",
  ...new Set(motionBank.map(m => m.category))
];
const difficulties = [
  "Any", "Novice", "Intermediate", "Open"
];

let selectedCategory = "Random";
let selectedDifficulty = "Any";
let counter = 0;
let lastMotionText = null;
const history = [];

const categoryChips = 
  document.getElementById('categoryChips');
const difficultyChips =
  document.getElementById('difficultyChips');
const generateBtn =
  document.getElementById('generateBtn');
const statusLine =
  document.getElementById('statusLine');
const cardStage = 
  document.getElementById('cardStage');
const docketList =
  document.getElementById('docketList');
const docketCount =
  document.getElementById('docketCount');

function buildChips(
  container, items, selectedGetter, onSelect
){
  container.innerHTML = '';
  items.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.type = 'button';
    btn.textContent = item;
    btn.setAttribute(
      'aria-pressed',
      String(item === selectedGetter())
    );
    btn.addEventListener('click', () => {
      onSelect(item);
      [...container.children].forEach(c => {
        c.setAttribute(
          'aria-pressed',
          String(c.textContent === item)
        );
      });
    });
    container.appendChild(btn);
  });
}

buildChips (
    categoryChips,
    categories,
    () => selectedCategory,
    (v) => selectedCategory = v
);
buildChips(
    difficultyChips,
    difficulties,
    () => selectedDifficulty,
    (v) => selectedDifficulty = v
);

function refNumber(n){
  return `AP-${String(n).padStart(4, '0')}`;
}

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function pickMotion(){
  let pool = motionBank;

  if (selectedCategory !== "Random"){
    pool = pool.filter(
      m => m.category === selectedCategory
    );
  }
  if (selectedDifficulty !== "Any"){
    pool = pool.filter(
      m => m.difficulty === selectedDifficulty 
    );
  }

  if (pool.length === 0) return null;

  let candidates = pool;
  if (pool.length > 1){
    candidates = pool.filter(
      m => m.motion !== lastMotionText
    );
  }

  const idx = Math.floor(
    Math.random() * candidates.length
  );
  return candidates[idx];
}

function renderCard(entry){
  cardStage.innerHTML = `
    <div class="motion-card">
      <div class="card-top">
        <span class="ref-no">
          MOTION NO. ${entry.ref}
        </span>
        <span class="cat-tag">
          ${escapeHtml(entry.category)}
        </span>
      </div>
      <p class="motion-text">
        ${escapeHtml(entry.motion)}
      </p>
      <div class="chairs-note">
        <b>Chair's note —</b>
        ${escapeHtml(entry.note)}
      </div>
    <div class="card-actions">
      <button class="ghost-btn" id="copyBtn">
        Copy motion
      </button>
    </div>
  </div>
`;
document.getElementById('copyBtn')
  .addEventListener('click', () => {
    navigator.clipboard
    .writeText(entry.motion)
    .then(() => {
      const btn =
        document.getElementById('copyBtn');
      const original = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(() => {
        btn.textContent = original;
      }, 1500);
    });
  });
}

function renderDocket(){
  if(history.length === 0){
    docketList.innerHTML = `
      <div class="docket-empty">
        Motions you draw will be logged here 
        for the length of this session.
      </div>
    `;
    docketCount.textContent = '0 motions drawn';
    return; 
  }
  docketCount.textContent = `${history.length} ${
    history.length === 1
      ? 'motion drawn'
      : 'motions drawn'
  }`;
  docketList.innerHTML = '';
  [...history].reverse().forEach(entry => {
    const row = document.createElement('button');
    row.className = 'docket-row';
    row.type = 'button';
    row.innerHTML = `
      <span class="docket-ref">
        ${entry.ref}
      </span>
      <span class="docket-cat">
        ${escapeHtml(entry.category)}
      </span>
      <span class="docket-motion">
        ${escapeHtml(entry.motion)}
      </span>
    `;
    row.addEventListener('click', () => {
      renderCard(entry);
    });
    docketList.appendChild(row);
  });
}

function drawMotion(){
  const picked = pickMotion();

  if (!picked){
    statusLine.classList.add('error');
    statusLine.textContent =
      'No motions match that combination.';
    return;
  }

  statusLine.classList.remove('error');
  counter = 1;
  lastMotionText = picked.motion;

  const entry = {
    ref: refNumber(counter),
    category: picked.category,
    motion: picked.motion,
    note: picked.note
  };

  history.push(entry);
  renderCard(entry);
  renderDocket();
  statusLine.textContent =
    `Motion No. ${entry.ref} is on the floor.`;
}

generateBtn.addEventListener(
  'click', drawMotion
);