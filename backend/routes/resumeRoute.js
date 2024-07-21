import { Router } from "express";

import {
    chnageThemeColorController,
	createResumeController,
	getSingleResumeController,
	getUserResumeController,
	updateResumeController,
    uploadAvtarController,
    uploadResumeImageComtroller,
   
} from "../controller/resumeControler.js";
import authMiddleware from "../middlelware/authMiddleware.js";
import {upload} from "../middlelware/multerMidleware.js"

const router = Router();

router.use(authMiddleware);

router.route("/").post(createResumeController).get(getUserResumeController);
router.route("/:resumeId").put(updateResumeController).get(getSingleResumeController);
router.route("/upload-image").post(upload.single("avtar"), uploadAvtarController)
router.route("/upload-resume-image").post(upload.single("resumeImge"), uploadResumeImageComtroller)
router.route("/change-color").post( chnageThemeColorController)

export default router;
