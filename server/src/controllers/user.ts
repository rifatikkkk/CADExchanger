import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({ message: "All fields are required!" });
    }
    console.log({ name, email, message });
    res
      .status(200)
      .json({ message: `Thank you for your interest, ${name}` })
      .end();
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};
