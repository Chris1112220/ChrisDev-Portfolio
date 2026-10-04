// ─────────────────────────────────────────────────────────────
// PROJECTS — the only file you need to edit to add a project.
//
// To add one, copy a block below and fill it in:
//   title     – project name
//   category  – "automation" | "ai" | "web"   (used for the filter buttons)
//   context   – "Personal" or the employer/client name, e.g. "Drexel University"
//   summary   – one or two sentences: what it does and who it helps
//   impact    – optional, the result in numbers (e.g. "1,800 hours/year saved")
//   stack     – list of tools
//   repo      – GitHub link, or "" if the code is private
//   live      – live demo link, or ""
//   featured  – true to also show it on the home page
//
// Projects show in the order they appear here.
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    title: "AI Invoice Extraction",
    category: "ai",
    context: "Personal",
    summary:
      "Accounts-payable intake for small firms: drop a PDF invoice in Google Drive and an AI reads it, code checks the math, a Google Sheet logs it, the file is renamed, and anything off is flagged for a person.",
    impact: "5/5 test invoices handled correctly, including totals that don't add up",
    stack: ["n8n", "Google Gemini", "Google Drive", "Google Sheets", "Gmail"],
    repo: "https://github.com/Chris1112220/invoice-extraction-n8n",
    live: "",
    featured: true,
  },
  {
    title: "Journal Entry Community Bot",
    category: "automation",
    context: "Drexel University",
    summary:
      "Automates journal entry creation in Banner for finance staff across the university, so 50 users stop keying entries by hand.",
    impact: "1,800 hours/year saved",
    stack: ["UiPath", "RPA", "Banner"],
    repo: "",
    live: "",
    featured: true,
  },
  {
    title: "Bank Statement Posting Bot",
    category: "automation",
    context: "Drexel University",
    summary:
      "Reads bank statements with OCR, prepares the journal entries, and posts them automatically.",
    impact: "72 hours/year saved",
    stack: ["UiPath", "OCR", "RPA"],
    repo: "",
    live: "",
    featured: true,
  },
  {
    title: "ACH PDF Splitter Bot",
    category: "automation",
    context: "Drexel University",
    summary:
      "Splits combined ACH payment PDFs into individual documents, names them and files them automatically, running unattended in UiPath Orchestrator.",
    impact: "$50,000/year saved",
    stack: ["UiPath", "Orchestrator", "PDF"],
    repo: "",
    live: "",
    featured: true,
  },
  {
    title: "Personal Blog",
    category: "web",
    context: "Personal",
    summary:
      "Full-stack blog with user login and post management, built and deployed end to end.",
    impact: "",
    stack: ["Flask", "PostgreSQL", "JWT", "Docker"],
    repo: "https://github.com/Chris1112220/Personal-Blog",
    live: "https://personal-blog-h41u.onrender.com",
    featured: false,
  },
  {
    title: "This Portfolio",
    category: "web",
    context: "Personal",
    summary:
      "The site you're on. React and Tailwind, with projects kept in one data file so adding new work takes a minute.",
    impact: "",
    stack: ["React", "Tailwind CSS", "React Router", "Vercel"],
    repo: "https://github.com/Chris1112220/ChrisDev-Portfolio",
    live: "https://chris-dev-portfolio-one.vercel.app",
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "automation", label: "Finance automation" },
  { id: "ai", label: "AI workflows" },
  { id: "web", label: "Web apps" },
];

export default projects;
