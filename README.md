

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
  

***
Create Proejct type App
---

`yarn nx g @nrwl/express:app <projectname>`

For this demo i create 2 express app for hosting pakcage api like below.
- learningapp-service
- learningcms-service


***

Create lib(Packages) 
---

This demo is going to create 3 project like below

- `yarn nx g @nrwl/js:lib api-nobuild`
- `yarn nx g @nrwl/js:lib api-buildable --buildable`
- `yarn nx g @nrwl/js:lib api-publishable --publishable --importPath=@demo-nx/api-publishable` --> option importPath to define npm package name as systax `@<npm scope name>/<packagename>`

to explain you about buildable and publishable of nx feature.

***

Using lib
---

you can import local dependency immidiately because nx use path alias in tsconfig.base.json to set alias name refer to other project 

for example

in leraningapp-service's main.ts
```
import {apiNobuild} from '@demo-nx/api-nobuild'
```