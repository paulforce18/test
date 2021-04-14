//random
// https://api.spoonacular.com/recipes/random?number=4&apiKey=8b0be56df07d4137af27d2ed5a809328

                // 8b0be56df07d4137af27d2ed5a809328
                // ef5e70818ffe4694aa94c9bb8d494138
                // 3d44be2ac4ad4533a2e2e877e7097b06
                // 9f8e993cde84468ca4b2ae03a9dfc170
                // 1713c5d68e4f4edeba61f56c663b0dfa
                //e69af1620eb049fea310570624fecc95
                //4b07730616844d59bf595f5e676f73b4
                const API = [
                    "8b0be56df07d4137af27d2ed5a809328",
                    "ef5e70818ffe4694aa94c9bb8d494138",
                    "3d44be2ac4ad4533a2e2e877e7097b06",
                    "9f8e993cde84468ca4b2ae03a9dfc170",
                    "1713c5d68e4f4edeba61f56c663b0dfa",
                    "e69af1620eb049fea310570624fecc95",
                    "4b07730616844d59bf595f5e676f73b4"
                ];
                var key = 0;

                apiList();
                function apiList(){
                    $.ajax({
                        type: 'GET',
                        url: `https://api.spoonacular.com/recipes/random?number=4&apiKey=${API[key]}`,
                        error: function(){
                            key>API.length-1?key=0:key++;
                            apiList();
                            console.log("KEY: ",key);
                        },
                        success: function(){
                            $.ajax({
                                type: 'GET',
                                url: `https://api.spoonacular.com/recipes/random?number=4&apiKey=${API[key]}`,
                                        //rendering
                                        error: function(){
                                            $(".food-slider").append(`
                                                <div>SERVER MAINTENANCE</div>
                                                `)
                                        },
                                        beforeSend: function(){
                                            $(".radio-container").css({"opacity":"0"})
                                            $(".food-slider").append(`
                                            <div class="loading-anim">
                                                <div></div>
                                            </div>`)
                                        },
                                        complete: function(){
                                            $(".radio-container").css({"opacity":"1"})
                                            $(".loading-anim").remove();
                                        },
                                        success: function(data){
                                            let slides =` `;
                                            for(i in data.recipes){
                                                slides += `<div class="slide" id="${data.recipes[i].id}">
                                                <div class="img-container">
                                                    <img src="${data.recipes[i].image}" class="img1" alt="">
                                                </div>
                                                <div class="slide-info">
                                                    <h1>${data.recipes[i].title}</h2>
                                                    <button class="btn" onclick="showRecipe(${data.recipes[i].id})">show recipe</button>
                                                </div>
                                            </div>
                                            `
                                            }
                                            $(".food-slider").prepend(slides);
                                        }
                                    })
                        }
                    })
                }            


        $("#search").click(function(){
            $(this).css("display","none")
            let foodName = $("#searchText").val();
            $("#searchText").val(' ');
            $('.searching').css("height","150px")
            $('.searching > h1').remove();
            $(".message").remove();
            $(".food").remove();
            $(".foods").remove();
            $(".foodsInfo").remove();
            $.ajax({
                type: 'GET',
                url: `https://api.spoonacular.com/recipes/complexSearch?query=${foodName}&apiKey=${API[key]}`,
                        //rendering
                        error: function(){
                            $(".random-foods").append(`
                                <div>SERVER MAINTENANCE</div>
                                `)
                        },
                        beforeSend: function(){
                            $(".random-foods").append(`
                            <div class="loading-anim">
                                <div></div>
                            </div>`)
                        },
                        complete: function(){
                            $(".random-foods").css("display","inline");
                            $("#search").css("display","inline")
                            $(".loading-anim").remove();
                        },
                        success: function(data){
                            var message = foodName;
                            if(data.results.length == 0)
                                message = message + " not found"
                            else{
                                message = `${message}`
                            }
                            $('.searching').append(`<h1 data-aos="fade-up" data-aos-offset="0">${message}</h1>`);
                            let slides =` `;
                            for(i in data.results){
                                slides += `<div class="food" data-aos="fade-up">
                                <img src="${data.results[i].image}" width="100%" height="200px" alt="">
                                <div class="food-1" id="${data.results[i].id}"> 
                                     <h3>${data.results[i].title}</h3>
                                     <button class="btn" onclick="showRecipe(${data.results[i].id})">show recipe</button>
                                </div>
                            </div>
                            `
                            }
                            $(".random-foods").append(slides);
                        }
                    })
        })
        function showRecipe(foodId){
            $('.searching > h1').remove();
            $('.searching').css("height","0")
            $(".message").remove();
            $(".food").remove();
            $(".foods").remove();
            $.ajax({
                type: 'GET',
                url: `https://api.spoonacular.com/recipes/${foodId}/information?includeNutrition=false&apiKey=${API[key]}`,
                        //rendering
                        beforeSend: function(){
                            $(".content-container").append(`
                            <div class="loading-anim">
                                <div></div>
                            </div>`)
                        },
                        complete: function(){
                            $(".loading-anim").remove();
                        },
                        success: function(data){
                            let ingredients = ` `;
                            for(i in data.extendedIngredients){
                                ingredients += `<li>${data.extendedIngredients[i].original}</li>`
                            }
                            $(".content-container").append
                            (
                                `
                                <div class="foodsInfo" data-aos="fade-left" >
                                <div class="foodsInfoBtn">
                                
                                <div>
                                <div class="foodImage">
                                    <div class="info-image">
                                        <img src="${data.image}" width="100%" height="100%" alt="">
                                        <div class="taste">
                                        </div>
                                    </div>
                                    <div class="food-info">
                                        <h2><a href="${data.sourceUrl}" target="_blank">${data.title}</a></h2>
                                        <p>${data.summary}</p>
                                    </div>
                                </div>
                                <div class="ingredients">
                                    <h4>INGREDIENTS</h4>
                                    <ul style="list-style: none;">
                                        ${ingredients}
                                    </ul>
                                </div>
                                <div class="preparation">
                                    <h4>PREPARATION</h4>
                                    ${data.instructions}
                                </div>
                            </div>
                                `
                            );
                        }
                    })
                }
    

