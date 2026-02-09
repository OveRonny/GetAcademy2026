// STATE
const model = {
    layout: '',       // Ingen, horizontal, vertical, grid
    activeCard: null, // Id på valgt kort
    bodyGame: {       // Body Game state
        head: 1,
        body: 1,
        legs: 1
    }
};

// CARD DATA med alt innhold
const cardsData = [
    {
        id: 'tools',
        title: 'Verktøy',
        content: `
            <div class="innerCard">
                De to viktigste verktøyene vi skal bruke er disse:
                <ul>
                    <li>
                        Koderedigeringsprogrammet 
                        <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                        <br />Vi skal bruke noen <i>extensions</i>:
                        <ul>
                            <li>JavaScript-booster</li>
                            <li>es6-string-html</li>
                            <li>live-server</li>
                            <li>live-share</li>
                        </ul>
                    </li>
                    <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
                </ul>        
            </div>
        `
    },
    {
        id: 'html',
        title: 'HTML',
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
        id: 'css',
        title: 'CSS',
        content: `
            <div class="innerCard">
                Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
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
        id: 'js',
        title: 'JavaScript',
        content: `
            <div class="innerCard">
                Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
                ved å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
                <ul>
                    <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på Moodle.</li>
                    <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript Reference</a></li>
                </ul>
            </div>
        `
    },
    {
        id: 'game',
        title: 'Body Game',
        content: `
            <div id="head" class="bodyPart"></div>
            <div id="body" class="bodyPart"></div>
            <div id="legs" class="bodyPart"></div>
        `
    }
];
