import { editMeme, getMemeById } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (onSubmit, meme) => html `
        <section id="edit-meme">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value="${meme.title}">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"  .value ="${meme.description}">
                    </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value="${meme.imageUrl}">
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`;

export  async function editPage(ctx) {

    const id = ctx.params.id;
    const meme = await getMemeById(id);

    ctx.render(editTemplate(onSubmit, meme));

    async function onSubmit(event) {

        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');

        if(title == "" || description == "" || imageUrl == ""){
            return notify('All fields are required!')
        }

 

      

        await editMeme(id, {title, description, imageUrl});
        ctx.page.redirect('/details/' + id);


    }
}