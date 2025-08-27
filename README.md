 KSL Prep Assistant

A web application to support LLB undergraduates and KSL candidates by bridging knowledge gaps, providing revision tools, and offering AI-powered exam preparation insights.

 Features (MVP Scope)

 **User Authentication** (signup/login).
 **Dashboard** – progress overview, quick actions.
 **Undergraduate Core Concepts** – simplified law topics.
 **KSL Units** – structured syllabus content.
 **Flashcards** – interactive revision with mastery tracking.
 **AI Predictor (beta)** – retrieves likely exam questions from past papers.
 **Profile & Personalization** – weak areas, schedules, free vs paid plan.
**Analytics** – basic usage and progress stats.

Tech Stack

**Frontend:** React (Next.js recommended)
**Backend:** Django or Node.js/Express
**Database:** PostgreSQL
**AI/ML:** Retrieval-Augmented Generation (later), pgvector / Pinecone for Q search
**Deployment:**

Frontend → Vercel / Netlify
Backend → Heroku / DigitalOcean / AWS


 Project Structure (proposed)

```
ksl-prep-assistant/
│
├── frontend/         # React/Next.js app
│   ├── components/   # Reusable UI components
│   ├── pages/        # Screens (Dashboard, Units, Flashcards, etc.)
│   └── utils/        # Frontend helpers
│
├── backend/          # Django or Express API
│   ├── models/       # Database schemas
│   ├── routes/       # API endpoints
│   └── services/     # Business logic
│
├── data/             # Law content, past papers, flashcards
│
├── docs/             # Design docs, roadmap, planning
│
└── README.md
```

 Development Roadmap

**Phase 1 (Sept 2025):** Setup repo, auth, basic pages
**Phase 2 (Oct 2025):** Flashcards + Units + Dashboard integration
**Phase 3 (Nov 2025):** AI predictor (retrieval), Profile, Paid vs Free
**Phase 4 (Dec 2025):** Analytics, polish, pilot-ready deployment

---

 Team Roles

 **Frontend Lead:**  (React UI, flow, styling, integration).
 **Backend Lead:**  (APIs, DB, auth, data storage).


---

 Setup Instructions

 Backend

```bash
cd backend
# For Node.js:
npm install
npm run dev

# For Django:
pip install -r requirements.txt
python manage.py runserver
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

Environment Variables

Create a `.env` file in both frontend and backend:

```
DATABASE_URL=postgres://user:password@localhost:5432/kslprep
JWT_SECRET=your-secret-key
AI_API_KEY=your-ai-key
```

---

 Contribution Workflow

1. Clone repo.
2. Create a feature branch: `git checkout -b feature/flashcards-ui`.
3. Commit changes: `git commit -m "Add flashcards UI"`.
4. Push branch: `git push origin feature/flashcards-ui`.
5. Open Pull Request → review → merge.

---

 License

Private project – not for distribution without owner’s consent.

