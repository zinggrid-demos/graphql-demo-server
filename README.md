# GraphQL demo server

This is the server used in the ZingGrid GraphQL demos [zinggrid-react-demo](https://github.com/zinggrid-demos/zinggrid-react-demo) and [zinggrid-svelte-demo](https://github.com/zinggrid-demos/zinggrid-svelte-demo) . In case the public server is not running, you can run this version locally. It requires `node` and `python` to be installed.

1. `npm install`
2. `npm run reset`
3. `npm run start`

Edit the `demoServer` URL in `zinggrid-react-demo/src/components/GraphQL-crud.js` or `zinggrid-svelte-demo/src/components/GraphQL-crud.svelte` to point to your local server, probably `http://localhost:4000/graphql`.

To reset the database to its original contents, run `npm run reset`.

