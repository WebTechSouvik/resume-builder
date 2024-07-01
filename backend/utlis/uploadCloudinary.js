import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

export const imageUpload = async (path) => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRATE
    });

    const option = {
        resource_type: "auto",
    };

    try {
        if (!path) return null;
        const result = await cloudinary.uploader.upload(path, option);
        await fs.unlink(path);
        return result;
    } catch (err) {
        await fs.unlink(path);
        console.log(err);
    }
};
