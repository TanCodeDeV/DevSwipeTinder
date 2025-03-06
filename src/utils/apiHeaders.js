// src/apiHeaders.js
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GITHUB_HEADERS = {
  Authorization: `token ${GITHUB_TOKEN}`,
  "Content-Type": "application/json",
};
