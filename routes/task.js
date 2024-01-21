import express from "express";
import { deletetask, getalltask, newtask, updatetask } from "../controllers/task.js";
import { isauthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new",isauthenticated,newtask)
router.get("/all",isauthenticated,getalltask)

router.route("/:id").put(isauthenticated,updatetask).delete(isauthenticated,deletetask)





export default router