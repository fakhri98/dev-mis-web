import express from 'express';

const api = express();

api.get("/api/hello", (req, res) => {
  res.json({ hello: "world" });
});

export const handler = api;