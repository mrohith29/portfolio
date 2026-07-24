---
title: "MakeMeBetter AI"
description: "An end-to-end goals, habits & tasks tracker — with a live MCP server that lets AI assistants run your board for you."
image:
    url: "/makemebetter.png"
    alt: "MakeMeBetter AI"
worksImage1:
    url: "/makemebetter.png"
    alt: "MakeMeBetter AI board"
platform: "Web"
stack: "Python | FastAPI | React | PostgreSQL | MCP"
website: "https://github.com/mrohith29"
github: "https://github.com/mrohith29"
featured: true
year: "2026"
order: 1
problem: "To-do apps track tasks in isolation — never tied to the goals and habits that actually drive progress, and never operable by an AI assistant."
outcome: "A full, deployed product: goals → habits → tasks with subtasks and progress tracking, plan tiers, and an MCP server so AI can read and update your board in real time."
tech: ["FastAPI", "React", "PostgreSQL", "MCP", "Auth"]
---

**MakeMeBetter AI** is a complete, deployed productivity application — goals, habits, and tasks in one system — with an AI integration that goes well past a chat box: an **MCP server** that lets assistants like Claude actually operate your board.

### The problem
Most trackers treat tasks as a flat list. They don't connect a task to the *habit* that builds it or the *goal* it serves, so the thing you're doing today gets disconnected from the thing you're trying to become. And none of them let an AI assistant do the work *with* you — read your board, add a subtask, mark progress.

### What I built — end to end
- **A real hierarchy** — goals contain habits, habits and tasks nest into subtasks, all with progress tracking and completion state.
- **Plan tiers** — free and pro plans with per-plan quotas, i.e. a product shaped for real users, not a demo.
- **An MCP server** — the standout piece. AI assistants can list, create, update, and complete goals/habits/tasks directly through the Model Context Protocol, with the user's own board as the source of truth. Productivity software an agent can genuinely drive.
- **Deployed and live** — running in production, backed by a persistent database and authenticated per-user data.

Where PolicyChat AI was a prototype to prove an idea, **MakeMeBetter AI is the full build** — the piece I take furthest, from data model to deployment to an AI-native interface.
