import connectMongo from "../../../database/conn";
import Users from "../../../database/model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  // only post method is accepted
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // check if request body exists
  if (!req.body) {
    return res.status(400).json({ message: "Missing request body" });
  }

  const { username, email, password } = req.body;

  // check if required fields are present in request body
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await connectMongo();

    // check if user with provided email already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // hash password and create new user
    const hashedPassword = await hash(password, 12);
    const newUser = await Users.create({
      username,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
