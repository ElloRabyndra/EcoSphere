const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  try {
    const { nama, pesan } = req.body;

    const [result] = await db.execute(
      "INSERT INTO feedback (nama, pesan) VALUES (?, ?)",
      [nama, pesan]
    );

    res.status(201).json({
      success: true,
      message: "Feedback berhasil dikirim",
      data: {
        id: result.insertId,
        nama,
        pesan,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Gagal mengirim feedback", details: error.message });
  }
});

module.exports = router;
