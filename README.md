<!--
SPDX-FileCopyrightText: 2024 KindSpells Labs S.L.

SPDX-License-Identifier: CC-BY-4.0
-->

# Astro-Shield

[![NPM Version](https://img.shields.io/npm/v/%40jacobtread%2Fastro-shield)](https://www.npmjs.com/package/@jacobtread/astro-shield)
![NPM Downloads](https://img.shields.io/npm/dw/%40jacobtread%2Fastro-shield)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/jacobtread/astro-shield)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jacobtread/astro-shield/tests.yml)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@jacobtread/astro-shield)](https://socket.dev/npm/package/@jacobtread/astro-shield)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8733/badge)](https://www.bestpractices.dev/projects/8733)

## Introduction

Astro-Shield helps you to enhance the security of your Astro site.

## How to install

```bash
# With NPM
npm install --save-dev @jacobtread/astro-shield

# With Yarn
yarn add --dev @jacobtread/astro-shield

# With PNPM
pnpm add --save-dev @jacobtread/astro-shield
```

## How to use

In your `astro.config.mjs` file:

```javascript
import { defineConfig } from "astro/config";
import { shield } from "@jacobtread/astro-shield";

export default defineConfig({
  integrations: [shield({})],
});
```

## Learn more

- [Astro-Shield Documentation](https://astro-shield.kindspells.dev)

## Other Relevant Guidelines

- [Code of Conduct](https://github.com/KindSpells/astro-shield?tab=coc-ov-file)
- [Contributing Guidelines](https://github.com/KindSpells/astro-shield/blob/main/CONTRIBUTING.md)
- [Security Policy](https://github.com/KindSpells/astro-shield/security/policy)

## Main Contributors

This library has been created and is being maintained by
[KindSpells Labs](https://kindspells.dev/?utm_source=github&utm_medium=astro_sri_scp&utm_campaign=floss).

## License

This library is released under [MIT License](https://github.com/KindSpells/astro-shield?tab=MIT-1-ov-file).
