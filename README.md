# GraphQL demo server

This is the server used in the ZingGrid GraphQL demos [zinggrid-react-demo](https://github.com/zinggrid-demos/zinggrid-react-demo) and [zinggrid-svelte-demo](https://github.com/zinggrid-demos/zinggrid-svelte-demo) . In case the public server is not running, you can run this version locally. It requires `node` and `python` to be installed.

1. `npm install`
2. `npm run reset`
3. `npm run start`

*Note: the server installs the SQLite module, which may need to be compiled for your environment. It's written in C++, so make sure you have `gcc` and `g++`
installed. Also, it expects `python` to be available as `python`, but it may only be installed as `python3`. You may need to create a symlink to the
actual installed version of `python3`, in my environment I had to run `ln -s /bin/python3.10 /bin/python` as root.*

Edit the `demoServer` URL in `zinggrid-react-demo/src/components/GraphQL-crud.js` or `zinggrid-svelte-demo/src/demos/GraphQL-crud.svelte` to point to your local server, probably `http://localhost:4000/graphql`.

To reset the database to its original contents, run `npm run reset`.

## Server-Side Tests

There are tests that can be run from the server to try out some GraphQL queries. `cd ./tests` and edit `config.mjs` to set the URL to your
instance of the server. You can then run each of the `test*.mjs` files with `node`. Note that some of the tests are destructive,
so you might need to reset the DB afterwards.

