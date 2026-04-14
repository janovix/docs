# FATF/GAFI Feature Requirements Matrix — Janovix

> Exhaustive mapping of all 40 FATF Recommendations and their sub-requirements to Janovix product features.
> Status as of April 2026, based on codebase analysis and FATF December 2025 edition.

---

## Status Legend

| Status              | Meaning                                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Implemented**     | Feature exists and substantially addresses the requirement                                                      |
| **Partial**         | Feature exists but does not fully cover all sub-requirements                                                    |
| **Not Implemented** | No current feature addresses this requirement                                                                   |
| **N/A (Platform)**  | Requirement is directed at countries/authorities, not at compliance SaaS platforms; no product feature expected |
| **N/A (Scope)**     | Requirement applies to a sector/activity outside Janovix's current target market                                |

## Priority Legend

| Priority     | Meaning                                                                         |
| ------------ | ------------------------------------------------------------------------------- |
| **Critical** | Core compliance obligation; must be in the product for it to be viable          |
| **High**     | Important for comprehensive compliance coverage; should be in near-term roadmap |
| **Medium**   | Valuable differentiator; mid-term roadmap                                       |
| **Low**      | Nice-to-have or only relevant to specific verticals                             |

---

## Group A — AML/CFT/CFP Policies and Coordination

### R.1 — Risk Assessment and Risk-Based Approach

**FATF Requirement:** Countries must identify, assess, and understand ML/TF/PF risks. FIs and DNFBPs must identify, evaluate, and take effective risk-based action to mitigate their risks. Risk assessments must be documented, kept current, and available to supervisors.

**Applicability:** Janovix must enable obligated entities to perform, document, and maintain institutional risk assessments, and to apply risk-based measures across all compliance processes.

| Sub-requirement                                   | Status              | Current Feature                                                                             | Gap / Needed Feature                                                                                                                                                          | Priority     |
| ------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **R.1.1** Entity-level risk assessment (ML/TF)    | **Not Implemented** | —                                                                                           | Risk assessment module: configurable risk matrix with risk factors (clients, countries, products, channels), scoring methodology, documentation, and periodic review workflow | **Critical** |
| **R.1.2** Entity-level risk assessment (PF)       | **Not Implemented** | —                                                                                           | PF risk assessment within sanctions compliance program context                                                                                                                | **High**     |
| **R.1.3** Document risk assessments               | **Not Implemented** | —                                                                                           | Risk assessment report generation, version history, audit trail                                                                                                               | **Critical** |
| **R.1.4** Keep assessments current                | **Not Implemented** | —                                                                                           | Scheduled review reminders, change-triggered reassessment                                                                                                                     | **High**     |
| **R.1.5** Share risk information with supervisors | **Not Implemented** | —                                                                                           | Export/submission capability for risk assessment reports                                                                                                                      | **Medium**   |
| **R.1.6** Risk-based CDD calibration              | **Partial**         | Threshold-based identification in `aml-svc` (Art. 17 LFPIORPI)                              | Client-level risk scoring that dynamically adjusts CDD depth (simplified, normal, enhanced)                                                                                   | **Critical** |
| **R.1.7** Client-level risk classification        | **Partial**         | Watchlist screening results feed into client profile (`screeningResult`, PEP/OFAC/UN flags) | Formal risk classification engine: aggregate risk score from multiple factors (country, activity, product, PEP status, screening results, transaction patterns)               | **Critical** |
| **R.1.8** Proportional measures for lower risk    | **Not Implemented** | —                                                                                           | Simplified CDD workflows triggered by low-risk classification                                                                                                                 | **High**     |
| **R.1.9** Enhanced measures for higher risk       | **Partial**         | Alert rules in `aml-alert-worker` trigger on thresholds                                     | EDD workflow: additional information collection, senior management approval, enhanced monitoring frequency — triggered by high-risk classification                            | **Critical** |

### R.2 — National Cooperation and Coordination

**FATF Requirement:** Countries must have national AML/CFT/CFP policies with coordination mechanisms between all competent authorities.

**Applicability:** Directed at countries, not platforms. However, the platform can support entities' participation in national coordination.

| Sub-requirement                         | Status             | Current Feature                            | Gap / Needed Feature                                                    | Priority |
| --------------------------------------- | ------------------ | ------------------------------------------ | ----------------------------------------------------------------------- | -------- |
| **R.2.1** National policy awareness     | **N/A (Platform)** | —                                          | —                                                                       | —        |
| **R.2.2** Coordination with authorities | **Partial**        | Notices workflow (Mexico SAT) in `aml-svc` | Reference library of national coordination requirements by jurisdiction | **Low**  |

---

## Group B — Money Laundering and Confiscation

### R.3 — Money Laundering Offence

**FATF Requirement:** Countries must criminalize ML based on Vienna/Palermo Conventions covering all serious offences.

**Applicability:** Directed at countries' legal frameworks. Platform should support awareness of predicate offences for STR classification.

| Sub-requirement                                     | Status      | Current Feature                           | Gap / Needed Feature                                                       | Priority   |
| --------------------------------------------------- | ----------- | ----------------------------------------- | -------------------------------------------------------------------------- | ---------- |
| **R.3.1** Predicate offence classification for STRs | **Partial** | Alert types and PLD catalogs in `aml-svc` | Predicate offence taxonomy for STR categorization (the 21 FATF categories) | **Medium** |

### R.4 — Confiscation and Provisional Measures

**FATF Requirement:** Countries must have measures for identification, tracing, freezing, seizure, and confiscation of criminal property.

**Applicability:** Directed at countries/authorities. Platform can support entities' asset freezing obligations.

| Sub-requirement                             | Status      | Current Feature                                                                         | Gap / Needed Feature                                                                                | Priority   |
| ------------------------------------------- | ----------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| **R.4.1** Support for asset freezing orders | **Partial** | Sanctions screening (OFAC/UN/SAT 69-B) in `watchlist-svc` identifies designated persons | Workflow for executing/documenting freeze orders received from authorities, reporting frozen assets | **Medium** |

---

## Group C — Terrorist Financing and Proliferation Financing

### R.5 — Terrorist Financing Offence

**FATF Requirement:** Countries must criminalize TF.

**Applicability:** Directed at countries' legal frameworks. Platform supports TF detection through screening and STR filing.

| Sub-requirement                | Status      | Current Feature                                           | Gap / Needed Feature                   | Priority   |
| ------------------------------ | ----------- | --------------------------------------------------------- | -------------------------------------- | ---------- |
| **R.5.1** TF detection support | **Partial** | Sanctions screening, adverse media screening, alert rules | TF-specific alert rules and typologies | **Medium** |

### R.6 — Targeted Financial Sanctions — Terrorism

**FATF Requirement:** Implement sanctions regimes for UNSC 1267 (Al-Qaida/Taliban) and 1373 (country-designated). Freeze without delay, prohibit fund availability, communicate designations, report frozen assets.

**Applicability:** Core platform feature — sanctions screening against terrorism lists.

