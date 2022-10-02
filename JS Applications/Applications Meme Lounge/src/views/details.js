import {  delMemeById, getMemeById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (meme, isOwner, onDelete) => html `
        <section id="meme-details">
            <h1>Meme Title: ${meme.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="${meme.imageUrl}">
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                       ${meme.description}
                    </p>


        
                    ${isOwner ? html `<a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button @click=${onDelete} class="button danger">Delete</button>` : null}
                    
                    
                </div>
            </div>
        </section>
`;



export async function detailsPage(ctx) {

    const id = ctx.params.id;  
    const meme = await getMemeById(id);
      
    const userData = getUserData();
    const isOwner = userData && userData.id == meme._ownerId

    async function onDelete() {
        const choice = confirm(
          "Are you sure you want to DELETE this meme forever?"
        );
    
        if (choice) {
          await delMemeById(ctx.params.id);
          ctx.page.redirect("/memes");
        }
      }



    ctx.render(detailsTemplate(meme, isOwner, onDelete));
}