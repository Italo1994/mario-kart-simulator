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

async function getRandomBlock() {
    let random = Math.floor(Math.random() * 6) + 1;
    let result = "";

    switch(true) {
        case random < 3:
            result = "RETA";
            break;
        case random < 6:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
    }

    return result;
}

async function playRaceEngine(character1, character2) {
    for(let round=1; round<=5; round++) {
        console.log(`Rodada ${round}`);

        // sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    }
}

(
    async function main() {
        console.log(
            `Corrida entre ${PLAYER1.NAME} e ${PLAYER2.NAME} começando...`
        );
        
        await playRaceEngine(PLAYER1, PLAYER2);
    }
)();