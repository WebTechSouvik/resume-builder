import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import{ app }from "./app.js";

dotenv.config();

connectDb()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`server sucessfully connected to ${process.env.PORT}`);
		});
	})
	.catch(() => {
		console.log(err);
	});
