import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // typescript: {
  //   reactDocgen: "react-docgen"
  // },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@acme/core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/acme-core/"
            ),
          },
          {
            find: "@acme/foundation",
            replacement: path.resolve(
              __dirname,
              "../../../packages/acme-foundation/"
            ),
          },
        ],
      },
    };
  },
};
export default config;
