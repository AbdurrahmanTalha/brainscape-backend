/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app"; // asdasdasd asdnausdog4ift43ift43t
import config from "./config/index";
// testttttasdasdaasdas asdasdas dasda/sdasdansdasasdasdasdudnasud
process.on("uncaughtException", error => {
    console.log(error); // 
    process.exit(1);
});

let server: Server;

async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`🛢   Database is connected successfully`);

        server = app.listen(config.port, () => {
            console.log(`Application  listening on port ${config.port}`);
        });
    } catch (err) {
        console.log("Failed to connect database", err);
    }

    process.on("unhandledRejection", error => {
        if (server) {
            server.close(() => {
                console.log(error);
                process.exit(1);
            });
        } else {
            process.exit(1);
        }
    });
}

bootstrap();
// testing jenkins
