/* Test: delete entry with id == 2 */
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
                deleteShow(id:2) {
                    success
                }
			}`,
        variables: {}
		})
    }).then(r => r.json()).then(r => console.log(JSON.stringify(r, null, 4)))
