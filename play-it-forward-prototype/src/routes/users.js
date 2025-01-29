import express from "express";

const PORT = process.env.PORT || 8080;
const express = require("express");
const router = express();

let interestRequests = []; // Temporary in-memory storage

// Route to mark interest in an item
router.post("/interest", (req, res) => {
    const { userId, listingId } = req.body;

    // Error handling: Ensure both userId and listingId are provided
    if (!userId || !listingId) {
        return res.status(400).json({ message: "Missing userId or listingId" });
    }

    // Save interest request
    interestRequests.push({ userId, listingId, date: new Date() });

    res.json({ message: "Interest request sent!", interestRequests });
});

// Route to view all interest requests (for debugging)
router.get("/interests", (req, res) => {
    res.json(interestRequests);
});

router.listen(PORT, () => {
    console.log("Resolved path to JSON file:", listingsFilePath);
});

module.exports = router;