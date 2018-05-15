import { Router } from 'express'
import testRouter from "./test.route";
const router = new Router();

router.use(testRouter);

export default router;