---
role: "Associate Backend Developer"
company: "Techolution"
location: "Hyderabad, IN"
start: "2026-04"
end: ""
current: true
url: "https://www.techolution.com/"
summary: "Backend engineer on Vonage 'Journey Architect' — building the execution engine of a scalable, multi-channel workflow-orchestration platform (Temporal, then event-driven AWS + RabbitMQ)."
tech: ["Temporal", "RabbitMQ", "GCP + AWS", "PostgreSQL", "DSL"]
---

Promoted from intern to **Associate Backend Developer**, now a backend owner across major slices of the platform.

Backend engineer on **Vonage "Journey Architect"** — the execution engine of a workflow-orchestration platform that runs complex multi-channel user journeys (WhatsApp, SMS, RCS, webhooks), built on Temporal + GCP before a strategic migration to an event-driven AWS + RabbitMQ model.

### Orchestration engine (Temporal)
- Engineered core orchestration nodes — the asynchronous **"Wait for Action / Event"** steps — mapping complex **DSL** structures into executable Temporal worker activities.
- Architected the **Step Registry** for delay and wait-based events, enabling dynamic workflow execution.
- Built worker schemas and step definitions so new node types onboard cleanly.

### GCP → AWS, event-driven re-architecture
- Key backend driver of the migration from GCP to an **AWS + RabbitMQ** event-driven model.
- Rebuilt the "Delay", "Wait for Engagement", and "Wait for Event" workers from synchronous processing to **message-queue execution**.
- Migrated and optimized the analytics processing with **zero data loss** through the cutover.

### DSL & execution logic
- Extended the engine to evaluate **multiple conditions per branch**, and to process **OR / boolean logic** in Conditional and Wait-for-Event steps.
- Added, defined, and processed new **event triggers** in the orchestration engine.

### Analytics, observability & security
- Co-built journey-execution analytics, then independently built a **step-wise, node-by-node metrics** system.
- Shipped **Debug Logs** for real-time workflow observability in the UI.
- Built centralized **Secrets Configuration** APIs to securely store and pass third-party auth parameters.
