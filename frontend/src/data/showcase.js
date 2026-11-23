// Showcase writeups for the home page. Keep claims exact.
// Email Triage has no public live demo. Do not invent a Cloud Run URL.

const showcase = [
  {
    title: "Chok Dee Muay Thai",
    context: "Personal",
    bullets: [
      "Builds a timed Muay Thai watch session from a shared YouTube video pool, so page views do not spend API quota.",
      "A daily cron refreshes the pools. Each run uses 9 of the 100 daily YouTube search.list calls (3 phrases each for Training, Fights, and History). Results are cached in Upstash Redis under one key.",
      "About 50 eligible videos per category: embeddable, not age-restricted, not live, and at least 10,000 views, ranked by views. If a category fails, yesterday's pool stays.",
      "66 Vitest tests, run in GitHub Actions on every push and pull request.",
    ],
    buildNote:
      "I wrote the spec and tickets, built the session picker test-first, and reviewed the diffs. AI agents wrote much of the application code.",
    stack: ["TypeScript", "Next.js", "React", "Upstash Redis", "Vercel", "YouTube Data API", "Vitest"],
    repo: "https://github.com/Chris1112220/muay-thai-sessions",
    live: "https://luckymuaythai.vercel.app",
  },
  {
    title: "Email Triage Agent",
    context: "Personal",
    bullets: [
      "A LangGraph and Gemini agent that reads Gmail, classifies each email into 10 business-inbox categories, can add triage labels, and drafts a reply when one is needed. It never sends email.",
      "An approval gate always stays off. Gmail writes are label-only, no-reply senders are skipped, and an unknown model answer falls back to \"other.\"",
      "A model fallback chain tries three Gemini models, then keyword rules if they fail. LangSmith traces the classify step only (classify and classify_batch).",
      "After category definitions were tightened, a 10-email eval went from 6/10 to 10/10. A later 15-email set scored 14/15 (93%). 19 pytest tests run in GitHub Actions on every push.",
    ],
    buildNote:
      "I directed the AI agents and reviewed their output. AI agents wrote much of the code.",
    stack: ["LangGraph", "Google Gemini", "Gmail API", "LangSmith", "FastAPI", "pytest", "GitHub Actions"],
    repo: "https://github.com/Chris1112220/email-triage-agent",
    live: "",
  },
];

export default showcase;
