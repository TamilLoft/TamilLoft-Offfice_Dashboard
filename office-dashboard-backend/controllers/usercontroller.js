import { User } from '../models/user.js';

export const webView = (req, res) => {
    res.send("hello");
};

export const userLog = (req, res) => {
    // Logic for userLog function
    res.send("User logged");
};

