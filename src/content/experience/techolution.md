---
role: "Python Backend Engineer Intern"
company: "Techolution"
location: "Hyderabad, IN"
start: "2025-10"
end: "2026-04"
current: false
url: "https://www.techolution.com/"
summary: "Two teams: backend + cloud integrations on the Requirement AI platform, then data-architecture modernization and DB-cost cuts on EIT."
tech: ["Python", "FastAPI", "MongoDB", "GCP / GCS", "Azure"]
---

Rotated across two backend teams during the internship — first hardening the Requirement AI platform, then modernizing data architecture on the EIT team.

### Requirement AI — backend & cloud
- Built and maintained core endpoints, including the `convert_to_pdf` document-conversion pipeline and its utilities.
- Integrated **Google Drive** and **Google Cloud Storage** for artifact retrieval (`get-artifact`, `find_shared_artifact`), and surfaced `artifact_title` in `check_request` for better process tracking.
- Added **fuzzy search** for shared artifacts (by title and ID), making them far easier to find.
- Introduced **prompt versioning** to track changes to AI system prompts over time.
- Removed hardcoded secrets, closed security holes, and refactored across branches for maintainability.
- Built the **Prompt Management** section of the admin dashboard.

### EIT modernization — data & scale
- Built a **scheduler** that auto-triggers and processes documents, with overwrite support and manual reprocessing.
- Migrated MongoDB collections to a **versioned schema** that preserved history while cutting storage — and DB cost.
- Rewrote hot API paths as **MongoDB aggregation pipelines**, cutting response times sharply.
- Owned the backend for the new **User Dashboard**, with fast paginated loading.
- Tuned LLM prompts for better output, and reorganized **Azure** storage for a cleaner client experience.