| Sub-requirement                                               | Status              | Current Feature                                                                | Gap / Needed Feature                                                                                                                                   | Priority     |
| ------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| **R.6.1** Screen against UNSC 1267 consolidated list          | **Implemented**     | `watchlist-svc` — UN sanctions search (`/search/unsc`)                         | —                                                                                                                                                      | —            |
| **R.6.2** Screen against national terrorism designations      | **Partial**         | SAT 69-B (Mexico) in `watchlist-svc`                                           | Configurable additional national/regional terrorism designation lists (EU, UK HMT, etc.)                                                               | **High**     |
| **R.6.3** Real-time/batch screening on client onboarding      | **Implemented**     | Client-level screening triggered on creation/update with callback to `aml-svc` | —                                                                                                                                                      | —            |
| **R.6.4** Ongoing screening (list updates)                    | **Partial**         | Stale screening detection in `aml-svc` internal routes                         | Automated re-screening when sanctions lists are updated (event-driven); configurable frequency                                                         | **Critical** |
| **R.6.5** Freeze without delay                                | **Not Implemented** | —                                                                              | Immediate freeze workflow: when a match is confirmed, trigger account/relationship freeze action with timestamp, documentation, and notification chain | **High**     |
| **R.6.6** Report frozen assets to authorities                 | **Not Implemented** | —                                                                              | Frozen asset reporting template/workflow to competent authorities                                                                                      | **High**     |
| **R.6.7** Report attempted transactions by designated persons | **Not Implemented** | —                                                                              | Alert and log when designated persons attempt transactions (post-screening match)                                                                      | **High**     |
| **R.6.8** False positive handling                             | **Partial**         | Query audit in `watchlist-svc` (`SearchQuery`)                                 | Structured false-positive resolution workflow: investigation, documentation, approval, unfreezing                                                      | **High**     |
| **R.6.9** Delisting procedures                                | **Not Implemented** | —                                                                              | Workflow for processing delisting notifications and unfreezing                                                                                         | **Medium**   |
| **R.6.10** Communicate designations to staff                  | **Partial**         | Notifications service exists (`notifications-svc`)                             | Automated sanctions update notifications to compliance officers when lists change                                                                      | **High**     |

### R.7 — Targeted Financial Sanctions — Proliferation

**FATF Requirement:** Implement UNSC sanctions for WMD proliferation (DPRK, Iran). Same freezing framework as R.6.

**Applicability:** Core platform feature — proliferation-related sanctions screening.

| Sub-requirement                                                          | Status              | Current Feature                                                                   | Gap / Needed Feature                                                                   | Priority   |
| ------------------------------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------- |
| **R.7.1** Screen against UNSC proliferation lists (1718 DPRK, 1737 Iran) | **Implemented**     | `watchlist-svc` — UN sanctions search includes all UNSC consolidated list entries | —                                                                                      | —          |
| **R.7.2** Freeze without delay / prohibit fund availability              | **Not Implemented** | —                                                                                 | Same freeze workflow as R.6.5                                                          | **High**   |
| **R.7.3** Report frozen assets / attempted transactions                  | **Not Implemented** | —                                                                                 | Same reporting as R.6.6 and R.6.7                                                      | **High**   |
| **R.7.4** PF risk assessment support                                     | **Not Implemented** | —                                                                                 | PF-specific risk indicators and assessment templates within R.1 risk assessment module | **Medium** |

### R.8 — Non-Profit Organizations

**FATF Requirement:** Identify NPOs at risk of TF abuse, apply focused risk-based measures without unduly disrupting legitimate activities.

**Applicability:** Relevant when entities onboard NPO clients. Platform should support NPO-specific risk classification.

| Sub-requirement                          | Status              | Current Feature                                  | Gap / Needed Feature                                                                                             | Priority   |
| ---------------------------------------- | ------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.8.1** NPO client type classification | **Partial**         | Client types in `aml-svc` (physical/moral/trust) | Explicit NPO/OSFL client sub-type with associated risk factors                                                   | **Medium** |
| **R.8.2** NPO-specific risk assessment   | **Not Implemented** | —                                                | NPO risk indicators: cross-border fund flows, conflict zone operations, governance structure                     | **Medium** |
| **R.8.3** NPO-specific CDD measures      | **Not Implemented** | —                                                | Enhanced CDD template for NPO clients: purpose verification, beneficiary population, source of funds, governance | **Medium** |

---

## Group D — Preventive Measures

### R.9 — Financial Institution Secrecy Laws

**FATF Requirement:** Financial secrecy must not impede FATF implementation.

**Applicability:** Directed at countries' legal frameworks.

| Sub-requirement                        | Status             | Current Feature | Gap / Needed Feature | Priority |
| -------------------------------------- | ------------------ | --------------- | -------------------- | -------- |
| **R.9.1** No platform feature required | **N/A (Platform)** | —               | —                    | —        |

### R.10 — Customer Due Diligence (CDD)

**FATF Requirement:** The cornerstone. FIs must perform CDD for all business relationships and occasional transactions above threshold. Four pillars: identification, BO identification, purpose understanding, ongoing monitoring.

**Applicability:** Core platform feature — this is Janovix's primary value proposition.

