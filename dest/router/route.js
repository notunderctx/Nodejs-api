"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    try {
        const response = await fetch("https://api.publicapis.org/entries");
        const data = await response.json();
        res.json({
            status: "success",
            main: [data]
        });
    }
    catch (error) {
        res.status(500).json({
            Error: `${error}`
        });
    }
});
router.get("/cat", async (req, res) => {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        res.json({
            status: "success",
            main: [data]
        });
    }
    catch (error) {
        res.status(500).json({
            Error: `${error}`
        });
    }
});
router.get("/creator", (req, res) => {
    res.json({
        github: "https://www.github.com/swollenbirg"
    });
});
router.get("/usdata/:what", async (req, res) => {
    try {
        const info = req.params.what;
        const response = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=${info}`);
        const data = await response.json();
        res.json({
            status: "success",
            main: [data]
        });
    }
    catch (error) {
        res.status(500).json({
            Error: `${error}`
        });
    }
});
router.get("*", (req, res) => {
    res.status(404).json({
        Status: 404,
        Error: "page not found"
    });
});
exports.default = router;
//# sourceMappingURL=route.js.map