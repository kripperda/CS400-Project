import express from "express";

const PORT = process.env.PORT || 8080;
const express = require("express");
const router = express();
const fs = require("fs");
const path = require("path");

// Correct path to JSON file
const listingsFilePath = path.join(__dirname, "../data/listings.json");

// Function to read JSON file
function getListings() {
    try {
        const data = fs.readFileSync(listingsFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading listings.json:", error);
        return [];
    }
}

// Route to get all listings
router.get("/", (req, res) => {
    const listings = getListings();
    res.json(listings);
});

module.exports = router;

router.listen(PORT, () => {
    console.log("Resolved path to JSON file:", listingsFilePath);
});