| Sub-requirement                                                        | Status              | Current Feature                                                                                                        | Gap / Needed Feature                                                                                                                                                         | Priority     |
| ---------------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **R.10.1** Prohibit anonymous accounts                                 | **Implemented**     | Client creation requires identification in `aml-svc`                                                                   | —                                                                                                                                                                            | —            |
| **R.10.2(a)** Identify customer and verify identity                    | **Implemented**     | Client profiles (physical/moral/trust) with identification fields, document collection, KYC sessions, document scanner | —                                                                                                                                                                            | —            |
| **R.10.2(b)** Identify beneficial owner and verify                     | **Implemented**     | Shareholders and beneficial controllers models in `aml-svc`; shareholder/controller forms in AML UI                    | —                                                                                                                                                                            | —            |
| **R.10.2(c)** Understand purpose/nature of relationship                | **Partial**         | Client profile includes activity type and vulnerable activity classification                                           | Structured "purpose of relationship" field/questionnaire; configurable per client type                                                                                       | **High**     |
| **R.10.2(d)** Ongoing due diligence / monitoring                       | **Partial**         | Alert rules (`aml-alert-worker`) monitor operations against UMA thresholds; stale screening detection                  | Continuous transaction monitoring against client profile (consistency checks); automated profile review triggers; source of funds verification workflow                      | **Critical** |
| **R.10.3** RBA scope of CDD measures                                   | **Partial**         | Threshold-based identification (Art. 17 LFPIORPI)                                                                      | Dynamic CDD depth based on risk classification: simplified → normal → enhanced, with different required fields/documents per level                                           | **Critical** |
| **R.10.4** Verify identity before/during relationship                  | **Implemented**     | KYC sessions and public KYC flows with document verification                                                           | —                                                                                                                                                                            | —            |
| **R.10.5** Timing flexibility                                          | **Implemented**     | KYC session allows completion after initial relationship establishment                                                 | —                                                                                                                                                                            | —            |
| **R.10.6** Failure to complete CDD → no account/terminate/consider STR | **Partial**         | KYC status tracking (completeness %)                                                                                   | Automated workflow: block operations when CDD incomplete; forced relationship termination; auto-trigger STR consideration                                                    | **High**     |
| **R.10.7** Apply to existing clients (risk-based)                      | **Partial**         | Stale screening detection for existing clients                                                                         | Periodic CDD review scheduler based on risk classification; batch re-verification campaigns                                                                                  | **High**     |
| **R.10.8** Higher-risk factors (Interpretive Note para. 15)            | **Partial**         | PEP, sanctions, adverse media screening                                                                                | Country risk factors, complex ownership structures, cash-intensive business flags, non-face-to-face risk indicators                                                          | **High**     |
| **R.10.9** Lower-risk factors (Interpretive Note para. 16-17)          | **Not Implemented** | —                                                                                                                      | Lower-risk classification: supervised FIs, public companies, government entities; lower-risk products                                                                        | **High**     |
| **R.10.10** Enhanced CDD measures (Interpretive Note para. 20)         | **Partial**         | Some alert rule thresholds                                                                                             | EDD workflow module: additional info collection, source of wealth/funds, senior management approval, enhanced monitoring, first-payment-through-verified-account requirement | **Critical** |
| **R.10.11** Simplified CDD measures (Interpretive Note para. 21)       | **Not Implemented** | —                                                                                                                      | Simplified CDD workflow: deferred verification, reduced update frequency, reduced monitoring, inferred purpose — blocked when suspicion exists                               | **High**     |
| **R.10.12** Transaction threshold (USD/EUR 15,000)                     | **Implemented**     | Threshold-based identification in `aml-svc` aligned with Mexican UMA thresholds                                        | —                                                                                                                                                                            | —            |
| **R.10.13** Ongoing CDD — keep records current                         | **Partial**         | Client edit flows exist                                                                                                | Automated document/data staleness detection; review reminders by risk tier                                                                                                   | **High**     |

### R.11 — Record Keeping

**FATF Requirement:** Maintain transaction records for 5+ years (sufficient for reconstruction). CDD records for 5+ years after relationship ends. Available to competent authorities.

**Applicability:** Core platform feature — audit trail and document retention.

| Sub-requirement                                                         | Status          | Current Feature                                                                                        | Gap / Needed Feature                                                                                                                           | Priority   |
| ----------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.11.1** Transaction records (5 years, sufficient for reconstruction) | **Implemented** | Operations module in `aml-svc` stores all transaction details; audit logs in `auth-svc`                | Configurable retention policy enforcement; archival workflow after relationship termination                                                    | **Medium** |
| **R.11.2** CDD records (5 years after relationship end)                 | **Implemented** | Client profiles, documents, KYC session records persisted in `aml-svc`; document storage via `doc-svc` | Retention policy enforcement with scheduled purge after legal minimum; relationship termination date tracking                                  | **Medium** |
| **R.11.3** Available to competent authorities                           | **Partial**     | Data exists in the platform                                                                            | Authority request workflow: receive, process, and respond to information requests from supervisors/law enforcement; export in required formats | **High**   |

### R.12 — Politically Exposed Persons (PEPs)

**FATF Requirement:** For foreign PEPs: risk management systems, senior management approval, source of wealth/funds, enhanced monitoring. For domestic PEPs and international organization PEPs: same when higher risk. Extends to family and close associates.

**Applicability:** Core platform feature — PEP screening and enhanced measures.

| Sub-requirement                                             | Status              | Current Feature                                                                                | Gap / Needed Feature                                                                                                                                 | Priority     |
| ----------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **R.12.1** Risk management systems to determine PEP status  | **Implemented**     | PEP screening via `watchlist-svc` (official PEP lists + Grok PEP check); client-level PEP flag | —                                                                                                                                                    | —            |
| **R.12.2** Foreign PEP identification                       | **Implemented**     | `watchlist-svc` searches against PEP databases                                                 | —                                                                                                                                                    | —            |
| **R.12.3** Domestic PEP identification                      | **Implemented**     | PEP screening covers domestic lists (Mexico focus)                                             | Expand domestic PEP list coverage for additional jurisdictions as product expands                                                                    | **Medium**   |
| **R.12.4** International organization PEP identification    | **Partial**         | May be covered by PEP databases used                                                           | Ensure explicit coverage of heads/senior officials of international organizations                                                                    | **Medium**   |
| **R.12.5** Senior management approval for PEP relationships | **Not Implemented** | —                                                                                              | Approval workflow: when PEP status detected, require senior management sign-off before establishing/continuing relationship; audit trail of approval | **Critical** |
| **R.12.6** Source of wealth and source of funds             | **Not Implemented** | —                                                                                              | Source of wealth/funds collection fields and verification workflow for PEP clients                                                                   | **Critical** |
| **R.12.7** Enhanced ongoing monitoring for PEPs             | **Partial**         | Alert rules exist but not PEP-specific                                                         | PEP-specific enhanced monitoring rules: lower thresholds, higher scrutiny, more frequent reviews                                                     | **High**     |
| **R.12.8** Family members and close associates              | **Partial**         | Screening may catch family members by name                                                     | Explicit related-persons module: link PEP family members and close associates to the PEP record; screen related persons                              | **High**     |
| **R.12.9** Life insurance beneficiary PEP check             | **N/A (Scope)**     | Not applicable to current Janovix market                                                       | —                                                                                                                                                    | —            |

### R.13 — Correspondent Banking

**FATF Requirement:** For cross-border correspondent relationships: gather information, assess AML controls, obtain senior management approval, understand responsibilities, verify CDD on payable-through accounts. Prohibit shell banks.

**Applicability:** Relevant if Janovix serves banking clients with correspondent relationships.

| Sub-requirement                             | Status              | Current Feature | Gap / Needed Feature                                                                                                                                | Priority |
| ------------------------------------------- | ------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **R.13.1** Correspondent bank due diligence | **Not Implemented** | —               | Correspondent bank onboarding module: information gathering, AML control assessment questionnaire, reputation check, supervision quality assessment | **Low**  |
| **R.13.2** Senior management approval       | **Not Implemented** | —               | Approval workflow for new correspondent relationships                                                                                               | **Low**  |
| **R.13.3** Shell bank prohibition check     | **Not Implemented** | —               | Shell bank indicator flags in counterparty assessment                                                                                               | **Low**  |

### R.14 — Money or Value Transfer Services (MVTS)

**FATF Requirement:** MVTS providers must be licensed/registered and supervised. Agents must be licensed/registered or on an accessible list.

**Applicability:** Relevant if Janovix serves MVTS providers.

| Sub-requirement                     | Status      | Current Feature                                | Gap / Needed Feature                                                                            | Priority |
| ----------------------------------- | ----------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------- |
| **R.14.1** MVTS client-type support | **Partial** | Client types support moral persons (companies) | MVTS-specific onboarding with license/registration verification fields; agent registry tracking | **Low**  |

### R.15 — New Technologies / Virtual Assets / VASPs

