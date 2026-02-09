let activeCardId = null;

const cardModels = [
    {
        id: "tools",
        target: "cardTools",
        content: `
            <div class="innerCard">
                De to viktigste verktøyene vi skal bruke er disse:
                <ul>
                    <li>
                        Koderedigeringsprogrammet 
                        <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                        <ul>
                            <li>JavaScript-booster</li>
                            <li>es6-string-html</li>
                            <li>live-server</li>
                            <li>live-share</li>
                        </ul>
                    </li>
                    <li>
                        Nettleseren 
                        <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
                    </li>
                </ul>
            </div>
        `
    },
    {
        id: "html",
        target: "cardHtml",
        content: `
            <div class="innerCard">
                Vi bruker HTML til å definere et dokument.
                <ul>
                    <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                    <li>Tagger for grunnleggende formatering av tekst</li>
                    <li><tt>&lt;div&gt;</tt></li>
                    <li><tt>&lt;input type="text"&gt;</tt></li>
                    <li><tt>&lt;button&gt;</tt></li>
                    <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a></li>
                    <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a></li>
                </ul>
            </div>
        `
    },
    {
        id: "css",
        target: "cardCss",
        content: `
            <div class="innerCard">
                Vi bruker CSS til å style et dokument.
                <ul>
                    <li><tt>background-color</tt></li>
                    <li><tt>color</tt></li>
                    <li><tt>padding</tt></li>
                    <li><tt>margin</tt></li>
                    <li><tt>border</tt></li>
                    <li><tt>text-align</tt></li>
                    <li><tt>font-size</tt></li>
                    <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
                    <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
                    <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a></li>
                    <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a></li>
                </ul>
            </div>
        `
    },
    {
        id: "javascript",
        target: "cardJavaScript",
        content: `
            <div class="innerCard">
                Det viktigste vi skal lære er programmeringsspråket JavaScript.
                <ul>
                    <li>Manipulere HTML og CSS med JS</li>
                    <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">
                        W3Schools JavaScript Reference</a></li>
                </ul>
            </div>
        `
    }
];
