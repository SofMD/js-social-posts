/*
Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per
 stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
*/

const postList = [
    //0
    {
        nameAutor: 'Phil Mangione' ,
        imgProfile: 'https://picsum.photos/id/237/600/350',
        data: 4 'mesi fa' ,
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/238/600/350',
        numLikes: 80 ,
    }

    //1
    {
        nameAutor: 'Barb E. Dahl',
        imgProfile: 'https://picsum.photos/id/239/600/350',
        data: 1 'mese fa' ,
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.' ,
        image: 'https://picsum.photos/id/247/600/350',
        numLikes: 95,  
    }

    //2
    {
        nameAutor:'Jo King' ,
        imgProfile: 'https://picsum.photos/id/137/600/350',
        data: 2 'ore fa',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/217/600/350',
        numLikes: 130,
    }

    //3
    {
        nameAutor: 'Matt Tras',
        imgProfile: 'https://picsum.photos/id/337/600/350' ,
        data: 2 'settimane fa',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://picsum.photos/id/537/600/350',
        numLikes: 99,
    }

    //4
    {
        nameAutor: 'Warren Pe',
        imgProfile:'https://picsum.photos/id/227/600/350' ,
        data: 1 'minuto fa',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image:'https://picsum.photos/id/277/600/350' ,
        numLikes: 23,
    }
]