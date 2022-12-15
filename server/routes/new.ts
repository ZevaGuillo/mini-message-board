import {Router} from 'express'
import { getNew } from '../controllers/new';

const router = Router();


router.get('/',getNew);


export default router;