import express from "express";
import { controllers } from "./controllers/controllers.js";
import { errorHandlerMiddleware} from "./middlewares/error_handler_middleware.js";
import { logMiddleware } from "./middlewares/log_middleware.js";
import { getDependency } from "./libs/dependecies.js";
import { UserService } from "./Services/user.js"; 



const app = express();

const router = express.Router();

app.use('/api', router);

router.use(express.json());
router.use(logMiddleware);

controllers(router);


router.use(errorHandlerMiddleware);

const PORT = 3000;


app.listen(
     PORT, 
     () => {
     console.log(`servidor corriendo con http://localhost:${PORT}`); 
   }
);