
function updateView() {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${createLayoutButtons()}
        ${createCards()}
    `;
}


function createLayoutButtons() {
    return `
        <button onclick="setLayout('')">Ingen layout</button>
        <button onclick="setLayout('horizontal')">Horisontal</button>
        <button onclick="setLayout('vertical')">Vertikal</button>
        <button onclick="setLayout('grid')">Grid</button>
    `;
}

function createCards() {
    return `
        <div id="cards" class="${model.layout}">
            ${cardsData.map(c => `
                <div class="card">
                    <div class="header green" onclick="selectCard('${c.id}')">
                        ${c.title}
                    </div>
                    <div class="innerCardContent">
                        ${model.activeCard === c.id ? c.content : ''}
                        ${c.id === 'game' && model.activeCard === 'game' ? bodyGameInner() : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function createActiveCard() {
    if (!model.activeCard) return '';

    const card = cardsData.find(c => c.id === model.activeCard);
    if (!card) return '';

    if (card.id !== 'game') return card.content;

   
    return `
        <div class="innerCard">
            ${bodyPartView('head')}
            ${bodyPartView('body')}
            ${bodyPartView('legs')}
        </div>
    `;
}



function bodyGameInner() {
    return `
        <div class="bodies">
            ${bodyPartView('head')}
            ${bodyPartView('body')}
            ${bodyPartView('legs')}
        </div>
    `;
}

function bodyPartView(part) {
    return `
        <div class="bodyPart">
            <button onclick="changePart('${part}', -1)">◀</button>
            <img src="img/${part}${model.bodyGame[part]}.png">
            <button onclick="changePart('${part}', 1)">▶</button>
        </div>
    `;
}