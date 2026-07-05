# Task-to-Tool Matcher — Design Document

Status: **approved** (July 2026). Blocked on: PartnerStack program acceptances (final tool list).

The Matcher is the core differentiator of PickMyAITools: users describe what
they want to accomplish and get a targeted recommendation, instead of reading
generic listicles.

## Architecture (MVP)

**Fully client-side.** No backend, no API calls, no costs.

- Tool dataset lives in a TypeScript file (e.g. `src/lib/tools.ts`)
- Matching happens in the browser: keyword/tag comparison between the user's
  input and each tool's `tags` + `use_cases`
- Affiliate links come from the existing central `src/lib/affiliateLinks.ts`
- Future upgrade path (v2): swap the matching function for a Vercel serverless
  function calling the Claude API. Dataset stays identical.

## Data model per tool

```ts
{
  name: "Gamma",
  category: "presentations",
  tags: ["presentation", "slides", "pitch deck", "AI", "quick"],
  use_cases: ["Create a presentation fast", "Build a pitch deck", "Turn text into slides"],
  price_tier: "free-with-paid",   // "free" | "free-with-paid" | "paid-only"
  price_from: 10,                  // USD per month, 0 if free
  gdpr_friendly: true,
  technical_level: "beginner",     // "beginner" | "intermediate" | "advanced"
  one_liner: "AI-first presentations — polished decks in minutes",
  why_we_recommend: "Fastest way to go from idea to shareable deck. Especially strong for non-designers.",
  affiliate_key: "gamma",          // key into affiliateLinks.ts
}
```

Only include tools with an **active, accepted affiliate program** (PartnerStack
or Rewardful). Target: 8–15 tools. The matcher is built around monetizable
tools; no dead recommendations.

## UI

### Input
- Free-text field: "What do you want to get done?"
- 6 example chips below the field (click = fill input + run matcher):
  1. "Write blog posts faster"
  2. "Create a presentation"
  3. "Edit video without an editor"
  4. "Send cold outreach emails"
  5. "Automate customer support"
  6. "Run email marketing campaigns"
- Keep chips under 8 — more creates choice stress.

### Filters (MVP: two only)
- **Budget** dropdown: Any / Free only / Under $20/mo / Under $50/mo
- **EU/GDPR required** toggle — deliberate differentiator, matches site positioning
- Skill-level filter is deferred to v2.

### Output
- **Top 1 recommendation, large**, with an explicit "why" sentence referencing
  the user's input (e.g. "Because you mentioned presentations and speed, Gamma
  is the best fit.")
- **2 alternatives, smaller**, below it
- Each tool card: name, one-liner, price, "Try it free →" (affiliate link,
  `rel="nofollow sponsored noopener"`)
- Later: link to the full review once articles exist

### No-match behavior
Honest message: "I don't have a tool for that yet — try one of the examples
below" + show the 6 chips again. Never force a bad recommendation. This
honesty is part of the brand.

## Build order (once PartnerStack acceptances are in)

1. Fill `src/lib/tools.ts` with accepted tools only
2. Build matching function (pure TS, unit-testable)
3. Build UI on `/which-ai-tool-should-i-use` (replace current generic page)
4. Wire affiliate links + disclosure block
5. QA pass (Nadine) + live

## Rules

- English UI, like the rest of the site
- No tool enters the dataset without a working affiliate link OR a deliberate
  decision to include it unmonetized (e.g. ChatGPT for credibility)
- Matching logic must be explainable: the "why" sentence is generated from
  matched tags, not invented
