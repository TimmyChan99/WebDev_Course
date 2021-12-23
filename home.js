/* Storing Teaching Team info into array */

const teachers = [
    {
        name: 'Norman Green',
        job: 'Co-founder & CEO',
        quote: 'The only way to learn a new programming language is by writing programs in it.',
        image: './images/Norman_green1.jpg',
    },
    {
        name: 'Maria williams',
        job: 'Software Engineer',
        quote: 'Code is like humor. When you have to explain it, its bad.',
        image: './images/Maria_williams1.jpg',
    },
    {
        name: 'Mike wang',
        job: 'Ex-Google Software Engineer',
        quote: 'Dont write better error messages, write code that doesnt need them.',
        image: './images/Mike_wang1.jpg',
    },
    {
        name: 'Annia Miller',
        job: 'Co-founder & COO',
        quote: 'The best error message is the one that never shows up.',
        image: './images/Annia_miller1.jpg',
    },
    {
        name: 'Alexander Davis',
        job: 'Ex MIT Professor',
        quote: 'Experience is the name everyone gives to their mistakes.',
        image: './images/Alexander_davis.jpg',
    },
    {
        name: 'Emma Smith',
        job: 'Data Analyst',
        quote: 'Programming isnt about what you know; its about what you can figure out.',
        image: './images/emma_Smith1.jpg',
    }
];

/*  Use dynamic HTML */

const teamContainer = document.querySelector('.the_team');



    // for (let i=0; i < teachers.length; i += 1) {
    //     teamContainer.innerHTML += `<div class="teacher_info d_flex_row">
    //     <div class="img_container">
    //         <img class="teacher_photo" src=${teachers[i].image} alt="Norman green">
    //     </div>
    //     <div class="info d_flex_column">
    //         <h3 class="name">${teachers[i].name}</h3>
    //         <p class="job">${teachers[i].job}</p>
    //         <p class="quotes">"${teachers[i].quote}"
    //         </p>
    //     </div>
    //  </div>`
    // };


    for (let i=0; i < teachers.length; i += 1) {

        if (i > 1) {
            teamContainer.innerHTML += `<div class="teacher_info d_flex_row hidden_card">
            <div class="img_container">
                <img class="teacher_photo" src=${teachers[i].image} alt="Norman green">
            </div>
            <div class="info d_flex_column">
                <h3 class="name">${teachers[i].name}</h3>
                <p class="job">${teachers[i].job}</p>
                <p class="quotes">"${teachers[i].quote}"
                </p>
            </div>
         </div>`
        } else {
            teamContainer.innerHTML += `<div class="teacher_info d_flex_row">
        <div class="img_container">
            <img class="teacher_photo" src=${teachers[i].image} alt="Norman green">
        </div>
        <div class="info d_flex_column">
            <h3 class="name">${teachers[i].name}</h3>
            <p class="job">${teachers[i].job}</p>
            <p class="quotes">"${teachers[i].quote}"
            </p>
        </div>
     </div>`
        }
    }

    /* Toggle Teaching team */

    // const hiddenCard = document.querySelector('.hidden_card');
    // const moreBtn = document.querySelector('."more_btn');

    // function toggle() {
    //     if(hiddenCard.style.display === 'none'){
    //         hiddenCard.style.display = 'flex';
    //     } else {hiddenCard.style.display = 'none'}
    // }


    // let cards = document.querySelectorAll('.hidden_card'), i;
    // for (i=0; i<cards.length; i+=1){
    //     cards[i].style.display = 'none';
    // }
    
    //    let array = [];
    

    //     let cards = document.querySelectorAll('.hidden_card'), i;
    //     for (i=0; i<cards.length; i+=1){
    //             array.push(cards[i]);
    //     }
        
    //     for(let i=0; i< array.length; i+=1){
    //         if(array[i].style.display ='none')
    //         array[i].style.display = 'flex';
    //     }

        
    const cards = document.querySelectorAll('.hidden_card');


    function toggle() {
    cards.forEach((card) => {
        if(card.style.display ==='none'){
             card.style.display = 'flex';
        } else {card.style.display = 'none'}
    })
};

