/* document.querySelectorAll()
Get all elements in the document with 
class="card":*/

const cards = document.querySelectorAll('.card')


//it removes the active state from current card

function remove_listener() {
	cards.forEach(card =>{
/*classList : 
is useful to add, remove and 
toggle CSS classes on an element.
*/		
		card.classList.remove('active')
	})
}


cards.forEach(card => {
//event listener here is wait for click
	card.addEventListener('click',() =>{
    //until u click image nothing happens
    // remove active state from card
    remove_listener()
    card.classList.add("active")

	})
})