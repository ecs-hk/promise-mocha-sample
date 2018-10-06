# promise-mocha-sample

Beginner-focused sample code that illustrates testing of promises. More generally, this repo contains basic working examples of vanilla promises and the async-await pattern.

Credit goes to [javascript.info Promise Basics documentation](https://javascript.info/promise-basics) for helping me "get it".

Tested with: Node.js v8 LTS

## Set up environment

### Onetime install/configuration

1. Download and install [Node.js](https://nodejs.org/) LTS
2. Clone this repository
3. Install dependences: `cd promise-mocha-sample && npm install`

### Export Node.js variables

```bash
_node=/path/to/node-v8.x.y
export NODE_PATH=${_node}/lib/node_modules
export PATH=${_node}/bin:$PATH
```

## Run tests

Ad-hoc test script:

```bash
node index.js
```

.. or use mocha:

```bash
npm test
```

![Screenshot](/README.md-img/dialog.png?raw=true)
