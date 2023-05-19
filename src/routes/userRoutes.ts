import { Router } from "express";

const router = Router();

// Create User
router.post("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});
// List users
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});
// Get 1 user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});
// Update user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});
// Delete user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

export default router;
