

# DemoNx

This project was generated using [Nx](https://nx.dev).

Steps
===

Install Yarn
---
- **install yarn** 
 `npm install -g yarn`

- **config terminal to know yarn**
  
  open file .profilerc then then add this command  
   `export PATH=$(yarn global bin):$PATH` 
   at the end of line then save and close.

***

Create workspace
---

use
`npx create-nx-workspace`

- define workspace name
- select template workspace as ts

after create workspace success then open nx.json then edit
property workspaceLayout.appDir as shown below

```{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "npmScope": "demo-nx",
  "affected": {
    "defaultBase": "main"
  },
  "implicitDependencies": {
    "package.json": {
      "dependencies": "*",
      "devDependencies": "*"
    },
    ".eslintrc.json": "*"
  },
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "lint", "test", "e2e"]
      }
    }
  },
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    }
  },
  "workspaceLayout": {
    "appsDir": "apps",
    "libsDir": "packages"
  }
}
```
***

Config Yarn workspace
---
open package.jason at root then add property workspaces like this

```
  "workspaces":["apps/**","packages/**"],
```
***

add necessary nx-plugin
---

`yarn -W -D add @nrwl/express` 
to install nx-plugin at workspace level.
you can install @nrwl/node instead of express.if you want to use other web frameork.
  