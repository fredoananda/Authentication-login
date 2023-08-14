import { NextApiHandler } from "next";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, password } = await req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ error: "Invalid password" });
    }

    // If the email and password are valid, you can generate a token here
    // and send it back to the client for authentication

    return res.json({ message: "Login successful" });
  } catch (error: any) {
    return res.json({ error: error.message });
  }
};

export default handler;
