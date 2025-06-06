<div align="center">

<a href="./LICENSE">![GitHub](https://img.shields.io/github/license/everton-dgn/live_tailwind_vs_css_pure?style=plastic)</a>
![GitHub repo size](https://img.shields.io/github/repo-size/everton-dgn/live_tailwind_vs_css_pure?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/everton-dgn/live_tailwind_vs_css_pure?color=yellow&style=plastic)

</div>

<h1 align="center">Boilerplate Complete and updated with Astro.js, Svelte, Typescript, CSS Modules, Tests and more</h1>

<br />

# :memo: About the Project

This application is a boilerplate for complex and large systems, especially those that need to scale with security and code quality.

We sought to achieve 3 pillars: readability, reusability, and refactorability.

In the construction of the UI, the Atomic Design structure was chosen, organizing the global components into atoms, molecules, organisms and templates.

In addition to being constantly updated, this project was configured in the smallest details to serve as a basis for professional projects that require standardized and easy-to-maintain code architecture and design.

<br />

---

# :pushpin: Contents

- [Technologies](#globe_with_meridians-technologies)
- [Features](#triangular_flag_on_post-features)
- [Prerequisites](#white_check_mark-prerequisites)
- [How to install and run the project](#question-how-to-install-and-run-the-project)
  - [Clone Repository](#clone-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start Development Environment](#start-development-environment)
  - [Generate Production Build](#generate-production-build)
  - [Start Production Environment](#start-production-environment)
  - [Run Tests](#run-tests)
  - [Run Tests in Watch Mode](#run-tests-in-watch-mode)
  - [Run Lints](#run-lints)
  - [Format code with prettier](#format-code-with-prettier)
  - [Check for Available Updates for Dependencies](#check-for-available-updates-for-dependencies)
- [Important Considerations](#rotating_light-important-considerations)
- [Author](#technologist-author)

<br />

---

# :globe_with_meridians: Technologies

🚀 Astro.js

⚛ Svelte

🔥 TypeScript

💅 CSS Modules

🚩 Lints: Lefthook, BiomeJS and Commitlint

✅ Tests: Vitest and Playwright

<br />

---

# :triangular_flag_on_post: Features

- [x] Responsive design;

- [x] Atomic Design;

- [x] 100% coverage;

- [x] Detection prefers-reduced-motion;

<br />

---

# :white_check_mark: Prerequisites

- node (latest version lts).

- pnpm (latest version lts).

<br />

---

# :question: How to install and run the project

## Clone Repository

```bash
git clone https://github.com/everton-dgn/live_tailwind_vs_css_pure.git
```

## Install Dependencies

```bash
pnpm i
```

## Start Development Environment

```bash
pnpm dev
```

Available in http://localhost:3000

## Generate Production Build

```bash
pnpm build
```

## Start Production Environment

```bash
pnpm preview
```

Available in http://localhost:3000

## Run Tests

```bash
pnpm test
```

## Run Tests in Watch Mode

```bash
pnpm test:w
```

Available in http://localhost:6006

## Run Lints

```bash
pnpm lint
```

```bash
pnpm typecheck
```

```bash
pnpm check:format
```

## Format code with prettier

```bash
pnpm format
```

## Check for Available Updates for Dependencies

```bash
pnpm check:update
```

<br />

---

# :rotating_light: Important Considerations

- The husky is configured to not allow commit if there are any lint and typescript errors. The push can only be done if all tests and builds pass.

- Due to husky's build check settings, to push with git, the development server must be stopped first or an error will occur in the `git push` command.

---

# :technologist: Author

By [Éverton Toffanetto](https://programadordesucesso.com).

:link: LinkedIn: https://www.linkedin.com/in/everton-toffanetto

:link: YouTube: https://youtube.com/@toffanettodev
