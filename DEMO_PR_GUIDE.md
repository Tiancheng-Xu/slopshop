# SlopShop Demo PR Guide

Use this repo as the fake project behind the Emergent PR review dashboard segment.

## Hero PR

Branch: `pr/fallback-routing`

Title: Add fallback routing when premium models tap out

Description:

> Adds automatic fallback routing between Claude, GPT, Gemini, and Brad's suspicious local model. Also introduces provider health checks, retry behavior, provider clients, and basic cost display updates.

Best review risks:

- Provider failure logs include raw prompt text.
- Retry behavior can recurse without a real stop condition.
- Fallback selection prioritizes price before reliability.
- Health checks are cached forever.
- Tests cover happy-path fallback but not total provider outage.

## Supporting PRs

Branch: `pr/model-scoring`

Title: Replace vibes-based model picker with scoring algorithm

Good review risks: hardcoded weights, stale quality assumptions, no context-window scoring, weak explanation UI.

Branch: `pr/prompt-replay`

Title: Add prompt replay page for failed generations

Good review risks: raw prompt visibility, no pagination, no retry guard, no audit trail.

Branch: `pr/provider-key-vault`

Title: Introduce provider key vault

Good review risks: base64 is not encryption, missing master-key validation, no key-read audit log, unclear plaintext migration.

Branch: `pr/panic-mode`

Title: Ship panic mode when every AI provider is cooked

Good review risks: static health source, no alerting integration, degraded responses still look normal to clients.

Branch: `pr/hallucination-budget`

Title: Add hallucination budget to team dashboard

Good review risks: hardcoded budget data, no monthly reset, no tests, deeply unserious business logic.

## Suggested Fake GitHub URLs

For the recording, the hero URL is:

`https://github.com/fireship-dev/slopshop/pull/1`