**FATF Requirement:** Identify and assess ML/TF risks from new products/technologies before launch. VASPs must be licensed/registered, regulated, and supervised. VA-specific CDD threshold: USD/EUR 1,000.

**Applicability:** Core feature for clients operating in virtual assets.

| Sub-requirement                                                       | Status              | Current Feature                                                                 | Gap / Needed Feature                                                                                       | Priority   |
| --------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------- |
| **R.15.1** Risk assessment for new products/technologies              | **Not Implemented** | —                                                                               | New product/technology risk assessment template within R.1 module                                          | **Medium** |
| **R.15.2** VASP-specific CDD threshold (USD/EUR 1,000)                | **Partial**         | Threshold-based identification exists but configured for Mexican UMA thresholds | Configurable CDD thresholds per entity type / vulnerable activity; VASP preset at 1,000 USD/EUR equivalent | **High**   |
| **R.15.3** VASP licensing/registration verification                   | **Not Implemented** | —                                                                               | For VASP clients: license/registration status fields and verification                                      | **Medium** |
| **R.15.4** VA-specific operation types                                | **Implemented**     | Virtual asset operation types in `aml-svc` operation extensions                 | —                                                                                                          | —          |
| **R.15.5** Travel rule compliance for VA transfers (R.16 application) | **Not Implemented** | —                                                                               | See R.16 requirements below, applied to VA transfers: originator/beneficiary VASP information              | **High**   |

### R.16 — Payment Transparency (Travel Rule)

**FATF Requirement (Jun 2025 revision):** Originator and beneficiary information must accompany all payments/transfers throughout the payment chain. Structured per ISO 20022. Differentiated requirements for cross-border vs. domestic, above vs. below threshold.

**Applicability:** Relevant for FI/VASP clients handling wire transfers and VA transfers.

| Sub-requirement                                                              | Status              | Current Feature                            | Gap / Needed Feature                                                                                                 | Priority   |
| ---------------------------------------------------------------------------- | ------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.16.1** Cross-border transfers above threshold — full originator info     | **Not Implemented** | —                                          | Transfer data model with originator fields: name, account, address, DOB (natural), BIC/LEI/official ID (legal)       | **High**   |
| **R.16.2** Cross-border transfers above threshold — full beneficiary info    | **Not Implemented** | —                                          | Transfer data model with beneficiary fields: name, account, country/city, BIC/LEI/official ID (legal)                | **High**   |
| **R.16.3** Cross-border transfers below threshold — minimum info             | **Not Implemented** | —                                          | Simplified transfer data: name + account for both parties                                                            | **High**   |
| **R.16.4** Domestic transfers — originator info (or available within 3 days) | **Not Implemented** | —                                          | Domestic transfer tracking with originator info or reference mechanism                                               | **Medium** |
| **R.16.5** Monitor for missing information                                   | **Not Implemented** | —                                          | Alert rules for transfers missing required originator/beneficiary information                                        | **High**   |
| **R.16.6** Sanctions screening on transfers                                  | **Partial**         | Sanctions screening exists at client level | Apply sanctions screening to transfer originator/beneficiary names at transaction level                              | **High**   |
| **R.16.7** VA transfer travel rule (from R.15 NIR para. 7(b))                | **Not Implemented** | —                                          | VASP-to-VASP transfer information requirements: originator VASP obtains/maintains/transmits info to beneficiary VASP | **High**   |

### R.17 — Reliance on Third Parties

**FATF Requirement:** Countries may allow FIs to rely on third parties for CDD elements (a)–(c), with specific conditions: immediate information access, copies available on request, third party is regulated/supervised.

**Applicability:** Platform can support delegation/reliance workflows.

| Sub-requirement                                     | Status              | Current Feature | Gap / Needed Feature                                                                                                                             | Priority   |
| --------------------------------------------------- | ------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **R.17.1** Third-party CDD reliance documentation   | **Not Implemented** | —               | Module to record reliance on third parties: which entity, what CDD elements delegated, regulatory status of third party, country risk assessment | **Medium** |
| **R.17.2** Immediate access to third-party CDD data | **Not Implemented** | —               | Integration capability or import mechanism for CDD data from third parties                                                                       | **Medium** |

### R.18 — Internal Controls, Foreign Branches and Subsidiaries

**FATF Requirement:** FIs must implement AML/CFT programs. Financial groups must implement group-wide programs with information sharing. Foreign branches/subsidiaries must apply home-country measures.

**Applicability:** Platform should support compliance program management.

| Sub-requirement                                                  | Status              | Current Feature                                                         | Gap / Needed Feature                                                                                                  | Priority   |
| ---------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.18.1** Compliance management arrangements                    | **Partial**         | Organization settings in `auth-svc`/`aml-svc`, role-based access        | Compliance officer designation module: named compliance officer, reporting lines, independence documentation          | **High**   |
| **R.18.2** Screening procedures                                  | **Implemented**     | Watchlist screening (`watchlist-svc`), alert rules (`aml-alert-worker`) | —                                                                                                                     | —          |
| **R.18.3** Ongoing employee training program                     | **Not Implemented** | —                                                                       | Training module: training plan management, completion tracking, training material library, training records for audit | **Medium** |
| **R.18.4** Independent audit function                            | **Not Implemented** | —                                                                       | Audit scheduling, findings tracking, remediation workflow                                                             | **Medium** |
| **R.18.5** Group-wide AML program (multi-entity)                 | **Partial**         | Multi-tenant organization model in `auth-svc`                           | Group-level policy management: parent org can define policies for subsidiaries; consolidated group reporting          | **Medium** |
| **R.18.6** Information sharing within group (unusual/suspicious) | **Partial**         | Notifications service exists                                            | Cross-entity alert sharing within organizational groups; suspicious activity flag propagation                         | **Medium** |

### R.19 — Higher-Risk Countries

**FATF Requirement:** FIs must apply EDD to relationships/transactions with persons from FATF-identified higher-risk countries. Countries must be able to apply countermeasures.

**Applicability:** Core feature — automated country risk classification and EDD triggers.

| Sub-requirement                                             | Status              | Current Feature              | Gap / Needed Feature                                                                                                                                  | Priority     |
| ----------------------------------------------------------- | ------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **R.19.1** Country risk classification                      | **Partial**         | Country catalog in `aml-svc` | Country risk classification engine: FATF grey list, black list, Transparency International CPI, Basel AML Index integration; risk scoring per country | **Critical** |
| **R.19.2** Auto-trigger EDD for higher-risk country clients | **Not Implemented** | —                            | When client or counterparty is from a higher-risk country, auto-trigger EDD workflow; block simplified CDD                                            | **Critical** |
| **R.19.3** FATF call-for-action country list integration    | **Not Implemented** | —                            | Automated ingestion of FATF "Jurisdictions under Increased Monitoring" and "High-Risk Jurisdictions" lists                                            | **High**     |
| **R.19.4** Countermeasure application                       | **Not Implemented** | —                            | Configurable countermeasures per country: enhanced reporting, transaction limits, relationship restrictions                                           | **Medium**   |

