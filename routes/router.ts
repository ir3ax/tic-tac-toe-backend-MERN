import express from 'express';

import { getAllGames, createGame, updateGame, getGameById } from '../controller/gameController';

const router = express.Router();

router.get('/', getAllGames);
router.post('/', createGame);
router.put('/:id', updateGame);
router.get('/:id', getGameById);

export default router;
