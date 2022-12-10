import { Router } from 'express';

import { handleCreateUser, handleGetUser, handleDeleteUser, handleUpdateUser} from './user.controller';

const router = Router();

router.get('/:id', handleGetUser);
router.post('/', handleCreateUser);
router.delete('/:id', handleDeleteUser);
router.patch('/:id', handleUpdateUser);

export default router;
