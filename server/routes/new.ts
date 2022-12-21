import {Router} from 'express'
import { check } from 'express-validator';
import { getMessages, newMessage } from '../controllers/new';
import validateFields from '../middlewares/validateFields';

const router = Router();

router.get('/',getMessages);

router.post('/',[
    check('username', 'Username is requires').exists(),
    check('text', 'Text is requires').exists(),
    validateFields
],newMessage);

export default router;