/* Test: list HBO shows */
import fetch from 'node-fetch'
import url from './config.mjs'

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: `
            query listShows($provider: String!) {
                shows(where: {provider: $provider}) {
                    title
                }
			}`,
        variables: {
            provider: "HBO"
        }
    })
}).then(r => r.json()).then(r => console.log(JSON.stringify(r, null, 4)))
