import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Create Tweet
router.post("/", async (req, res) => {
  const { content, image, userId } = req.body;
  try {
    const result = await prisma.tweet.create({
      data: {
        content,
        image,
        userId, // TODO manage based on authenticated user
      },
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: "Username & email should be unique" });
  }
});
// List Tweets
router.get("/", async (req, res) => {
  const allTweets = await prisma.tweet.findMany({
    include: {
      user: { select: { id: true, name: true, username: true, image: true } },
    },
  });
  res.json(allTweets);
});
// Get 1 Tweet
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } });
  if (!tweet) {
    return res.status(404).json({ error: "Tweet not found!" });
  }
  res.json(tweet);
});
// Update Tweet
// curl command: curl -X PUT -H 'Content-Type: application/json' -d '{\"name\": \"Chris\", \"bio\": \"Hello!\"}' http://localhost:3000/user/id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});
// Delete Tweet
// curl command: curl -X DELETE http://localhost:3000/tweet/id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.tweet.delete({ where: { id: Number(id) } });
  res.sendStatus(200);
});

export default router;
