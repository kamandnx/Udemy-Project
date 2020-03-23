const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('Movie');
let ticketPrice = +movieSelect.value;
 





function updateSelectedCount(){
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...selectedSeat].map(function(s){
        return [...seats].indexOf(s);
    });
    localStorage.setItem('selectedSeat', JSON.stringify("seatIndex"));
    
    const selectedSeatCount = selectedSeat.length;
    count.innerHTML = selectedSeatCount;
    total.innerHTML =selectedSeatCount * ticketPrice;
}

 container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected'); 
        updateSelectedCount();
    }
 });

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

movieSelect.addEventListener('change', function(e){
    setMovieData(e.target.selectedIndex, e.target.value);
    ticketPrice= +e.target.value;
    updateSelectedCount();
});