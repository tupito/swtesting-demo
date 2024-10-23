```bash
# mocha + mochawesome
npm test
# c8
npm run test:coverage
# c8 (manual lcov)
npx c8 report --reporter=lcov

# coveralls
export COVERALLS_REPO_TOKEN=<TOKEN>
npm run coveralls
```

[![Coverage Status](https://coveralls.io/repos/github/tupito/swtesting-demo/badge.svg?branch=main)](https://coveralls.io/github/tupito/swtesting-demo?branch=main)
