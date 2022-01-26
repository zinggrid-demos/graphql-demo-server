/* Test: update entry with id == 2 */
import fetch from 'node-fetch'

fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: `
            mutation {
                updateShow(id:2, title: "Black Mirror", seasons: 1, provider: "Netflix", genre: "sci-fi") {
                    id
                }
			}`,
        variables: {}
		})
    }).then(r => r.json()).then(r => console.log(JSON.stringify(r, null, 4)))
