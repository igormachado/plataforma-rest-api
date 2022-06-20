import { Router } from "express";
import { CreateVideosController } from "./modules/useCase/createVideos/CreateVideosController";
import { DeleteVideoByIdController } from "./modules/useCase/deleteVideoById/DeleteVideoByIdController";
import { FindAllVideosController } from "./modules/useCase/findAllVideos/FindAllVideosController";
import { FindVideoByIdController } from "./modules/useCase/findVideoById/FindVideoByIdController";
import { UpdateVideoController } from "./modules/useCase/updateVideo/UpdateVideoController";

const routes = Router();

const createVideoController = new CreateVideosController();
const findAllVideosController = new FindAllVideosController();
const findVideoByIdController = new FindVideoByIdController();
const updateVideoController = new UpdateVideoController();
const deleteVideoByIdController = new DeleteVideoByIdController();

routes.post("/videos", createVideoController.handle);
routes.get("/videos", findAllVideosController.handle);
routes.get("/videos/:id", findVideoByIdController.handle);
routes.put("/videos/:id", updateVideoController.handle);
routes.delete("/videos/:id", deleteVideoByIdController.handle);

export { routes };
