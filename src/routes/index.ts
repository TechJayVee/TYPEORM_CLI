import { Router } from "express";
import userService from "../service/userService";
const router = Router();

router.post("/register", async (req, res, next) => {
  try {
    const results = await userService.register(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.age
    );
    res.sendStatus(201);
    return res.send(results);
  } catch (error) {
    console.log(error);
    res.status(500).json("somthing went wrong");
  }
});

export default router;
