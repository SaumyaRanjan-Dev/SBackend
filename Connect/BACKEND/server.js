import express from "express";

const app = express();
app.use(express.static('dist'))

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// Get a list of 4 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't skeletons fight?",
      content: "They don't have the guts.",
    },
    {
      id: 2,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 4,
      title: "Why can't your nose be 12 inches long?",
      content: "Because then it would be a foot.",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
