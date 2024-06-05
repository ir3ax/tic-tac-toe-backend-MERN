import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    name: String,
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    draws: { type: Number, default: 0 }
});

const gameSchema = new mongoose.Schema({
    player1: playerSchema,  
    player2: playerSchema,
    rounds: { type: Number, default: 0 },
    date: { type: Date, default: Date.now }
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
