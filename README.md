# v4uuid

## A tiny dependency-free Typescript UUID v4 implementation

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ma1ted/v4uuid/Test)
![GitHub top language](https://img.shields.io/github/languages/top/ma1ted/v4uuid)

As per https://wicg.github.io/uuid/#dom-crypto-randomuuid

### Why

As per the MDN docs, `Crypto.randomUUID()` is _available only in secure contexts
(HTTPS), in some or all supporting browsers_. This function not being in
browsers such as Firefox and Safari to name two is a major issue.

### Usage

#### Import the module

```js
import { V4UUID } from "https://deno.land/x/v4uuid/v4uuid.ts"
```

#### Generate a UUID

```js
const uuid: string = new CrossUUID().generate();
console.log(uuid);
```

#### Validate the generated UUID

```js
import { v4 } from "https://deno.land/std@0.112.0/uuid/mod.ts";

const isValid: boolean = v4.validate(uuid);
console.log(isValid);
```

//TODO: Add to deno/npm
