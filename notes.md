https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/

to ignore libs in browserify, add this to package.json:

```
  "browser": {
    "redux": false
  },
```

then use redux as an inline script tag?

```
<script src="https://unpkg.com/redux@3.7.2/dist/redux.min.js"></script>
```
