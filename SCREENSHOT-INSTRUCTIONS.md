# Screenshot and video capture guide (Janovix Docs)

This file lists every `{/* IMAGE: ... */}` and `{/* VIDEO: ... */}` placeholder in the **English** MDX tree (`content/en/`). **Spanish** (`content/es/`) uses the **same asset paths** — capture once per asset unless you need localized UI text in the image.

**Conventions**

- **Host app:** Use production-like URLs (`aml.janovix.com`, `auth.janovix.com`, `watchlist.janovix.com`) or staging equivalents; state which in the PR.
- **Account:** Demo org with realistic but **non-sensitive** data; blur RFCs, emails, phone numbers, and folios if needed.
- **Theme:** Default **dark** theme unless the doc page discusses light mode — pick one per asset and stay consistent.
- **Language:** Match the doc locale if text is legible in-frame (**EN** screenshots for `/en` pages, **ES** for `/es` if you maintain separate assets).
- **Resolution:** 16:10 or 16:9, min width **1440px** for full-page shots; **2×** PNG for retina.
- **Browser:** Chrome, hide bookmark bar, use a clean window (no extensions visible).
- **Output path:** Save under `docs/public/images/...` exactly as in the placeholder comment.

---

## Root (`content/en/`)

| MDX file               | Placeholder / output path                               | What to capture                                                                                              |
| ---------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `index.mdx`            | `public/images/hero-platform.png`                       | Wide hero-style composite: AML org home with sidebar + a panel region (or marketing-safe mock).              |
| `index.mdx`            | **VIDEO** (no path in comment)                          | 60–90s voice-over walkthrough: AML dashboard → client → watchlist → settings (scripted demo org).            |
| `what-is-janovix.mdx`  | `public/images/introduction/platform-architecture.png`  | Diagram or simplified screenshot collage: AML app + Auth settings + Watchlist with arrows (Figma export OK). |
| `mission.mdx`          | `public/images/introduction/compliance-workflow.png`    | Flowchart: onboard → operations → alerts → notices (vector or screenshot of slide).                          |
| `legal-background.mdx` | `public/images/introduction/art17-activities-table.png` | Infographic of Art. 17 fractions and UMA thresholds (design asset; not a product screenshot).                |

---

## AML (`content/en/aml/`)

| MDX file         | Output path                                       | What to capture                                                                                |
| ---------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `index.mdx`      | `public/images/aml/aml-overview.png`              | AML app with **sidebar expanded** showing Transactions, Compliance, Data management groups.    |
| `dashboard.mdx`  | `public/images/aml/dashboard-overview.png`        | Org home `/{orgSlug}`: KPI row + at least one of risk/alert/ops/client cards visible.          |
| `dashboard.mdx`  | `public/images/aml/dashboard-filters.png`         | **Date range** control in header with dropdown open.                                           |
| `activity.mdx`   | `public/images/aml/activity-feed.png`             | **`/activity`** page: two day groups (e.g. Today / Yesterday) + one unread + mixed severities. |
| `clients.mdx`    | `public/images/aml/client-list.png`               | Clients list: search, filters, status badges.                                                  |
| `clients.mdx`    | `public/images/aml/client-form-physical.png`      | New client wizard for **physical person** (first step fields visible).                         |
| `clients.mdx`    | `public/images/aml/client-kyc-status.png`         | Client row or detail showing KYC **completion** / incomplete state.                            |
| `clients.mdx`    | `public/images/aml/client-detail.png`             | Client detail: tabs + **regulatory screening** section partially visible.                      |
| `clients.mdx`    | **VIDEO**                                         | 2–3 min: create physical client → KYC fields → open screening results.                         |
| `operations.mdx` | `public/images/aml/operation-list.png`            | Operations table: activity, client, amount, UMA column.                                        |
| `operations.mdx` | `public/images/aml/operation-create.png`          | New operation form: activity + client + amount.                                                |
| `operations.mdx` | `public/images/aml/operation-activity-fields.png` | **VEH** (or similar) activity-specific fields filled.                                          |
| `operations.mdx` | `public/images/aml/operation-payment-methods.png` | Payment methods subsection with two rows.                                                      |
| `alerts.mdx`     | `public/images/aml/alert-list.png`                | Alerts list with severity colors + status chips.                                               |
| `alerts.mdx`     | `public/images/aml/alert-rules.png`               | Alert rules / configuration screen (if separate from list).                                    |
| `alerts.mdx`     | `public/images/aml/alert-detail.png`              | Alert detail with timeline + actions.                                                          |
| `alerts.mdx`     | **VIDEO**                                         | 2 min: auto alert → review → resolve (blur SAT folio).                                         |
| `notices.mdx`    | `public/images/aml/notice-list.png`               | Notices list: months, statuses DRAFT/GENERATED.                                                |
| `notices.mdx`    | `public/images/aml/notice-workflow.png`           | **Diagram** (not app): DRAFT → GENERATED → SUBMITTED → ACKNOWLEDGED.                           |
| `notices.mdx`    | `public/images/aml/notice-generate.png`           | Notice detail: summary + generate XML CTA.                                                     |
| `reports.mdx`    | `public/images/aml/report-templates.png`          | Report template picker cards.                                                                  |
| `reports.mdx`    | `public/images/aml/report-generated.png`          | Generated report / PDF preview pane.                                                           |
| `invoices.mdx`   | `public/images/aml/invoice-list.png`              | Invoices list with UUID column.                                                                |
| `invoices.mdx`   | `public/images/aml/invoice-parse-xml.png`         | XML paste/upload step with parsed preview.                                                     |
| `import.mdx`     | `public/images/aml/import-wizard.png`             | Import dialog: entity type + file upload.                                                      |
| `import.mdx`     | `public/images/aml/import-progress.png`           | Import job: progress + phase labels.                                                           |
| `import.mdx`     | `public/images/aml/import-results.png`            | Row status table SUCCESS/ERROR.                                                                |
| `import.mdx`     | **VIDEO**                                         | 2 min: template → upload → progress → errors.                                                  |
| `kyc.mdx`        | `public/images/aml/kyc-self-service-flow.png`     | **Diagram** of officer → email → client portal → review.                                       |
| `kyc.mdx`        | `public/images/aml/kyc-session-list.png`          | KYC sessions list with statuses.                                                               |
| `kyc.mdx`        | `public/images/aml/kyc-client-view.png`           | Client-facing portal (token session) sections.                                                 |
| `kyc.mdx`        | `public/images/aml/kyc-review.png`                | Officer review approve/reject.                                                                 |
| `kyc.mdx`        | **VIDEO**                                         | 3 min end-to-end KYC self-service.                                                             |
| `risk.mdx`       | `public/images/aml/risk-dashboard.png`            | `/risk` hub: stats + org assessment snippet + distribution.                                    |
| `risk.mdx`       | `public/images/aml/risk-org-assessment.png`       | `/risk/assessment`: gauges + element breakdown.                                                |

