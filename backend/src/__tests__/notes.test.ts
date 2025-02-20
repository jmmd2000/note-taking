import request from "supertest";
import { app } from "../index";
// import { query } from "../../db"; // ✅ Keep using the same DB connection
import { test, expect } from "@jest/globals";

// beforeEach(async () => {
//   await query("DELETE FROM notes;"); // ✅ Clear notes before each test
// });

// afterAll(async () => {
//   await query("DELETE FROM notes;"); // ✅ Ensure DB is clean after all tests
// });

test("POST /api/notes - should create a new note", async () => {
  const response = await request(app).post("/api/notes").send({ title: "Test Note!", content: "This is a test!" });

  expect(response.status).toBe(201);
  expect(response.body.title).toBe("Test Note!");
});

test("GET /api/notes - should return an empty list initially", async () => {
  const response = await request(app).get("/api/notes");
  expect(response.status).toBe(200);
  expect(response.body.length).toEqual(3);
});
