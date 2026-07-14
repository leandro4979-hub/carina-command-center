# Carina AI Command Center

An interactive systems-interface concept for supervising AI agents, projects, approvals, and operational signals from one focused workspace.

## Highlights

- Voice-style wake and stop controls with clear listening states.
- A multi-agent routing view for Maya, Karina, Hermes, and Codex.
- Project progress, activity, and system-health surfaces.
- A visual systems engine with animated event flow.
- Token-ledger and holdings demonstrations for exploring information hierarchy.
- Responsive layouts and reduced-motion support.

## Current boundary

Carina is a polished front-end prototype. Agent activity, token balances, holdings, and runtime events in the interface are demonstration data. It does not connect to a wallet, execute trades, or run the agents shown on screen. The next integration step is to connect these surfaces to an authenticated orchestration backend without weakening the approval boundaries.

## Stack

- React 19 and TypeScript
- Next.js-compatible routing through vinext
- Vite and the Cloudflare development toolchain
- Tailwind CSS
- OpenAI Sites project configuration

## Run locally

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

## Verify

```bash
npm run lint
npm test
```

`npm test` performs a production build and checks the rendered loading surface.

## Project structure

- `app/` contains the command-center interface and global styling.
- `tests/` verifies the generated page output.
- `public/` contains static assets.
- `.openai/hosting.json` preserves the OpenAI Sites project binding.
- `vite.config.ts` configures local and hosted runtime behavior.

## Principles

The interface is designed around visible system state, deliberate approval points, accessible motion, and honest separation between simulated product concepts and working integrations.
