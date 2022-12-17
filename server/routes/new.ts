import {Router} from 'express'
import { getMessages, newMessage } from '../controllers/new';

const router = Router();

router.get('/',getMessages);

router.post('/', newMessage);

export default router;