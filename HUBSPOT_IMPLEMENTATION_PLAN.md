## AVAJEN HubSpot Landing Pages & Modules – Implementation Plan

### 1. Goals & Scope

- **Primary goal**: Rebuild the two React landing pages (`LandingPageA` and `LandingPageB`) as **HubSpot-native landing pages** so the client can:
  - Edit content in the HubSpot page editor.
  - Reuse key sections as **modules** across other pages.
  - Capture leads via **HubSpot forms** (guide download, IT confidence check, strategy review).
- **Out of scope (for now)**: Complex app-like flows; we will stick to standard HubSpot pages, modules, and forms.

### 2. Content & UX Breakdown

- **Landing Page A – IT Solutions**
  - Hero section with background image, headline, subcopy, and primary/secondary CTAs.
  - “Questions” grid (4 cards).
  - “Free Guide” section:
    - Left: Text content, bullets.
    - Right: **Form** for guide download (name, email, submit button).
  - “What Performance-Driven IT Looks Like” (4 feature cards).
  - “Why AVAJEN” section with list and icon rows.
  - Final CTA section with headline + button (“Book a 30-Minute IT Strategy Review”).
- **Landing Page B – IT Confidence Check**
  - Hero section with background image, headline, subcopy, and 2 CTAs (start check / schedule strategy review).
  - Hidden Issues section with bullet cards and CTA.
  - Assessment Areas grid (cards).
  - “What Happens After” 3-step section.
  - “What is Performance-Driven IT” + real-estate specific bullets.
  - Final CTA with dual buttons (take check / schedule review).

### 3. HubSpot Architecture Decisions

- **Theme vs. stand-alone templates**
  - Create a dedicated **AVAJEN theme** in HubSpot via CLI (recommended).
  - Include global styles (colors, typography, spacing) matching the current Vite/Tailwind design.
- **Page templates**
  - `avajen-landing-a.html` – page template for IT Solutions.
  - `avajen-landing-b.html` – page template for IT Confidence Check.
  - Both templates will be assembled from reusable modules below.
- **Reusable modules (for HubSpot page editor)**
  - `avajen-header` – logo, navigation links, CTA button.
  - `avajen-footer` – footer links, copyright, etc.
  - `hero-primary-cta` – hero with background image, text fields, primary and secondary CTAs.
  - `questions-grid` – 2–4 question cards with configurable question/answer/bullets.
  - `guide-download-section` – text + **HubSpot form** for guide download.
  - `feature-cards-grid` – up to 4 feature cards with icon, title, description.
  - `why-avajen-section` – text column + bullet list + icon rows.
  - `assessment-areas-grid` – multi-card assessment area section.
  - `three-step-process` – numbered 3-step section.
  - `final-cta` – centered headline, description, and one/two CTA buttons.
- **Forms & CTAs**
  - Create / configure in HubSpot:
    - **Guide Download Form** (Name, Work Email, optional additional fields).
    - **IT Confidence Check Form** (can be a short questionnaire form or simple lead form).
    - **Schedule a Strategy Review Form** (may link to HubSpot meeting link or form).
  - Use HubSpot **form module** or custom module with embedded HubSpot form (form ID configurable).
  - Attach HubSpot workflows:
    - Send guide download email with PDF link.
    - Notify sales/CS team.
    - Tag contact with appropriate lifecycle stage / list.

### 4. Technical Setup with HubSpot CLI

- **4.1. Prerequisites**
  - Node.js **20+** installed as per HubSpot docs ([Install the HubSpot CLI](https://developers.hubspot.com/docs/developer-tooling/local-development/hubspot-cli/install-the-cli)).
  - Install HubSpot CLI globally:
    - `npm install -g @hubspot/cli`
  - Authenticate:
    - `hs account auth` and configure the client’s portal.

- **4.2. Create / configure AVAJEN theme**
  - Use CLI to create a **theme** (if none exists yet) in a local project folder.
  - Set up:
    - `theme.json` (colors, fonts, spacing tokens).
    - `base.html` layout with header/footer and HubL `{{ widget_area }}` / `{{ content }}` placeholders.
    - Global CSS/JS: translate Tailwind styles into HubSpot-compatible CSS (likely via static CSS rather than Tailwind at runtime).

- **4.3. Build HubSpot modules**
  - For each module listed in Section 3:
    - Create `.module.html` + `fields.json` (or `meta.json`) via CLI.
    - Map fields:
      - Text, rich text, image, boolean, select, CTA link, HubSpot form, etc.
    - Implement markup + HubL tokens using the existing React/Tailwind markup as visual reference.
    - Ensure modules are **responsive** and match current visual design.

- **4.4. Build landing page templates**
  - Create `avajen-landing-a.html` template that:
    - Includes header/footer modules.
    - Places hero, questions, guide download, features, why-avajen, and final CTA modules in order.
  - Create `avajen-landing-b.html` template with equivalent module composition for the confidence-check narrative.

- **4.5. Upload & sync**
  - Use HubSpot CLI to:
    - Upload theme, modules, and templates to the client portal (e.g., `hs upload` or `hs watch`).
    - Iterate until no validation errors.

### 5. Data & Integration Requirements

- **Forms & guide delivery**
  - Map each on-page form (download, confidence check, schedule review) to a specific HubSpot **form ID**.
  - For guide download:
    - Host the PDF or asset in HubSpot Files.
    - Configure a workflow: on form submission, send follow-up email with the guide.
- **Meetings / scheduling**
  - Decide whether CTAs (“Schedule a Strategy Review”) link to:
    - A HubSpot **Meetings** link, or
    - A HubSpot landing page with an embedded form.
- **Tracking & analytics**
  - Ensure standard HubSpot tracking is enabled.
  - Optionally configure:
    - Campaign association for both landing pages.
    - Event tracking for key CTAs if needed.

### 6. Editor Experience Requirements (for Client Admins)

- Each module should expose only the **necessary fields**:
  - Headline, subheadline, body text.
  - Button label and link.
  - Background images and overlay colors where relevant.
  - Form selection drop-down (HubSpot form).
- Modules must:
  - Be reusable on any HubSpot landing page.
  - Provide sensible default content for previews.
  - Respect theme typography/colors so brand stays consistent.

### 7. QA & Launch Checklist

- **Design parity**
  - Compare HubSpot pages to current React versions for layout, spacing, colors, and responsiveness.
- **Functional tests**
  - Submit each form and verify:
    - Contact creation in HubSpot.
    - List assignment / properties set correctly.
    - Follow-up emails / workflows fire as expected.
  - Validate external links, download links, and meeting links.
- **Performance & SEO**
  - Set page titles, meta descriptions, and Open Graph data.
  - Check mobile rendering in the HubSpot preview / real devices.

### 8. Open Questions for Client (to Confirm)

- What exact **fields** should be captured for:
  - Guide download?
  - IT Confidence Check?
  - Strategy Review?
- Do they already have:
  - Preferred **meeting link** (HubSpot Meetings or Calendly), or should we create a HubSpot meeting link?
  - Existing **HubSpot theme** they want us to extend, or are we free to create a dedicated AVAJEN theme?
  - Existing global **header/footer** they want us to match?
- Any special compliance or data-handling requirements (e.g., regional consent, double opt-in, specific legal copy)?

