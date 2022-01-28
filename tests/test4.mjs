/* Test: create a new entry */
import fetch from 'node-fetch'
import url from './config.mjs'

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: `
            mutation {
                createShow(title: "Futurama", seasons: 11, provider: "Fox", genre: "sci-fi") {
                    id
                }
			}`,
        variables: {}
		})
    }).then(r => r.json()).then(r => console.log(JSON.stringify(r, null, 4)))
