const express = require("express");
const app = express();

const PORT = 3000;

// 🔹 Data
const posts = [
  { name: "Michael Choi", createdAt: "2013-01-22", message: "This is my message" },
  { name: "Michael Choi", createdAt: "2013-01-23", message: "This is my message" },
  { name: "Cory Wheeland", createdAt: "2013-01-24", message: "This is my message" },
];

// 🔹 Route
app.get("/timeline", (req, res) => {

  // reorder posts (newest first)
  const orderedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  let html = `
    <html>
      <head>
        <title>Timeline</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #eee;
            margin: 0;
            padding: 0;
          }

          .container {
            width: 800px;
            margin: 40px auto;
            background: white;
            padding: 20px;
            border: 2px solid #333;
          }

          h1 {
            margin-top: 0;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
          }

          .post {
            margin-bottom: 30px;
          }

          .post-header {
            font-weight: bold;
            margin-bottom: 5px;
          }

          .post-message {
            margin-left: 20px;
            line-height: 1.4;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Timeline</h1>
  `;

  // 🔹 Loop posts
  orderedPosts.forEach(post => {
    html += `
      <div class="post">
        <div class="post-header">
          ${post.name} - ${post.createdAt}
        </div>
        <div class="post-message">
          ${post.message}
        </div>
      </div>
    `;
  });

  // 🔹 Close HTML
  html += `
        </div>
      </body>
    </html>
  `;

  res.send(html);
});

// 🔹 Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
