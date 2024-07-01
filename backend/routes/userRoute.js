import { Router } from "express";
import {
	logginController,
	loggoutController,
	registerController,
	getUserDetailsController,
	updateUserDetalisController,
    getAllTemplateFromCollection,
    addTemplateToCollection,
} from "../controller/userController.js";
import authMiddleware from "../middlelware/authMiddleware.js";

const router = Router();

router.route("/register").post(registerController);

router.route("/loggin").post(logginController);

router.use(authMiddleware);

router
	.route("/details")
	.get(getUserDetailsController)
	.patch(updateUserDetalisController);

router.route("/loggout").post(loggoutController);

router.route("/template").get(getAllTemplateFromCollection)

router.route("/template/:Id").put(addTemplateToCollection)

export default router;
