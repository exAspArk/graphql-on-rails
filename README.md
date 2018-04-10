# GraphQL on Rails

![](./public/screenshot.png)

## Tech Stack

* Ruby on Rails 5.2
* GraphQL 1.8
* Webpacker 3.4
* React 16.2
* React Apollo 2.1

## Creating the app from scratch

```
> brew install yarn
> gem install rails -v 5.2.0
> rails new graphql-on-rails --api --webpack=react

> cd graphql-on-rails
> bundle exec rails webpacker:binstubs --force
```

## Saving webpacker

```
> yarn
> ./bin/webpack-dev-server

The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D
module.js:491
    throw err;
    ^

Error: Cannot find module 'webpack-cli/bin/config-yargs'
    at Function.Module._resolveFilename (module.js:489:15)
    at Function.Module._load (module.js:439:25)
    at Module.require (module.js:517:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (graphql-on-rails/node_modules/webpack-dev-server/bin/webpack-dev-server.js:65:1)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
```

[https://github.com/rails/webpacker/issues/1295](https://github.com/rails/webpacker/issues/1295)

```
> yarn add webpack-cli -D
> ./bin/webpack-dev-server

graphql-on-rails/node_modules/webpack-dev-server/bin/webpack-dev-server.js:405
    throw e;
    ^

TypeError: Cannot read property 'compile' of undefined
    at addCompilerHooks (graphql-on-rails/node_modules/webpack-dev-server/lib/Server.js:71:15)
    at new Server (graphql-on-rails/node_modules/webpack-dev-server/lib/Server.js:81:5)
    at startDevServer (graphql-on-rails/node_modules/webpack-dev-server/bin/webpack-dev-server.js:398:14)
    at processOptions (graphql-on-rails/node_modules/webpack-dev-server/bin/webpack-dev-server.js:361:5)
    at Object.<anonymous> (graphql-on-rails/node_modules/webpack-dev-server/bin/webpack-dev-server.js:504:1)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)

```

[https://github.com/rails/webpacker/issues/1303](https://github.com/rails/webpacker/issues/1303)

```
> yarn upgrade webpack-dev-server@^2.11.1
> ./bin/webpack-dev-server
```

## Starting the application

```
> bundle
> bundle exec rails s
```
