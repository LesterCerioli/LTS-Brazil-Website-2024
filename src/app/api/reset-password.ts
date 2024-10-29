import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

interface TokenData {
    email: string;
    timestamp: number;
}

const resetPasswordHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed." });
    }

    const { email, token, newPassword } = req.body;

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as TokenData;
        if (decodedToken.email !== email) {
            return res.status(400).json({ message: "Invalid token or email." });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        res.status(200).json({ message: "Password reset successfully." });
    } catch (error) {
        res.status(400).json({ message: "Token expired or invalid." });
    }
};

export default resetPasswordHandler;
