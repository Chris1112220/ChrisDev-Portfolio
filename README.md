# Chris Roberts: Portfolio

Personal portfolio for Chris Roberts, automation developer. I build RPA bots, AI document workflows and dashboards that take manual work out of accounting.

**Live site:** https://chris-dev-portfolio-one.vercel.app

## Pages

- **Home**: who I am, what I do, featured work
- **Projects**: all projects, filterable by type (finance automation, AI workflows, web apps)
- **About**: background and tech stack
- **Contact**: email, LinkedIn, GitHub

## Built with

React, React Router, Tailwind CSS, hosted on Vercel.

## Adding a project

Every project lives in one file: [`frontend/src/data/projects.js`](frontend/src/data/projects.js).
Copy an existing entry, fill in the fields, and push. Vercel redeploys automatically.

| Field | What it's for |
|---|---|
| `title` | Project name |
| `category` | `automation`, `ai` or `web` (drives the filter buttons) |
| `context` | `Personal`, or the employer or client |
| `summary` | One or two sentences on what it does and who it helps |
| `impact` | Optional result in numbers, e.g. `$50,000/year saved` |
| `stack` | List of tools used |
| `repo` | GitHub link, or `""` if the code is private |
| `live` | Live demo link, or `""` |
| `featured` | `true` to also show it on the home page |

Work projects run on private systems, so they're listed without code.

## Running locally

```bash
cd frontend
npm install
npm start
```

Then open http://localhost:3000.

## Deployment

Vercel project settings: root directory `frontend`, framework preset Create React App. `frontend/vercel.json` sends every route to `index.html` so links like `/projects` work on refresh.
