const request = require('supertest')
const app = require('../dist')

describe("/api", () => {
	it("shows the api version", (done) => {
		request(app).get("/api")
			.expect(200)
			.end(done) 
	})
})
