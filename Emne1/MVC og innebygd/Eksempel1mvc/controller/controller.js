// Layout
function setLayout(layout) {
    model.layout = layout;
    updateView();
}

// Kortvalg
function selectCard(cardId) {
    model.activeCard = cardId;
    updateView();
}

// Body game
function changePart(part, direction) {
    model.bodyGame[part] += direction;
    if(model.bodyGame[part] > 4) model.bodyGame[part] = 1;
    if(model.bodyGame[part] < 1) model.bodyGame[part] = 4;
    updateView();
}
