
## Install

Install this module for your project, using your package manager of choice:

```sh
npm install mobiquity-package-challenge --save
yarn add mobiquity-package-challenge
bower install mobiquity-package-challenge --save
```

## Usage

After installing the module, you can use the pack() method from either JS or TS, like so:

### Javascript

```javascript
var mpc = require('mobiquity-package-challenge');
console.log(mpc.pack('./input_file'));
```

### TypeScript

```typescript
import { pack } from 'mobiquity-package-challenge';
console.log(pack('./input_file'));
```

## Test

Switch to the module's directory and run unit tests using Jest:

```sh
cd ./node_modules/mobiquity-package-challenge
npm run test
```
