type GeneratedResult = { text: string };

const requestResults = async (
  endpoint: "discovery" | "existing" | "ayurveda",
  payload: Record<string, unknown>,
): Promise<GeneratedResult> => {
  const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
  if (!apiUrl) {
    throw new Error("The API server URL is not configured (VITE_API_URL).");
  }

  const response = await fetch(`${apiUrl}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(120_000),
  });

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(
      typeof body?.error === "string"
        ? body.error
        : `The API request failed (${response.status}).`,
    );
  }
  if (typeof body?.text !== "string" || !body.text.trim()) {
    throw new Error("The API returned an empty result. Check the backend logs.");
  }

  return body as GeneratedResult;
};

export default requestResults;
