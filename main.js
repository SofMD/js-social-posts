/*
Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per
 stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
*/


//creo un array di oggetti con dentro i dati 
//con una funzione genero i post
// richiamo la funzione




const postList = [ 
    //0
    {
        nameAutor: 'Phil Mangione' ,
        imgProfile: 'https://picsum.photos/id/251/60/60',
        data: '4 mesi fa' ,
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/238/600/350',
        numLikes: 80,
    },

    //1
    {
        nameAutor: 'Barb E. Dahl',
        imgProfile: 'https://picsum.photos/id/239/60/60',
        data: '1 mese fa' ,
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.' ,
        image: 'https://picsum.photos/id/147/600/350',
        numLikes: 95,  
    },

    //2
    {
        nameAutor:'Jo King' ,
        imgProfile: 'https://picsum.photos/id/137/60/60',
        data:'2 ore fa',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/37/600/350',
        numLikes: 130,
    },

    //3
    {
        nameAutor: 'Matt Tras',
        imgProfile: 'https://picsum.photos/id/337/60/60' ,
        data: '3 settimane fa',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/76/600/350',
        numLikes: 99,
    },

    //4
    {
        nameAutor: 'Warren Pe',
        imgProfile:'https://picsum.photos/id/227/60/60' ,
        data:'1 minuto fa',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://picsum.photos/id/32/600/350' ,
        numLikes: 23,
    },
];
console.table(postList);


//seleziono container
const container = document.querySelector('.posts-list');

//richiamo funzione
genPosts (postList, container);



/**
 * genero post
 */
function genPosts (postList, container) {
    for(let i = 0; i < postList.length; i++) {
        const postItem = postList[i];
        console.log(postItem);


        //inserisco nel html
        container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${postItem.imgProfile}" alt="${postItem.nameAutor}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${postItem.nameAutor}</div>
                        <div class="post-meta__time">${postItem.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postItem.textPost}</div>
            <div class="post__image">
                <img src="${postItem.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${postItem.numLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        
        `
    }

    return post;
}