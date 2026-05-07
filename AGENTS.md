<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` or the official Next.js MCP docs before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Instructions

## First Steps

- Before coding, initialize or verify Git is initialized for the project.
- Before coding, read `DESIGN.md` and inspect `.design/` if either exists. Use them as local design references only.
- Never commit or push `DESIGN.md`, `design.md`, or any files inside `.design/` or `.design-files/`.
- Before metadata, README, SEO, landing-page structure, or challenge copy work, inspect `https://github.com/adrielzimbril/twelve-ai` and follow its structure as the reference.

## Package Manager

- Always use `pnpm` for installs, scripts, and lockfile updates.
- Never use `npm` or `yarn`.

## Collaboration

- The user edits alongside the agent.
- Treat unexpected local modifications as user work.
- Keep, review, and build on top of user changes instead of deleting or reverting them.
- If user changes affect the task, integrate them carefully and mention them in the final summary.

## Git Workflow

- Commit with descriptive messages.
- Push to GitHub after every meaningful modification or at the end of every task.
- If asked to reset or rewrite history, still keep ignored design files local-only.
- Before any commit, verify no design files are staged or tracked.
- After pushing, verify the working tree is clean.

## README Pattern

- The actual README file is `README.md` in the root of the project and it's only used as an example.
- Keep the established challenge README structure from `twelve-ai`.
- Only adapt this file for our new project by changing the day number, project name, product description, design rationale, key sections, stack, preview asset, live URL, and project-specific details.
- Preserve the overall order and tone of the reference README.

## Metadata Pattern

- Open the folder `twelve-ai` and inspect its project architecture, layout structure, and metadata implementation to understand the metadata structure I want (not exactly the same file or same file name because it's a different project, but you have to learn how i code)
- Always include complete SEO metadata in `src/app/layout.tsx`.
- Follow the exact `twelve-ai` metadata structure:
  - `metadataBase`
  - `title`
  - `description`
  - `keywords`
  - `openGraph`
  - `twitter`
  - `icons`
- Use this description structure exactly, changing only the required project words and details:
  - `Day X/30 of the AI-Generated Landing Page Challenge. [Project Name] is a conceptual [product category] that [core product promise].`
- Use this Open Graph and Twitter description structure exactly, changing only the required project words and details:
  - `A conceptual [product category] landing page for Day X/30 of the AI-Generated Landing Page Challenge.`
- Always use `/opengraph-image.png` for Open Graph and Twitter preview images unless the user explicitly replaces the asset.
- Always include required tags in `keywords`: project name, product category, AI category, primary use case, relevant stack, `bento design` when applicable, and `AI challenge`.

## GitHub Repository Metadata

- "Metadata" also means the GitHub repository details shown in the right sidebar: repository description, website URL, and topics.
- Before setting GitHub repository metadata, inspect `https://github.com/adrielzimbril/twelve-ai` and mirror its structure.
- Use this GitHub repository description structure exactly, changing only the day, project name, product category, and promise:
  - `Day X/30 of the AI-Generated Landing Page Challenge. [Project Name] is a conceptual [product category] that [core product promise]. 🐼`
- Set the GitHub website/homepage URL to the production project URL.
- Add GitHub topics following the Twelve pattern, adapted to the project:
  - `ai-challenge`
  - `ai-landing-page`
  - project-specific AI/product topic, for example `ai-image-generation`
  - `bento-design` when applicable
  - `generative-ai`
  - `landing-page`
  - `mockup`
  - stack topics such as `nextjs (arch: src)`, `motion/react` and `tailwindcss`
  - domain topic such as `web-design`
- Verify the GitHub repository metadata after editing with `gh repo view --json description,homepageUrl,repositoryTopics`.

## Design Files

- `DESIGN.md`, `design.md`, `.design/`, and `.design-files/` are local-only references.
- They must never be committed, force-added, pushed, copied into commits, or included during history rewrites.
- `.gitignore` must keep these entries ignored.

## Visual Direction

- Follow the current Twelve AI design language: modern, minimal, high-end, image-led, and product-focused.
- Keep interactions purposeful. Product cards should simulate workflows or dashboard behavior instead of decorative animation.
- Keep typography, spacing, and visual tone aligned with `DESIGN.md` unless the user explicitly changes direction.