### R.20 — Suspicious Transaction Reporting (STR/ROS)

**FATF Requirement:** FIs must report promptly to the FIU when there is suspicion or reasonable grounds to suspect that funds are proceeds of crime or related to TF. Required by law. No threshold.

**Applicability:** Core platform feature — alert-to-STR pipeline.

| Sub-requirement                           | Status          | Current Feature                                                                         | Gap / Needed Feature                                                                                        | Priority   |
| ----------------------------------------- | --------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------- |
| **R.20.1** Detect suspicious activity     | **Implemented** | Alert rules in `aml-alert-worker`; UMA threshold monitoring; watchlist screening alerts | —                                                                                                           | —          |
| **R.20.2** Alert investigation workflow   | **Implemented** | Alerts module in `aml-svc` with alert detail views in AML UI                            | —                                                                                                           | —          |
| **R.20.3** STR/ROS filing to FIU          | **Partial**     | Notices workflow in `aml-svc` (Mexico SAT focus); SAT XML generation                    | Multi-jurisdiction STR filing: templates and submission workflows for different FIUs (not just Mexico SAT)  | **High**   |
| **R.20.4** Include attempted transactions | **Partial**     | Alert rules can fire on operations                                                      | Explicit "attempted transaction" flag on operations; alert rules that capture blocked/rejected transactions | **Medium** |
| **R.20.5** No minimum threshold for STR   | **Implemented** | Alert rules are configurable without minimum threshold                                  | —                                                                                                           | —          |
| **R.20.6** Prompt reporting               | **Partial**     | Notices workflow includes deadlines and notifications                                   | SLA tracking: time-to-file metrics; escalation when approaching regulatory deadlines                        | **High**   |
| **R.20.7** STR quality and completeness   | **Partial**     | Notice forms with required fields                                                       | STR template validation: ensure all required fields populated before submission; quality score              | **Medium** |

### R.21 — Tipping-Off and Confidentiality

**FATF Requirement:** FI staff must be protected from liability for good-faith STR filing and prohibited from disclosing that an STR is being filed.

**Applicability:** Platform access controls and audit trail support confidentiality.

| Sub-requirement                                            | Status      | Current Feature                                   | Gap / Needed Feature                                                                                                                           | Priority |
| ---------------------------------------------------------- | ----------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **R.21.1** Restrict STR visibility to authorized personnel | **Partial** | Role-based access in `auth-svc`                   | Granular STR access controls: only designated compliance officers can view/file STRs; audit log of all STR access                              | **High** |
| **R.21.2** Prevent tipping-off through system design       | **Partial** | Alert/notice data is within the compliance module | Ensure client-facing interfaces never reveal STR existence; separate STR workflow from general case management visible to non-compliance staff | **High** |

### R.22 — DNFBPs: Customer Due Diligence

**FATF Requirement:** CDD requirements of R.10, R.11, R.12, R.15, R.17 apply to DNFBPs in their respective activities.

**Applicability:** Janovix already serves DNFBPs as obligated entities (vulnerable activities under LFPIORPI). All R.10 features apply.

| Sub-requirement                                   | Status          | Current Feature                                                        | Gap / Needed Feature                                                                      | Priority   |
| ------------------------------------------------- | --------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------- |
| **R.22.1** Casino CDD                             | **Partial**     | Operation types may cover gambling                                     | Casino-specific operation types and CDD thresholds                                        | **Low**    |
| **R.22.2** Real estate agent CDD                  | **Implemented** | Real estate operations in `aml-svc` (immobiliaria vulnerable activity) | —                                                                                         | —          |
| **R.22.3** Precious metals/stones dealer CDD      | **Implemented** | Jewelry/precious operations in `aml-svc` (joyería vulnerable activity) | —                                                                                         | —          |
| **R.22.4** Lawyer/notary/accountant CDD           | **Partial**     | General client/operation framework supports these professions          | Pre-configured CDD templates specific to legal/accounting professional activities         | **Medium** |
| **R.22.5** Trust and company service provider CDD | **Partial**     | Trust (fideicomiso) client type exists                                 | TCSP-specific CDD fields: nature of service provided, identification of all trust parties | **Medium** |

### R.23 — DNFBPs: Other Measures

**FATF Requirement:** R.18–R.21 apply to all DNFBPs. STR reporting obligations for specific DNFBP activities.

**Applicability:** All internal controls and STR features apply to DNFBP users.

| Sub-requirement                    | Status          | Current Feature                                    | Gap / Needed Feature                                               | Priority   |
| ---------------------------------- | --------------- | -------------------------------------------------- | ------------------------------------------------------------------ | ---------- |
| **R.23.1** DNFBP internal controls | **Partial**     | Organization settings, role-based access           | Same as R.18 gaps: compliance officer designation, training, audit | **Medium** |
| **R.23.2** DNFBP STR reporting     | **Implemented** | Notices workflow applies to all obligated entities | —                                                                  | —          |

---

## Group E — Transparency and Beneficial Ownership

### R.24 — Transparency and Beneficial Ownership of Legal Persons

**FATF Requirement:** Countries must ensure adequate/accurate/up-to-date BO information through registries or alternative mechanisms. No new bearer shares. Measures against nominee misuse. FIs/DNFBPs should have access to BO information.

**Applicability:** Platform must support BO data collection, verification, and maintenance for legal person clients.

| Sub-requirement                                            | Status              | Current Feature                                                              | Gap / Needed Feature                                                                                                                                    | Priority   |
| ---------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.24.1** Collect BO information for legal person clients | **Implemented**     | Shareholders and beneficial controllers models in `aml-svc`; forms in AML UI | —                                                                                                                                                       | —          |
| **R.24.2** Verify BO identity                              | **Partial**         | BO data collected but verification process not formalized                    | BO verification workflow: document requirements for BO identification, verification status tracking, discrepancy resolution                             | **High**   |
| **R.24.3** Understand ownership and control structure      | **Partial**         | Shareholder percentages and controller roles stored                          | Ownership structure visualization: chain-of-ownership diagram; UBO determination logic (thresholds, e.g., 25%); multi-layer corporate structure support | **High**   |
| **R.24.4** Keep BO information current                     | **Partial**         | Edit capability exists                                                       | Periodic BO review requirements: scheduled reviews, change detection triggers, staleness alerts                                                         | **High**   |
| **R.24.5** Nominee shareholder/director identification     | **Not Implemented** | —                                                                            | Nominee indicator flag on shareholders/directors; require identification of the nominator behind the nominee                                            | **Medium** |
| **R.24.6** Bearer share flag                               | **Not Implemented** | —                                                                            | Flag/block entities with bearer shares; risk indicator                                                                                                  | **Medium** |
| **R.24.7** Access BO registries                            | **Not Implemented** | —                                                                            | Integration with national BO registries (where available) for verification cross-check                                                                  | **Medium** |

### R.25 — Transparency and Beneficial Ownership of Legal Arrangements

**FATF Requirement:** Countries must ensure adequate/accurate/up-to-date information on trusts (settlor, trustee, protector, beneficiaries, any person with effective final control).

