 $('#search2').click(()=>{
 $('#title').val("");
 $('#year').val("");
 $('.movie').empty();

 $.ajax({
   
    type:'GET',
    dataType:'json',
    async:true,
    url: 'https://www.omdbapi.com/?apikey=3872e90b&i='+$('#imdbID').val(),
    success:(response)=>{
    
      console.log(response);

      if(response.Response=='False'){
        alert("Enter the correct IMBD-ID");
      }
        if(response.Response!='False'){
          // alert(response.Title);
           let detail = `<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div class="card" style="width:300px;margin-bottom:20px;">
                          <img class="card-img-top" style="" src=${response.Poster} alt="poster">
                          <div class="card-body text-center">
                            <p class="card-text ">
                            <h5>${response.Title}</h5><br>
                            <div ><hr>Type : ${response.Type}</div><br>
                            <div ><hr>Production : ${response.Production}<br></div><br>
                            <div ><hr>Plot : ${response.Plot}<br></div><br>
                            <div ><hr>Year : ${response.Year}<br></div><br>
                            <div ><hr>Released : ${response.Released}<br></div><br>
                            <div ><hr>Imdb Rating : ${response.imdbRating}<br></div><br>
                            <div ><hr>Runtime : ${response.Runtime}<br></div><br>
                            <div ><hr>Genre : ${response.Genre}<br></div><br>
                            <div ><hr>Language : ${response.Language}<br></div><br>
                            <div ><hr>Actors : ${response.Actors}<br></div><br>
                            <div ><hr>ImdbId : ${response.imdbID}<br></div>
                            </p>
                          </div>
                        </div>
                      </div>
                  `;
                  $('.movie').append(detail);
                  if(response.Poster == "N/A"){
                    console.log("N/A");
                    $('.card-img-top').attr("src","poster.png");
                  }


        }



    },
error: (err) => {
      console.log(err);
    },
    beforeSend:()=>
    {
       console.log("loading the data")
    },
    complete:()=>{
       console.log("The data is loaded and ready to use")
    },
    timeout:2000


 })


 });

$('#reset2').click(()=>{
  
  $('#title').val("");
  $('#year').val("");
  $('#imdbID').val("");
  $('.movie').empty();
});