---

## Settings (`content/en/settings/`)

| MDX file           | Output path                                          | What to capture                                                                    |
| ------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `index.mdx`        | `public/images/settings/settings-sidebar.png`        | Auth app settings **sidebar**: Personal, Billing, Org, Compliance, Team, API Keys. |
| `personal.mdx`     | `public/images/settings/settings-personal.png`       | Personal settings: avatar, theme, language, timezone.                              |
| `organization.mdx` | `public/images/settings/settings-org.png`            | Organization name, logo, timezone fields.                                          |
| `organization.mdx` | `public/images/settings/org-switcher.png`            | **Org switcher** dropdown open with 2 orgs + create.                               |
| `team.mdx`         | `public/images/settings/settings-team.png`           | Members table with role badges.                                                    |
| `team.mdx`         | `public/images/settings/settings-invite.png`         | Invite modal: email + role.                                                        |
| `api-keys.mdx`     | `public/images/settings/settings-api-keys.png`       | API keys list masked `sk_live_•••`.                                                |
| `api-keys.mdx`     | `public/images/settings/settings-api-key-create.png` | Create key dialog.                                                                 |
| `billing.mdx`      | `public/images/settings/settings-billing.png`        | Billing overview: plan badge + meters.                                             |
| `billing.mdx`      | `public/images/settings/settings-plans.png`          | Plan comparison / grid.                                                            |
| `compliance.mdx`   | `public/images/settings/settings-compliance.png`     | AML compliance: RFC, activity, self-service toggles.                               |

---

## Watchlist (`content/en/watchlist/`)

| MDX file            | Output path                                           | What to capture                                        |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| `index.mdx`         | `public/images/watchlist/watchlist-overview.png`      | Watchlist home: search + recent queries.               |
| `search.mdx`        | `public/images/watchlist/watchlist-search.png`        | Search form + dataset checkboxes + entity switch.      |
| `search.mdx`        | `public/images/watchlist/watchlist-results.png`       | Results view with match cards.                         |
| `search.mdx`        | `public/images/watchlist/watchlist-result-detail.png` | Expanded card: score breakdown visible.                |
| `search.mdx`        | **VIDEO**                                             | 2 min: common name → PEP/adverse → expand breakdown.   |
| `datasets.mdx`      | `public/images/watchlist/datasets-diagram.png`        | Diagram of 5 sources + hybrid engine (design asset).   |
| `query-history.mdx` | `public/images/watchlist/watchlist-history.png`       | Queries table: source column + risk badges + PDF icon. |

---

## API (`content/en/api/`)

| MDX file             | Output path                              | What to capture                                       |
| -------------------- | ---------------------------------------- | ----------------------------------------------------- |
| `index.mdx`          | `public/images/api/api-architecture.png` | Diagram: client → `api.janovix.com` → auth → aml-svc. |
| `authentication.mdx` | `public/images/api/auth-flow.png`        | Sequence diagram (Figma): key exchange.               |
| `authentication.mdx` | `public/images/api/api-key-usage.png`    | Simple diagram Bearer → gateway.                      |

---

## After export

1. Optimize PNGs (e.g. `oxipng` or ImageOptim).
2. Replace MDX comments with real `![alt](/images/...)` or `<Image />` when ready (Nextra supports both).
3. Run `pnpm lint && pnpm typecheck` in `docs/`.

---

## Video hosting

Place short MP4s in `public/videos/` (create folder) or embed YouTube/Vimeo if product marketing provides links — update MDX to use `<video>` or iframe when filenames are finalized.
