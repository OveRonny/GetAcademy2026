function createActiveCardContent() {
    const card = cardModels.find(c => c.id === activeCardId);
    if (!card) return "";

    return card.content;
}