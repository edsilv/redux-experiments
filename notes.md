ref: 
https://github.com/jaysoo/todomvc-redux-react-typescript
https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/

to ignore libs in browserify, add this to package.json:
  
  "browser": {
    "redux": false,
    "redux-actions": false
  },
  