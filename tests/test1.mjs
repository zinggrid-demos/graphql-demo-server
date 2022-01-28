/* Test: query the DB */
import fetch from 'node-fetch'
import url from './config.mjs'

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: `
            query {
				shows {
                    id
					title
					seasons
					provider
					genre
				}
			}`,
        variables: {}
		})
    }).then(r => r.json()).then(r => console.log(JSON.stringify(r, null, 4)))
