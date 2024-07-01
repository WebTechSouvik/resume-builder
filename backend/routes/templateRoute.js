import { Router } from "express";
import {
	addLikeController,
	createTemplateController,
	getAllTemplateController,
} from "../controller/templateController.js";
import authMiddleware from "../middlelware/authMiddleware.js";
import { upload } from "../middlelware/multerMidleware.js";

const router = Router();

router
	.route("/")
	.post(authMiddleware, upload.single("image_url"), createTemplateController)
	.get(getAllTemplateController);

router.route("/like/:Id").post(authMiddleware, addLikeController);

export default router;
