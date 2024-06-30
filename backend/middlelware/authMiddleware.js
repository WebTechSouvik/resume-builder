import jwt from "jsonwebtoken";
import ApiError from "../utlis/customError.js";

const authMiddleware = (req, res, next) => {
	const token = req.cookies.Token;

	if (!token) {
		next(new ApiError(401, "please loggin"));
	}

	try {
		const decode = jwt.verify(token, process.env.SECRET_KEY);

		req.user = decode.id;
		next();
	} catch (err) {
		next(new ApiError(401, err.message));
	}
};
export default authMiddleware;
