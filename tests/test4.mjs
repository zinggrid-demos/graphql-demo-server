/* Test: create a new entry */
import fetch from 'node-fetch'

fetch('http://localhost:4000/graphql', {
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
