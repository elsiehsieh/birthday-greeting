function ajaxGetMember(date){
    axios.post(`/api/birthday-greeting/v1`, {
      today: date
    })
  .then(function (response) {
    var cards = document.getElementById("cards");
    cards.innerHTML="";
    if(response.data.length != 0){
        response.data.forEach(d => {
            var card = document.createElement("DIV");
            card.innerHTML = `<div class="card my-5">
            <div class="card-body">
              <h5 class="card-title">${d.title}</h5>
              <p class="card-text">${d.content}</p>
            </div>
          </div>`;
            cards.appendChild(card);
        });
    }else{
        cards.innerHTML='<div class="alert alert-warning" role="alert"> No member was born on this date. </div>';
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

ajaxGetMember("08/08");

document.getElementById("submit-btn").addEventListener('click',function(e){
    var date = document.getElementById("date").value;
    ajaxGetMember(date);
})