# Institute Operations Copilot (hackathon prototype)

Single-file web app: open `index.html` in any browser. No install, no backend.

## What it does
- **Signal queue**: surfaces what matters today: double-booked trainers/rooms, overdue EMIs, students falling behind, missing recordings.
- **Views**: Overview, Batches, Schedule, Attendance (in-class / online / absent), Fees.
- **Copilot chat**: ask "Who is falling behind?", "Show schedule clashes", "Overdue fees in FS-Sep", "Draft reminder for Aman". Reminders open in WhatsApp with the message pre-filled.

## How it works
- `students`, `batches`, `sessions`, `trainers` arrays at the top of the script hold sample data.
- Analytics functions (`clashes`, `atRisk`, `overdueList`, `noRec`) compute signals from that data.
- `reply()` is a rule-based intent router so the demo works offline.

## Next steps
1. Replace the sample arrays with a database (Supabase/Firebase/Postgres) behind a small API.
2. Swap `reply()` for an LLM call: send `{question, context}` to your backend, where `context` is a JSON summary of the signals above, and ask the model to answer only from that context (keeps answers grounded).
3. Add WhatsApp Business API for automatic reminders, and a calendar sync for trainers.
