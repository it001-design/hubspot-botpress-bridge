export default async function handler(req, res) {
  console.log("HubSpot event:", req.body);
  res.status(200).json({ received: true });
}
