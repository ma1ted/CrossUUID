# unique

## A Typescript UUID v4 implementation

### Usage

#### Import the module

##### Deno
```js
import { uuid as uuidv4 } from "https://deno.land/x/unique/uuid.ts"
```

#### Generate a UUID

```js
const uuid: string = uuidv4();
console.log(uuid);
```

#### Validate the generated UUID

```js
import { v4 } from "https://deno.land/std@0.112.0/uuid/mod.ts";

const isValid: boolean = v4.validate(uuid);
console.log(isValid);
```

### Why

As per the MDN docs, `Crypto.randomUUID()` is _available only in secure contexts
(HTTPS), in some or all supporting browsers_.

<!--https://wicg.github.io/uuid/#dom-crypto-randomuuid-->
