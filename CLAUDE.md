# CLAUDE.md

## Project Overview

TypeScript learning repository for studying syntax and patterns, organized by topic from basics to advanced.

## Commands

- `npx ts-node src/<path>/<file>.ts` — Run a single file directly
- `npm run build` — Compile all files under `src/` to `dist/`
- `npm run watch` — Watch mode, recompile on changes

## Structure

Each topic is in a numbered directory under `src/`. Files are self-contained and can be run independently with `ts-node`.

## Conventions

- All source files are in `src/`, compiled output goes to `dist/`
- Each `.ts` file includes runnable `console.log` examples at the bottom
- Exercises in `08-exercises/` are commented out — uncomment and complete them
- Keep examples simple and focused on one concept per file
