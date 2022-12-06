import { expect, test, describe } from "vitest"

describe("Pruebas en <CounterApp />", () => {
	test("should not fail", () => {
		const message = "Hello World"
		const message2 = message.trim()

		expect(message).toBe(message2)
	})
})
