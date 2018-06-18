$('document').ready(()=>{

  $('#search1').click(()=>{
  $('#imdbID').val("");
  $('.movie').empty();

  $.ajax({
  	type:'GET',
  	dataType:'json',
  	async:true,
  	url: 'https://www.omdbapi.com/?apikey=3872e90b&s='+$('#title').val(),
// 3872e90b
   success: (response)=>{
    
    console.log(response);

        if(response.Response=='False')
        {
    	alert("Enter the correct Movie name")
        }


          let x=response.Search;

         if(!$('#year').val()){

      
         
         for(y in x){
         	console.log(x[y]);
         	let detail= `
         	<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                <div class="card" style="margin-bottom:20px;">
                                  <img class="card-img-top" style="" src=${x[y].Poster} alt="poster">
                                  <div class="card-body text-center">
                                    <p class="card-text ">
                                    <h5>${x[y].Title}</h5>
                                    Year : ${x[y].Year}<br>
                                    Type : ${x[y].Type}<br>
                                    ImdbId : ${x[y].imdbID}
                                    </p>
                                  </div>
                                </div>
                            </div>
         	`;
         
         	$('.movie').append(detail);
         	 if(x[y].Poster=="N/A"){
         	 	$('.poster').eq(y).attr("src","poster.jpg")

         	 }

         }

        }

        if($('#year').val()){
   let temp=false;
   for(y in x){
   		console.log(x[y]);
         	if(x[y].Year==$('#year').val()){

         		temp=true;
         			let detail= `
         	<div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div class="card" style="width:300px;margin-bottom:20px;">
                                          <img class="card-img-top" style="" src=${x[y].Poster} alt="poster">
                                          <div class="card-body text-center">
                                            <p class="card-text ">
                                            <h5>${x[y].Title}</h5>
                                            Year : ${x[y].Year}<br>
                                            Type : ${x[y].Type}<br>
                                            ImdbId : ${x[y].imdbID}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
         	`;
         
         	$('.movie').append(detail);
         	 if(x[y].Poster=="N/A"){
         	 	$('.poster').eq(y).attr("src","poster.jpg")

         	 }
         	}

   }
   if(temp==false) {
   	alert("Enter the correct year")
   }

}

 
   },
   error: (err) => {
      console.log(err.responseJSON.Error);
    },
    beforeSend:()=>
    {
       console.log("loading the data")
    },
    complete:()=>{
       console.log("The data is loaded and ready to use")
    },
    timeout:2000



  });

});







$('#reset1').click(()=>{
  
  $('#title').val("");
  $('#year').val("");
  $('#imdbID').val("");
  $('.movie').empty();
});


 })