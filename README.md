# liquidjs-render-bug
Getting a parse length limit exceeded bug on versions >= 10.15.0.

After an `npm i` and then an `npm run test`

Getting this on liquidjs versions >= 10.15.0

```
 FAIL  tests/main.test.js > contains valid liquid
AssertionError: sections.features.0 contains invalid liquid: expected [Function] to not throw an error but 'AssertionError: parse length limit ex…' was thrown

- Expected: 
undefined

+ Received: 
"AssertionError: parse length limit exceeded"

 ❯ tests/main.test.js:34:83
     32|   for (const key in toLint) {
     33|     if (!toLint[key]) continue
     34|     expect(() => liquid.parse(toLint[key]), `${key} contains invalid liquid`).not.toThrow()
       |                                                                                   ^
     35|   }
     36| })

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  12:32:11
   Duration  195ms (transform 10ms, setup 0ms, collect 32ms, tests 12ms, environment 0ms, prepare 52ms)
```

On 10.14.0 and below however, I get this:
```
> liquidjs-example@1.0.0 test
> vitest


 DEV  v2.0.4 /Users/ashishkeshan/Documents/code/liquidjs-render-bug

 ✓ tests/main.test.js (1)
   ✓ contains valid liquid

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  12:34:07
   Duration  181ms (transform 10ms, setup 0ms, collect 21ms, tests 8ms, environment 0ms, prepare 62ms)
```
