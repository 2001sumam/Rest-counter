// select DOM
const search = document.querySelector('.search');
const countrycard = document.querySelector('.country_card');
const button = document.querySelector('.btn');
const buttonClear = document.querySelector('.btnc');
const funk= document.querySelector(".funk")
// create click event for clear search box
buttonClear.addEventListener('click',function(){
    search.value="";
});

// create click event function
const clickfunk = function(){
    const rendercountry = function (data) {
        const html = `
                <article class="country">
                    <img class ="country_img" src="${data.flag}"/>
                    <div class="right">
                        
                        <h1>${data.name}</h1>
                        <h3>${data.region}</h3>
                       
                        <div class ="lang"><span>🗣</span>${data.languages.map(staklang)}</div>
                        <h4><span>👨‍👩‍👧‍👦</span>${data.population}</h4>
                        <h4><span>🕓</span>${data.timezones[0]}</h4>
                    </div>

                </article>   
              `
               return html;
       console.log(funk);        
    };
    // creat language function
    const staklang = function(flan){
        const lhtml=`<h4>${flan.name}</h4>`
        return lhtml;
    }
    // fatch API
    const getcountry = function (country) {
        fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
            console.log(response);
            return response.json()
        }).then(function(sresponse){
            console.log(sresponse);
            const res=sresponse;
           countrycard.innerHTML=res.map(rendercountry);
        })
    
        
    
    }
    // call main function
    getcountry(search.value);
};

// call click event function
button.addEventListener('click', clickfunk);
// create enter event 
search.addEventListener("keyup",function(e){
    let key = e.key;
    if(key === "Enter"){
        clickfunk();
    }
});
    