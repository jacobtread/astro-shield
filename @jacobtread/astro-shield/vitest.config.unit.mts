/*
 * SPDX-FileCopyrightText: 2024 KindSpells Labs S.L.
 *
 * SPDX-License-Identifier: MIT
 */

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      include: ["src/*.mts"],
      exclude: [
        "src/tests/**/*",
        "src/e2e/**/*",
        "src/types.mts",
        "coverage/**/*",
        "coverage-e2e/**/*",
        "coverage-unit/**/*",
      ],
      thresholds: {
        statements: 1.0,
        branches: 1.0,
        functions: 1.0,
        lines: 1.0,
      },
      reportsDirectory: "coverage-unit",
    },
    include: ["src/**/tests/**/*.test.mts"],
  },
});
