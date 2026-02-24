function fixText(text) {
    if (typeof text !== "string") return text;

    text = text.trim();

    if (text.length === 0) return text;

    if (/^[a-zA-ZÆØÅæøå]/.test(text)) {
        text = text.charAt(0).toUpperCase() + text.slice(1);
    }

    return text;
}