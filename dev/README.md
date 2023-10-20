## How to test builded module from /dist

Run from root folder:

```sh
yarn build
npm pack
```

It will create archive of package (name-version.tgz)

Create any test project (here is Next.js):

```sh
yarn create next-app
```

Then copy archive of package to root of new test project.

Add this package to project:

```sh
yarn add file:[NAME-OF-ARCHIVE].tgz
```

Import module to any page:

```js
import { convert as numberToWordsRu } from "number-to-words-ru"
console.log("numberToWordsRu", numberToWordsRu("123456789", {}));
```
