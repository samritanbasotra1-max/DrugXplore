import type { ErrorRequestHandler } from "express";

const error: ErrorRequestHandler = (cause, _req, res, _next) => {
  console.error("API request failed:", cause);
  res.status(500).json({
    error: cause instanceof Error ? cause.message : "The API request failed.",
  });
};

export default error;
