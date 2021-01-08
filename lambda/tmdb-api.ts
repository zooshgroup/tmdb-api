import type { Handler } from "aws-lambda"
import { server } from "../src"

export const handler: Handler = server.createHandler({
	cors: {
		// Set to '*' to allow any origin
		origin: '*',
		credentials: false
	}
})
