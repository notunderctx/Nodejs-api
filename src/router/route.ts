import express from "express";


const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch("https://api.publicapis.org/entries");
    const data = await response.json();
    res.json({
      status: "success",
      main: [data]
    });
  } catch (error) {
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
  } catch (error) {
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
  } catch (error) {
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

export default router;

