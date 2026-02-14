const firstNames = [
  "Alex", "Morgan", "Jordan", "Taylor", "Casey", "Riley", "Avery", "Emerson", "Reese", "Quinn",
  "Harper", "Sam", "Jamie", "Parker", "Elliot", "Drew", "Cameron", "Rowan", "Sawyer", "Skyler"
];

const lastNames = [
  "Rivera", "Ellison", "Patel", "Hughes", "Nakamura", "Okafor", "Chambers", "Diaz", "Novak", "Ibrahim",
  "Kensington", "Osei", "Thompson", "Levin", "Watanabe", "Abiola", "Mendoza", "Cohen", "Ortiz", "Rossi"
];

const offices = [
  "Mayor", "State Senator", "Governor", "City Council", "Representative", "Public Advocate",
  "School Board", "County Commissioner", "Lieutenant Governor", "Secretary of State"
];

const geographies = [
  "Lakeshore", "Cedar Valley", "North Plains", "Summit County", "Capital District", "Blue Ridge",
  "Redwood Coast", "Pinecrest", "Silver River", "Sunset Bay", "Maple County", "Twin Rivers", "Golden Prairie"
];

const parties = [
  "Forward Coalition", "Civic Future", "Unity Alliance", "Independent", "Community First", "Renewal Party"
];

const issuePool = [
  "Expanding broadband and digital equity initiatives.",
  "Protecting local ecosystems with climate resilience plans.",
  "Strengthening small business relief and innovation grants.",
  "Improving public transit frequency and electrification.",
  "Creating apprenticeship pipelines for green jobs.",
  "Investing in affordable housing near transit corridors.",
  "Establishing transparent budgeting dashboards for residents.",
  "Modernizing voting access with secure paper backups.",
  "Launching mental health crisis response teams.",
  "Guaranteeing paid family leave for municipal workers.",
  "Expanding after-school STEM programs in every district.",
  "Partnering with libraries for workforce upskilling.",
  "Building climate-smart infrastructure for floods and heatwaves.",
  "Negotiating fair community benefits in development projects.",
  "Elevating arts funding and cultural equity grants."
];

const taglines = [
  "Putting neighbors first, not special interests.",
  "Forward-looking leadership rooted in transparency.",
  "A pragmatic coalition builder for challenging times.",
  "Data-driven policy with a human touch.",
  "Rebuilding trust one conversation at a time.",
  "Steady stewardship for a resilient future."
];

const portraitElement = document.getElementById("portrait");
const nameElement = document.getElementById("name");
const roleElement = document.getElementById("role");
const taglineElement = document.getElementById("tagline");
const issuesElement = document.getElementById("issues");
const refreshButton = document.getElementById("refresh-button");

const sample = (items) => items[Math.floor(Math.random() * items.length)];

const generateName = () => `${sample(firstNames)} ${sample(lastNames)}`;

const generateRole = () => {
  const office = sample(offices);
  const region = sample(geographies);
  const party = sample(parties);
  return `${office} · ${region} · ${party}`;
};

const generateIssues = () => {
  const shuffled = [...issuePool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
};

const refreshIssuesList = (issues) => {
  issuesElement.innerHTML = "";
  issues.forEach((issue) => {
    const li = document.createElement("li");
    li.textContent = issue;
    issuesElement.appendChild(li);
  });
};

const refreshPortrait = () => {
  const cacheBust = Date.now();
  portraitElement.src = `https://thispersondoesnotexist.com/image?cache=${cacheBust}`;
};

const refreshPage = () => {
  nameElement.textContent = generateName();
  roleElement.textContent = generateRole();
  taglineElement.textContent = sample(taglines);
  refreshIssuesList(generateIssues());
  refreshPortrait();
};

refreshButton.addEventListener("click", refreshPage);
refreshPage();