**Applicability:** Platform must support trust/fideicomiso party identification.

| Sub-requirement                           | Status              | Current Feature                                                      | Gap / Needed Feature                                                                                                                                                      | Priority   |
| ----------------------------------------- | ------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.25.1** Identify all trust parties     | **Partial**         | Trust (fideicomiso) client type exists; beneficial controllers model | Structured trust party fields: settlor(s), trustee(s), protector(s), beneficiary class, persons with effective control — each as linked entities with full identification | **High**   |
| **R.25.2** Verify trust party identities  | **Not Implemented** | —                                                                    | Verification workflow for each trust party (same as R.24.2 for trust context)                                                                                             | **High**   |
| **R.25.3** Keep trust information current | **Partial**         | Edit capability exists                                               | Scheduled review for trust party information; change notification triggers                                                                                                | **Medium** |

---

## Group F — Powers and Responsibilities of Competent Authorities

### R.26 — Regulation and Supervision of Financial Institutions

**FATF Requirement:** FIs must be subject to adequate regulation/supervision. Prevent criminals from owning/managing FIs. No shell banks.

**Applicability:** Directed at supervisors. Platform supports supervised entities' compliance.

| Sub-requirement                            | Status              | Current Feature          | Gap / Needed Feature                                                                                           | Priority   |
| ------------------------------------------ | ------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.26.1** Supervisory examination support | **Partial**         | Audit logs, data exports | Examination readiness module: pre-formatted regulatory examination data packages; supervisor access portal     | **Medium** |
| **R.26.2** Fit-and-proper checks           | **Not Implemented** | —                        | Screening of FI owners/directors as part of organizational setup; BO screening for the obligated entity itself | **Medium** |

### R.27 — Powers of Supervisors

**FATF Requirement:** Supervisors must have powers to inspect, compel information, and impose sanctions.

**Applicability:** Directed at supervisors.

| Sub-requirement                           | Status      | Current Feature             | Gap / Needed Feature                                      | Priority   |
| ----------------------------------------- | ----------- | --------------------------- | --------------------------------------------------------- | ---------- |
| **R.27.1** Support supervisor inspections | **Partial** | Data exists in the platform | Read-only supervisor access role; examination data export | **Medium** |

### R.28 — Regulation and Supervision of DNFBPs

**FATF Requirement:** DNFBPs subject to effective AML/CFT monitoring/compliance systems.

**Applicability:** Directed at supervisors/SRBs. Platform serves DNFBPs.

| Sub-requirement                             | Status      | Current Feature                                          | Gap / Needed Feature                                        | Priority   |
| ------------------------------------------- | ----------- | -------------------------------------------------------- | ----------------------------------------------------------- | ---------- |
| **R.28.1** DNFBP compliance program support | **Partial** | All compliance features available to DNFBP organizations | Same as R.18 gaps: formalized compliance program management | **Medium** |

### R.29 — Financial Intelligence Units (FIU)

**FATF Requirement:** Countries must establish FIU as national STR center. FIU must access financial, administrative, and law enforcement information.

**Applicability:** Platform supports STR filing to FIU and information provision.

| Sub-requirement                                  | Status              | Current Feature                   | Gap / Needed Feature                                                                                                                      | Priority |
| ------------------------------------------------ | ------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **R.29.1** STR filing to FIU                     | **Partial**         | Notices workflow (Mexico SAT)     | Multi-jurisdiction FIU filing: configurable FIU submission channels, electronic filing formats (XML, API, portal upload) per jurisdiction | **High** |
| **R.29.2** Respond to FIU information requests   | **Not Implemented** | —                                 | FIU request management: receive, track, fulfill information requests from FIU; response documentation                                     | **High** |
| **R.29.3** Provide additional information to FIU | **Partial**         | Data exists and could be exported | Structured FIU information packages: client data, transaction history, screening results, alert history for a given case                  | **High** |

### R.30 — Law Enforcement Responsibilities

**FATF Requirement:** Designated authorities must investigate ML/TF, conduct parallel financial investigations.

**Applicability:** Directed at authorities. Platform can support information provision.

| Sub-requirement                             | Status              | Current Feature | Gap / Needed Feature                                                                                                    | Priority   |
| ------------------------------------------- | ------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.30.1** Support law enforcement requests | **Not Implemented** | —               | Authority request management module (similar to R.29.2): track requests from law enforcement, prepare response packages | **Medium** |

### R.31 — Powers of Law Enforcement

**FATF Requirement:** Authorities must access documents and information, use investigative techniques.

**Applicability:** Directed at authorities. Platform enables data availability.

| Sub-requirement                              | Status      | Current Feature                       | Gap / Needed Feature                                                                                                             | Priority   |
| -------------------------------------------- | ----------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.31.1** Data availability for authorities | **Partial** | All data stored in platform databases | Authority data export: structured export of all client, transaction, alert, and STR data in formats suitable for law enforcement | **Medium** |

### R.32 — Cash Couriers

**FATF Requirement:** Detect physical cross-border transport of currency and bearer negotiable instruments.

**Applicability:** Generally directed at customs/border authorities. Some FIs may need to flag cross-border cash transactions.

| Sub-requirement                                | Status              | Current Feature | Gap / Needed Feature                                                                       | Priority |
| ---------------------------------------------- | ------------------- | --------------- | ------------------------------------------------------------------------------------------ | -------- |
| **R.32.1** Cross-border cash transaction flags | **Not Implemented** | —               | Operation flag for cash transported across borders; threshold alerts for cash declarations | **Low**  |

### R.33 — Statistics

**FATF Requirement:** Countries must maintain comprehensive AML/CFT statistics.

**Applicability:** Platform should provide compliance statistics dashboards for obligated entities and potentially for supervisors.

| Sub-requirement                             | Status              | Current Feature                                    | Gap / Needed Feature                                                                                   | Priority   |
| ------------------------------------------- | ------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| **R.33.1** STR statistics                   | **Partial**         | Dashboard exists in AML UI; alerts/notices counted | Comprehensive STR analytics: filed/pending/rejected counts, time-to-file, by type, by period, trends   | **High**   |
| **R.33.2** Screening statistics             | **Partial**         | Query audit in `watchlist-svc`                     | Screening analytics: total screens, match rates, false positive rates, resolution times, by list type  | **High**   |
| **R.33.3** Client risk distribution         | **Not Implemented** | —                                                  | Client risk distribution dashboard: count by risk level, by client type, by country, by activity       | **High**   |
| **R.33.4** Operation/transaction statistics | **Partial**         | Operations listed in AML UI                        | Operation analytics: volume, value, by type, by risk level, unusual transaction patterns               | **Medium** |
| **R.33.5** Regulatory reporting statistics  | **Partial**         | Notices/reports modules                            | Compliance KPI dashboard: filing timeliness, CDD completion rates, training completion, audit findings | **High**   |

### R.34 — Guidance and Feedback

**FATF Requirement:** Authorities and SRBs must provide guidelines and feedback.

**Applicability:** Platform can embed guidance for users.

