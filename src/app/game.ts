import { Player } from "./player";
import { xoenum } from "./xoenum";
import { gameStatus } from "./gamestatus";

export interface game
{
    gameId : string;
    player1: Player;
    player2: Player;
    status: gameStatus;
    gameBoard: string;
    xoEnum: xoenum;
}