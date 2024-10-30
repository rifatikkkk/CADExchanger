import { Router } from "express";
import { register } from "../controllers/user";

export default (router: Router) => {
  router.post("/user", register);
};