| Sub-requirement                            | Status              | Current Feature                | Gap / Needed Feature                                                                                                                                       | Priority   |
| ------------------------------------------ | ------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **R.34.1** Built-in compliance guidance    | **Partial**         | Some contextual guidance in UI | In-app compliance guidance: regulatory reference library, STR filing guides, CDD checklists, risk assessment templates, tooltips with regulatory citations | **Medium** |
| **R.34.2** Regulatory update notifications | **Not Implemented** | —                              | Regulatory change notification system: alert users to relevant regulatory changes affecting their obligations                                              | **Medium** |

### R.35 — Sanctions

**FATF Requirement:** Effective, proportionate, and dissuasive sanctions for AML/CFT non-compliance.

**Applicability:** Directed at countries. Platform tracks compliance status.

| Sub-requirement                           | Status              | Current Feature | Gap / Needed Feature                                                                                                                                   | Priority   |
| ----------------------------------------- | ------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **R.35.1** Compliance deficiency tracking | **Not Implemented** | —               | Internal compliance deficiency tracker: log identified deficiencies, remediation plans, deadlines, status — supports supervisory examination readiness | **Medium** |

---

## Group G — International Cooperation

### R.36 — International Instruments

**FATF Requirement:** Ratify and implement Vienna, Palermo, UN Corruption, and TF Conventions.

**Applicability:** Directed at countries.

| Sub-requirement | Status             | Current Feature | Gap / Needed Feature | Priority |
| --------------- | ------------------ | --------------- | -------------------- | -------- |
| **R.36.1**      | **N/A (Platform)** | —               | —                    | —        |

### R.37 — Mutual Legal Assistance

**FATF Requirement:** Provide rapid MLA for ML/TF investigations.

**Applicability:** Directed at countries/authorities.

| Sub-requirement | Status             | Current Feature | Gap / Needed Feature | Priority |
| --------------- | ------------------ | --------------- | -------------------- | -------- |
| **R.37.1**      | **N/A (Platform)** | —               | —                    | —        |

### R.38 — MLA: Freezing and Confiscation

**FATF Requirement:** Act on foreign freezing/confiscation requests.

**Applicability:** Directed at countries/authorities. FIs may need to execute foreign freeze orders.

| Sub-requirement                          | Status              | Current Feature | Gap / Needed Feature                                                          | Priority   |
| ---------------------------------------- | ------------------- | --------------- | ----------------------------------------------------------------------------- | ---------- |
| **R.38.1** Execute foreign freeze orders | **Not Implemented** | —               | Foreign freeze order execution workflow (covered under R.6.5 freeze workflow) | **Medium** |

### R.39 — Extradition

**FATF Requirement:** Execute extradition requests for ML/TF.

**Applicability:** Directed at countries.

| Sub-requirement | Status             | Current Feature | Gap / Needed Feature | Priority |
| --------------- | ------------------ | --------------- | -------------------- | -------- |
| **R.39.1**      | **N/A (Platform)** | —               | —                    | —        |

### R.40 — Other Forms of International Cooperation

**FATF Requirement:** Competent authorities must provide widest range of international cooperation.

**Applicability:** Directed at authorities. Platform supports information provision for international requests.

| Sub-requirement                                       | Status              | Current Feature | Gap / Needed Feature                                                                     | Priority   |
| ----------------------------------------------------- | ------------------- | --------------- | ---------------------------------------------------------------------------------------- | ---------- |
| **R.40.1** Support international information requests | **Not Implemented** | —               | Same as R.29.2/R.30.1: authority request management supporting international cooperation | **Medium** |

---

## Summary: Feature Gap Analysis

### Critical Priority (Must Have)

| #   | Feature                                                                                                                                                                            | Recommendations Addressed      |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 1   | **Risk Assessment Module** — Entity-level risk assessment with configurable risk matrix, scoring methodology, documentation, periodic review                                       | R.1.1, R.1.2, R.1.3, R.1.4     |
| 2   | **Client Risk Classification Engine** — Aggregate risk score from multiple factors (country, activity, product, PEP, screening, transactions) driving CDD depth                    | R.1.6, R.1.7, R.10.3           |
| 3   | **Enhanced Due Diligence (EDD) Workflow** — Additional info collection, source of wealth/funds, senior management approval, enhanced monitoring — triggered by risk classification | R.1.9, R.10.10, R.12.5, R.12.6 |
| 4   | **Country Risk Classification** — FATF grey/black list integration, CPI, Basel AML Index; auto-trigger EDD for higher-risk countries                                               | R.19.1, R.19.2                 |
| 5   | **Ongoing Screening Automation** — Re-screen all clients when sanctions lists update; event-driven, configurable frequency                                                         | R.6.4                          |
| 6   | **Ongoing Monitoring Enhancement** — Continuous transaction monitoring against client profile; consistency checks; automated review triggers                                       | R.10.2(d)                      |

### High Priority (Near-Term Roadmap)

| #   | Feature                                                                                                                                                 | Recommendations Addressed         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 7   | **Simplified CDD Workflow** — Reduced requirements for low-risk clients; deferred verification; reduced monitoring                                      | R.1.8, R.10.11                    |
| 8   | **Freeze Order Workflow** — Execute/document freeze actions with timestamps, notifications, and reporting                                               | R.6.5, R.6.6, R.6.7, R.7.2, R.7.3 |
| 9   | **False Positive Resolution Workflow** — Structured investigation, documentation, approval, unfreezing for screening matches                            | R.6.8                             |
| 10  | **Sanctions Update Notifications** — Automated alerts to compliance officers when screening lists change                                                | R.6.10                            |
| 11  | **PEP Enhanced Measures** — Senior management approval workflow, source of wealth/funds fields, PEP-specific monitoring rules, family/associate linking | R.12.5, R.12.6, R.12.7, R.12.8    |
| 12  | **Purpose of Relationship** — Structured questionnaire for understanding business relationship intent                                                   | R.10.2(c)                         |
| 13  | **CDD Failure Actions** — Block operations when CDD incomplete; forced termination; auto-trigger STR consideration                                      | R.10.6                            |
| 14  | **Periodic CDD Review** — Scheduler based on risk tier; batch re-verification campaigns for existing clients                                            | R.10.7, R.10.13                   |
| 15  | **Higher/Lower Risk Factor Engine** — Configurable risk factors per Interpretive Note para. 15-17; feed into risk classification                        | R.10.8, R.10.9                    |
| 16  | **Travel Rule / Payment Transparency** — Originator/beneficiary data model for wire transfers and VA transfers; missing-info alerts                     | R.16.1–R.16.7, R.15.5             |
| 17  | **BO Verification Workflow** — Document requirements, verification status tracking, discrepancy resolution                                              | R.24.2, R.24.3, R.24.4            |
| 18  | **Trust Party Structured Fields** — Settlor, trustee, protector, beneficiary class as linked entities                                                   | R.25.1, R.25.2                    |
| 19  | **Multi-Jurisdiction STR Filing** — Templates and submission workflows for FIUs beyond Mexico SAT                                                       | R.20.3, R.29.1                    |
| 20  | **FIU Request Management** — Receive, track, fulfill, document information requests from FIU                                                            | R.29.2, R.29.3                    |
| 21  | **STR Access Controls** — Granular access; audit trail; tipping-off prevention by design                                                                | R.21.1, R.21.2                    |
| 22  | **Compliance Statistics Dashboard** — STR analytics, screening metrics, risk distribution, filing timeliness, CDD completion rates                      | R.33.1–R.33.5                     |
| 23  | **VASP CDD Threshold Configuration** — Configurable CDD thresholds per entity type (1,000 USD/EUR for VASPs)                                            | R.15.2                            |
| 24  | **FATF Country List Integration** — Automated ingestion of "Increased Monitoring" and "High-Risk Jurisdictions" lists                                   | R.19.3                            |
| 25  | **Compliance Officer Designation** — Named officer, reporting lines, independence documentation                                                         | R.18.1                            |
| 26  | **Additional National Sanctions Lists** — EU, UK HMT, and other national terrorism designation lists                                                    | R.6.2                             |
| 27  | **Authority Data Export** — Structured export for supervisors and law enforcement                                                                       | R.11.3, R.31.1                    |

