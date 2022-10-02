import { getAllGamesForCatalog } from '../api/data.js';
import { html } from '../lib.js';

const catalogTemplate = (allGames) => html `
<section id="catalog-page">
<h1>All Games</h1>
${allGames.length == 0 ? html `<h3 class="no-articles">No articles yet</h3>` : 
allGames.map(memeCard)}

</section>
`;

const memeCard = (game) => html `
<div class="allGames">
    <div class="allGames-info">
        <img src="${game.imageUrl}">
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/details/${game._id}" class="details-button">Details</a>
    </div>

</div>

`;

export async function catalogPage(ctx) {

    const allGames = await getAllGamesForCatalog();

    ctx.render(catalogTemplate(allGames));
}


