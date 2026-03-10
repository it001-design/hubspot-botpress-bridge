export default async function handler(req, res) {

  console.log("HubSpot event:", req.body);

  const message = req.body.message || "Hello";

  // 发送到 Botpress
  const botpressResponse = await fetch("https://api.botpress.cloud/v1/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.BOTPRESS_API_KEY}`
    },
    body: JSON.stringify({
      userId: "hubspot-user",
      message: message
    })
  });

  const botData = await botpressResponse.json();
  const reply = botData.reply || "AI reply";

  console.log("Botpress reply:", reply);

  res.status(200).json({
    received: true,
    aiReply: reply
  });

}
