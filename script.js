let cards = document.getElementById("cards");

function add_card(card_name, card_file) {
    cards.innerHTML += `<a href='./Content/Releases/${card_file}.pdf'>
            <div class="card"><img src="./Content/Covers/${card_file}.jpg" alt="${card_name}"></img></div>
            <div class="card_text">${card_name}</div></a>`
}

add_card("April 2022", "22apr");
add_card("February 2022", "22feb");
add_card("October 2021", "21oct");

// document.getElementsByClassName("card")[0].classList.add("card_new");