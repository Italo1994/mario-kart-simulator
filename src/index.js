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

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for(let round=1; round<=5; round++) {
        console.log(`Rodada ${round}`);

        // draw the block
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    

        // roll the dice
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // test of skills
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block == "RETA") {
            totalTestSkill1 = diceResult1 + character1.SPEED;
            totalTestSkill2 = diceResult2 + character2.SPEED;

            await logRollResult(character1.NAME, "VELOCIDADE", diceResult1, character1.SPEED);
            await logRollResult(character2.NAME, "VELOCIDADE", diceResult2, character2.SPEED);
        }
        else if(block == "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANEUVERABILITY;
            totalTestSkill2 = diceResult2 + character2.MANEUVERABILITY;

            await logRollResult(character1.NAME, "MANOBRABILIDADE", diceResult1, character1.MANEUVERABILITY);
            await logRollResult(character2.NAME, "MANOBRABILIDADE", diceResult2, character2.MANEUVERABILITY);
        }
        else if(block == "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.POWER;
            let powerResult2 = diceResult2 + character2.POWER;

            await logRollResult(character1.NAME, "PODER", diceResult1, character1.POWER);
            await logRollResult(character2.NAME, "PODER", diceResult2, character2.POWER);

            console.log(`${character1.NAME} confrontou com ${character2.NAME}`);

            if(powerResult1 > powerResult2 && character2.POINTS > 0) {
                console.log(`${character1.NOME} venceu o confronto! ${character2} perdeu 1 ponto.`);
                character2.POINTS--;
            } else if(powerResult2 > powerResult1 && character1.POINTS > 0) {
                console.log(`${character2.NOME} venceu o confronto! ${character1} perdeu 1 ponto.`);
            }

            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido." : "");
        }

        // verifying the winner
        if(totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NAME} marcou um ponto!`);
            character1.POINTS++;
        } else if(totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NAME} marcou um ponto!`);
            character2.POINTS++;
        }

        console.log("________________________________");
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