### Medium Priority (Mid-Term Roadmap)

| #   | Feature                                                                                  | Recommendations Addressed |
| --- | ---------------------------------------------------------------------------------------- | ------------------------- |
| 28  | **Risk Assessment Documentation** — Export/submission capability; version history        | R.1.5                     |
| 29  | **Predicate Offence Taxonomy** — 21 FATF crime categories for STR classification         | R.3.1                     |
| 30  | **Asset Freezing Order Documentation** — Execute/document orders from authorities        | R.4.1                     |
| 31  | **TF-Specific Alert Rules** — TF typologies and indicators                               | R.5.1                     |
| 32  | **Delisting/Unfreezing Workflow** — Process delisting notifications                      | R.6.9                     |
| 33  | **NPO Risk Assessment** — NPO-specific risk factors and CDD templates                    | R.8.1, R.8.2, R.8.3       |
| 34  | **PF Risk Assessment** — PF-specific risk indicators within sanctions compliance         | R.7.4                     |
| 35  | **Record Retention Policy** — Configurable retention, archival, scheduled purge          | R.11.1, R.11.2            |
| 36  | **New Product Risk Assessment Template** — Pre-launch ML/TF risk assessment              | R.15.1                    |
| 37  | **Third-Party CDD Reliance** — Documentation and data import from third parties          | R.17.1, R.17.2            |
| 38  | **Training Module** — Plan management, completion tracking, material library             | R.18.3                    |
| 39  | **Audit Function** — Scheduling, findings tracking, remediation workflow                 | R.18.4                    |
| 40  | **Group-Level Policy Management** — Parent org policies for subsidiaries                 | R.18.5, R.18.6            |
| 41  | **Countermeasure Configuration** — Per-country restrictions and enhanced measures        | R.19.4                    |
| 42  | **STR Quality Validation** — Pre-submission completeness and quality checks              | R.20.7                    |
| 43  | **SLA Tracking** — Time-to-file metrics and escalation                                   | R.20.6                    |
| 44  | **DNFBP-Specific CDD Templates** — Pre-configured for legal, accounting, TCSP activities | R.22.4, R.22.5            |
| 45  | **Nominee Indicator** — Flag and require nominator identification                        | R.24.5                    |
| 46  | **Bearer Share Flag** — Risk indicator for entities with bearer shares                   | R.24.6                    |
| 47  | **BO Registry Integration** — Cross-check against national registries                    | R.24.7                    |
| 48  | **Ownership Structure Visualization** — Chain-of-ownership diagrams; UBO threshold logic | R.24.3                    |
| 49  | **Examination Readiness Module** — Pre-formatted data packages for supervisors           | R.26.1, R.27.1            |
| 50  | **Compliance Deficiency Tracker** — Log deficiencies, remediation plans, deadlines       | R.35.1                    |
| 51  | **In-App Compliance Guidance** — Regulatory reference library, CDD checklists, tooltips  | R.34.1                    |
| 52  | **Regulatory Change Notifications** — Alert users to regulatory updates                  | R.34.2                    |
| 53  | **Law Enforcement Request Management** — Track and respond to authority requests         | R.30.1, R.40.1            |
| 54  | **VASP License Verification** — License/registration status fields                       | R.15.3                    |
| 55  | **Attempted Transaction Tracking** — Explicit flag for blocked/rejected transactions     | R.20.4                    |
| 56  | **Fit-and-Proper Checks** — Screen FI/DNFBP owners/directors                             | R.26.2                    |
| 57  | **Domestic PEP List Expansion** — Additional jurisdictions beyond Mexico                 | R.12.3                    |
| 58  | **International Organization PEP Coverage** — Heads/senior officials                     | R.12.4                    |
| 59  | **Trust Party Periodic Review** — Scheduled review for trust information                 | R.25.3                    |

### Low Priority (Long-Term / Vertical-Specific)

| #   | Feature                                                                       | Recommendations Addressed |
| --- | ----------------------------------------------------------------------------- | ------------------------- |
| 60  | **Correspondent Banking Module** — Due diligence, approval, shell bank checks | R.13.1, R.13.2, R.13.3    |
| 61  | **MVTS Agent Registry** — License verification and agent tracking             | R.14.1                    |
| 62  | **Casino CDD Module** — Casino-specific thresholds and operations             | R.22.1                    |
| 63  | **Cross-Border Cash Flags** — Cash transport threshold alerts                 | R.32.1                    |

---

## Coverage Summary

| Status                     | Count   | %    |
| -------------------------- | ------- | ---- |
| **Implemented**            | 18      | 14%  |
| **Partial**                | 42      | 33%  |
| **Not Implemented**        | 49      | 39%  |
| **N/A (Platform/Scope)**   | 17      | 14%  |
| **Total sub-requirements** | **126** | 100% |

| Priority       | Count (gaps only) | % of gaps |
| -------------- | ----------------- | --------- |
| **Critical**   | 6                 | 10%       |
| **High**       | 21                | 34%       |
| **Medium**     | 28                | 45%       |
| **Low**        | 4                 | 6%        |
| **N/A**        | 2                 | 3%        |
| **Total gaps** | **61**            | 100%      |

> **Key takeaway:** Janovix has strong foundational coverage of core CDD (R.10), sanctions screening (R.6/R.7), PEP screening (R.12), record keeping (R.11), and STR workflows (R.20). The most critical gaps are in **risk assessment/classification** (R.1), **enhanced due diligence workflows** (R.10/R.12), **country risk management** (R.19), **ongoing monitoring automation** (R.10(d)), and **ongoing screening on list updates** (R.6.4). These 6 critical features form the highest-priority development track for comprehensive FATF compliance coverage.

---

_Document generated April 2026. Based on FATF/GAFI Recommendations December 2025 edition and Janovix codebase analysis. For the FATF analysis summary, see `01-fatf-gafi-recommendations-analysis.md`._
