# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/UMAprotocol/protocol/compare/@uma/monitors@2.0.0...@uma/monitors@2.0.1) (2021-02-27)

**Note:** Version bump only for package @uma/monitors

# [2.0.0](https://github.com/UMAprotocol/protocol/compare/@uma/monitors@1.2.0...@uma/monitors@2.0.0) (2021-02-26)

### Bug Fixes

- **bots:** Add feature to denominate synthetic price by another price feed + remove noisy BasketSpreadPriceFeed logs ([#2385](https://github.com/UMAprotocol/protocol/issues/2385)) ([cf7ddbb](https://github.com/UMAprotocol/protocol/commit/cf7ddbbbf052b014547a2af3e5d030014b843dd2))
- **monitor,disputer,liquidator bots:** correctly pass in bot config objects into bots ([#2409](https://github.com/UMAprotocol/protocol/issues/2409)) ([d3c0ad4](https://github.com/UMAprotocol/protocol/commit/d3c0ad4b7b366596f2938ef4230eacf03d1aa8d5))
- **serverless-hub:** Address dropped spoke logs and mismatch timedout spokes ([#2514](https://github.com/UMAprotocol/protocol/issues/2514)) ([00914c0](https://github.com/UMAprotocol/protocol/commit/00914c082bb42778c836def883f95fe00f26a229))

### Features

- **bot-infrastructure:** add a generic DSProxy client ([#2559](https://github.com/UMAprotocol/protocol/issues/2559)) ([b275463](https://github.com/UMAprotocol/protocol/commit/b275463c0bfe2c3a45a5c049534b5acc3df58688))
- **disputer,liquidator,monitorfinancial-templates-lib:** rename all instances of emp to financialContract ([#2528](https://github.com/UMAprotocol/protocol/issues/2528)) ([e8c9b1e](https://github.com/UMAprotocol/protocol/commit/e8c9b1e06f1b88fbeea02858b5f5974f29a0d4a8))
- **financial-templates-lib:** make getHistoricalPrice async ([#2493](https://github.com/UMAprotocol/protocol/issues/2493)) ([c91e11b](https://github.com/UMAprotocol/protocol/commit/c91e11bad264509efd4ef98044e448e6e5b8b5f0))
- **monitor:** add perp support to monitor ([#2475](https://github.com/UMAprotocol/protocol/issues/2475)) ([b24bae1](https://github.com/UMAprotocol/protocol/commit/b24bae1fc3aabb6b163043447dd9c5baa1d156b8))
- **yarn:** enable concurrency between test threads ([#2449](https://github.com/UMAprotocol/protocol/issues/2449)) ([b17b655](https://github.com/UMAprotocol/protocol/commit/b17b6558b714a9ac9f762dccdfa95764f9dfe1b9))

# [1.2.0](https://github.com/UMAprotocol/protocol/compare/@uma/monitors@1.1.0...@uma/monitors@1.2.0) (2020-11-23)

### Features

- **emp:** financial product library to apply price transformation ([#2185](https://github.com/UMAprotocol/protocol/issues/2185)) ([5a7e2ec](https://github.com/UMAprotocol/protocol/commit/5a7e2ec25c5ecbc09397284839a553fee9d5636d))

# [1.1.0](https://github.com/UMAprotocol/protocol/compare/@uma/monitors@1.0.0...@uma/monitors@1.1.0) (2020-10-05)

### Features

- **emp:** add trimExcess function to send excess tokens ([#1975](https://github.com/UMAprotocol/protocol/issues/1975)) ([658f4d9](https://github.com/UMAprotocol/protocol/commit/658f4d90cff9ece8b05a2922dcb0f78e9b62c80d))

# 1.0.0 (2020-09-15)

Initial Release!
