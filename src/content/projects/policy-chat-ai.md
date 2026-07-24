---
title: "PolicyChat AI"
description: "Ask hard questions of dense policy documents and get grounded, cited answers."
image:
    url: "/policy-chat-ai.png"
    alt: "PolicyChat AI interface"
worksImage1:
    url: "/policy-chat-ai.png"
    alt: "PolicyChat AI dashboard"
platform: "Web"
stack: "Python | FastAPI | React | PostgreSQL | Docker | GCloud | AWS | MCP"
website: "https://github.com/mrohith29/policy-agent-ai"
github: "https://github.com/mrohith29/policy-agent-ai"
featured: true
year: "2025"
order: 2
problem: "Policy and legal documents are long, dense, and unsearchable. Reading them to answer one question wastes hours."
outcome: "A working prototype that reads PDF/DOCX/PPTX and answers in context, with authenticated, persistent chat history — a proof of concept for LLM-in-the-loop document tooling."
tech: ["FastAPI", "Gemini API", "React", "PostgreSQL", "Supabase Auth", "Docker", "MCP"]
---

**PolicyChat AI** is a prototype that turns dense policy, legal, and compliance documents into something you can just *ask*. It was built as a proof of concept — to see how far a retrieval-grounded LLM could go on real, messy documents.

### The problem
Nobody reads a 60-page policy PDF to answer one question. I wanted a system that could ingest complex documents — PDF, DOCX, PPTX — and answer questions about them accurately, with enough context to be trusted for legal and policy content.

### What I built
- **Grounded answers** — used Google's **Gemini API** with retrieval so responses stay tied to the source document instead of hallucinating.
- **Real document ingestion** — a pipeline that parses and understands mixed formats (PDF/DOCX/PPTX), not just plain text.
- **Persistent, personal sessions** — **Supabase authentication** for secure sign-in, so every user keeps their own multi-session chat history.
- **Production shape** — FastAPI backend, React frontend, PostgreSQL, containerized with Docker and deployable to GCloud/AWS.

As a prototype, the goal was to prove the hard parts work end to end — grounded retrieval, mixed-format ingestion, and authenticated persistence — and to learn what a production version would need next.
