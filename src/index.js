const PLAYER1 = {
    NAME: "Mario",
    SPEED: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0
};

const PLAYER2 = {
    NAME: "Luigi",
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


(
    async function main() {
        console.log(
            `Corrida entre ${PLAYER1.NAME} e ${PLAYER2.NAME} começando...`
        );
        
        await playRaceEngine(PLAYER1, PLAYER2);
    }
)();