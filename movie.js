const url = new URL(location.href); 
const movieId = url.searchParams.get("id")
const movieTitle = url.searchParams.get("title")

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e0dd6a49253e0b9a468284e34ca2c839&page=1';

const main = document.getElementById("section");
const title = document.getElementById("title");

title.innerText = movieTitle;

returnReviews(APILINK);
function returnReviews(url){
    fetch(url+"movie/"+movieId).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.forEach(review => {
            const div_card = document.createElement('div');
            div_card.innerHTML= `
            <div class="row">
              <div class="column">
                <div class="card">
                    New Review
                    <p><strong>Review: </strong>
                      <input type="text" id="new_review" value="">
                    </p>
                    <p><strong>User: </strong>
                      <input type="text" id="new_user" value="">
                    </p>
                    <p><a href="#" onclick="saveReview('new_review', 'new_user')">💾</a>
                    </p>
                </div>
              </div>
            </div>
          `

            main.appendChild(div_card);
        });
    });
}


