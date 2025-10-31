const express = require("express");
const users = require("./data.json");

const app = express();
const PORT = 8000;

// Route to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Route to get a user by ID
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
});

app.post('api/users', (req, res) => {
    res.json({status : "pending"});
});

app.patch('api/users/:id', (req, res) => {
    // too edit the usser with id
    res.json({status : "pending"});
});

app.delete('api/users/:id', (req, res) => {
    // too delete the usser with id
    res.json({status : "pending"});
});



// Start the server
app.listen(PORT, () => console.log(`🚀 Server started at http://localhost:${PORT}`));