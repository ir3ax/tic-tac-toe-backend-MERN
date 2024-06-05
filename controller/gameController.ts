import { Request, Response } from 'express';
import Game from '../models/schema';

export const getAllGames = async (req: Request, res: Response) => {
    const games = await Game.find();
    res.json(games);
};

export const createGame = async (req: Request, res: Response) => {
    const { player1, player2 } = req.body;
    const game = new Game({
        player1: { name: player1 },
        player2: { name: player2 }
    });
    await game.save();
    res.json(game);
};

export const updateGame = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { player1, player2, rounds } = req.body;
    const game = await Game.findById(id);
    if (game) {
        game.player1 = player1;
        game.player2 = player2;
        game.rounds = rounds;
        await game.save();
        res.json(game);
    } else {
        res.status(404).json({ message: 'Game not found' });
    }
};

export const getGameById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const game = await Game.findById(id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.json(game);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
