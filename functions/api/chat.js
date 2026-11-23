export async function onRequestPost({ request, env }) {
  try {
    if (!env.GROQ_API_KEY) {
      return Response.json({ error: "API key missing" }, { status: 503 });
    }

    const { message } = await request.json();

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: env.GROQ_MODEL || "openai/gpt-oss-20b",
          messages: [
            {
              role: "system",
              content: "You are NEXORA AI, a helpful personal AI assistant."
            },
            { role: "user", content: message }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json({ error: "AI request failed" }, { status: 500 });
    }

    return Response.json({
      reply: data.choices?.[0]?.message?.content || "No reply"
    });
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
