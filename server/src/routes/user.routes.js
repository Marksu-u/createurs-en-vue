import express from "express";
import { getUserDetails } from "../controllers/user.controller";

const router = express();

router.get('/:id', getUserDetails);

export default router;