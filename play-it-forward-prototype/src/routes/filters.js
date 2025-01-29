import express from "express";

const PORT = process.env.PORT || 8080;
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Load listings from JSON file
const listingsFilePath = path.join(__dirname, "../data/listings.json");

function getListings() {
    try {
        const data = fs.readFileSync(listingsFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading listings.json:", error);
        return [];
    }
}

// Route to filter listings
router.get("/", (req, res) => {
    let listings = getListings();

    // Extract query parameters (ageGroup, location, type)
    const { ageGroup, location, type } = req.query;

    if (ageGroup) {
        listings = listings.filter(item => item.ageGroup === ageGroup);
    }
    if (location) {
        listings = listings.filter(item => item.location === location);
    }
    if (type) {
        listings = listings.filter(item => item.type === type);
    }
    if (type) {
        category = listings.filter(item => item.category === category);
    }

    res.json(listings);
});

module.exports = router;
