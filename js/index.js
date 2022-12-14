$("#slideNav").click(function () {
  $("#staticNav").removeClass("d-none");
  $("#slideNav").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
$("#staticNav").click(function () {
  $("#slideNav").removeClass("d-none");
  $("#staticNav").addClass("d-none");
  if ($("nav").css("left") === "0px") {
    $("nav").animate({ left: `-250px` }, 1000);
    $(".first").animate({ left: `0px` }, 1000);
  } else {
    $("nav").animate({ left: `0px` }, 1000);
    $(".first").animate({ left: `250px` }, 1000);
  }
});
$("#navSearch").click(function () {
    $("#slideNav").removeClass("d-none");
    $("#staticNav").addClass("d-none");
    if ($("nav").css("left") === "0px") {
      $("nav").animate({ left: `-250px` }, 1000);
      $(".first").animate({ left: `0px` }, 1000);
    } else {
      $("nav").animate({ left: `0px` }, 1000);
      $(".first").animate({ left: `250px` }, 1000);
    }
  });
  $("#navCategories").click(function () {
    $("#slideNav").removeClass("d-none");
    $("#staticNav").addClass("d-none");
    if ($("nav").css("left") === "0px") {
      $("nav").animate({ left: `-250px` }, 1000);
      $(".first").animate({ left: `0px` }, 1000);
    } else {
      $("nav").animate({ left: `0px` }, 1000);
      $(".first").animate({ left: `250px` }, 1000);
    }
  });
  $("#navArea").click(function () {
    $("#slideNav").removeClass("d-none");
    $("#staticNav").addClass("d-none");
    if ($("nav").css("left") === "0px") {
      $("nav").animate({ left: `-250px` }, 1000);
      $(".first").animate({ left: `0px` }, 1000);
    } else {
      $("nav").animate({ left: `0px` }, 1000);
      $(".first").animate({ left: `250px` }, 1000);
    }
  });
  $("#navIngredients").click(function () {
    $("#slideNav").removeClass("d-none");
    $("#staticNav").addClass("d-none");
    if ($("nav").css("left") === "0px") {
      $("nav").animate({ left: `-250px` }, 1000);
      $(".first").animate({ left: `0px` }, 1000);
    } else {
      $("nav").animate({ left: `0px` }, 1000);
      $(".first").animate({ left: `250px` }, 1000);
    }
  });
  $("#navContact").click(function () {
    $("#slideNav").removeClass("d-none");
    $("#staticNav").addClass("d-none");
    if ($("nav").css("left") === "0px") {
      $("nav").animate({ left: `-250px` }, 1000);
      $(".first").animate({ left: `0px` }, 1000);
    } else {
      $("nav").animate({ left: `0px` }, 1000);
      $(".first").animate({ left: `250px` }, 1000);
    }
  });
  let container = [];
  let row = document.getElementById("rowData");
  search("");
  async function search(M) {
    let meals = await fetch(
      `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
    );
    meals = await meals.json();
    displayMeals(meals.meals);
    return meals;
  }
  function displayArea() {
    let e = ``;
    for (let i = 0; i < Array.length; i++) {
      e = `
      <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
          <div class="movie yArea rounded position-relative">
              <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
                  <i class="fa-solid fa-city fa-3x"></i>
                  <h2 class="text-white">${array[i].strArea}</h2>
              </div>
          </div>
      </div>`;
    }
    row.innerHTML = e;
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  }
  
  function displayMeals(array) {
    let meals = "";
    for (let i = 0; i < array.length; i++) {
      meals += `
          <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                  <div  class="post item">
                      <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
                      <div class="layer d-flex align-items-center ">
                          <div class="text rounded-2">
                              <h2 class="ms-2">${array[i].strMeal}</h2>
                          </div>
                      </div>
                  </div>
          </div>`;
    }
    row.innerHTML = meals;
  }
let addSearch = document.getElementById("addSearch");
let userName = document.getElementById("Name");

$("#navSearch").click(function () {
  $("#Search").removeClass("d-none");
  $("#Home , #Categories , #Area , #Ingredients ,#contact ").addClass("d-none");


  let addSearchs = document.getElementById("addSearch");
  async function searchWords(M) {
    let meals = await fetch(
      `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
    );
    meals = await meals.json();
    displayMeals(meals.meals);
    return meals;
  }
  function displayArea() {
    let e = ``;
    for (let i = 0; i < Array.length; i++) {
      e = `
    <div class="col-md-6 col-lg-3 text-white my-3 myM  yArea">
        <div class="movie yArea rounded position-relative">
            <div onclick=(filterByArea('${array[i].strArea}')) class="post ">
                <i class="fa-solid fa-city fa-3x"></i>
                <h2 class="text-white">${array[i].strArea}</h2>
            </div>
        </div>
    </div>`;
    }
    addSearchs.innerHTML = e;
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  }

  function displayMeals(array) {
    let meals = "";
    for (let i = 0; i < array.length; i++) {
      meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="text rounded-2">
                            <h2 class="ms-2">${array[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    addSearchs.innerHTML = meals;
  }
  let usersearch = document.getElementById("search");

  usersearch.addEventListener("input", function () {
    searchWords(usersearch.value);
  });

  let useraddSearchs = document.getElementById("addSearch");
  async function searchLitter(M) {
    let meals = await fetch(
      `https:www.themealdb.com/api/json/v1/1/search.php?s=${M}`
    );
    meals = await meals.json();
    displayMeals(meals.meals);
    return meals;
  }
  function displayMeals(array) {
    let meals = "";
    for (let i = 0; i < array.length; i++) {
      meals += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${array[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="text rounded-2">
                            <h2 class="ms-2">${array[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    useraddSearchs.innerHTML = meals;
  }
  let letter = document.getElementById("letter");

  letter.addEventListener("keyup", function () {
    console.log("fed");
    console.log(letter.value);
    searchLitter(letter.value);
  });


  $("#addSearch").click(function (e) {
    let allImg = $(e.target).text();
    let result = allImg.trim();
    $("#Search").addClass("d-none");
    $("#SearchChang").removeClass("d-none");
    console.log("this");

    async function Instruc(meal) {
      let apiIns = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
      );
      let final = await apiIns.json();
      let allItem = final.meals;

      let int = ` `;

      for (let i = 0; i < allItem.length; i++) {
        int = `
   <div class="row intro  mt-5 text-white">
            <div class="col-md-4 text-center">

                <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                <h2>${allItem[i].strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${allItem[i].strInstructions}</p>
                <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                <h3 class="fw-bolder">Recipes : </h3>
                <ul class="d-flex flex-wrap " id="recipes">
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                    <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                </ul>
                <h3 class="fw-bolder">Tags : </h3>
                <ul class="d-flex " id="tags">
                    <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                </ul>
                <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

            </div>
        </div>
      `;
      }

      document.querySelector("#SearchChang").innerHTML = int;
    }
    Instruc(result);
  });
});
let cotact = [];

$("#navIngredients").click(function () {
  $("#Ingredients").removeClass("d-none");
  $("#Home  , #Categories ,  #contact, #Area, #secSearch  ").addClass("d-none");

  async function Ingredients() {
    let apiRsopns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let result = await apiRsopns.json();
    let allMeals = result.meals;
    console.log(allMeals);
    let cartoona = ``;
    for (let i = 0; i < 20; i++) {
      cartoona += `

<div class="col-lg-3 col-md-6">
            <div class="item text-center rounded-2 bg-o  mt-5">
                <i class="fa-solid icons fa-bowl-food fa-3x"></i>
                <h2 class="text-white">${allMeals[i].strIngredient}</h2>
                <p class="text-white"> ${allMeals[i].strDescription
                  .split(" ")
                  .splice(0, 20)
                  .join(" ")}</p>
            </div>
        
        </div>


    `;
    }
    document.getElementById("IngredientsDisplay").innerHTML = cartoona;
  }

  Ingredients();

$("#IngredientsDisplay").click(function (e) {
  let allImg = $(e.target).text();
  let results = allImg.trim();
  $("#IngredientsDisplay").addClass("d-none");
  $("#IngredChang").removeClass("d-none");
  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;
    console.log(allItem);

    let int = ` `;
    for (let i = 0; i < allItem.length; i++) {
      int += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${allItem[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="text rounded-2">
                            <h2 class="ms-2">${allItem[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    document.querySelector("#IngredChang").innerHTML = int;
  }
    Instruc('Beef');
});

$("#IngredChang").click(function (e) {
  let allImg = $(e.target).text();
  let result = allImg.trim();
  $("#IngredChang").addClass("d-none");
  $("#IngredChangOne").removeClass("d-none");
  console.log("this");

  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;

    let int = ` `;

    for (let i = 0; i < allItem.length; i++) {
      int = `
    <div class="row intro  mt-5 text-white">
             <div class="col-md-4 text-center">

                 <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                 <h2>${allItem[i].strMeal}</h2>
             </div>
             <div class="col-md-8">
                 <h2>Instructions</h2>
                 <p>${allItem[i].strInstructions}</p>
                 <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                 <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                 <h3 class="fw-bolder">Recipes : </h3>
                 <ul class="d-flex flex-wrap " id="recipes">
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                 </ul>
                 <h3 class="fw-bolder">Tags : </h3>
                 <ul class="d-flex " id="tags">
                     <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                 </ul>
                 <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                 <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

             </div>
         </div>
       `;
    }

    document.querySelector("#IngredChangOne").innerHTML = int;
  }
  Instruc(result);
});

});

let category = [];
$("#navCategories").click(function () {
  $("#Categories").removeClass("d-none");
  $("#Home  , #Area , #Ingredients ,#contact , #secSearch  ").addClass(
    "d-none"
  );

  async function searchCategories() {
    let apiRsopns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php?fbclid`
    );
    let result = await apiRsopns.json();
    let allMeals = result.categories;
    console.log(allMeals[0]);
    let cartoona = ``;
    for (let i = 0; i < 14; i++) {
      cartoona += `<div class="col-lg-3  col-md-6 ">
                 <div class="item text-center   rounded-2 Catshado   mt-5">
                     <img class="w-75 py-3  rounded-2" src="${
                       allMeals[i].strCategoryThumb
                     }" alt="">
                     <div class="text rounded-2 ">
                         <h1 class=" m-0 mt-4 text-black">${
                           allMeals[i].strCategory
                         } </h1>
                         <p class="text-black m-0 fa-1x ">${allMeals[
                           i
                         ].strCategoryDescription
                           .split(" ")
                           .splice(0, 9)
                           .join(" ")}</p>
                         </div>
                 </div>
            
                </div> `;
    }
    catgshow.innerHTML = cartoona;
  }
  searchCategories();

$("#catgshow").click(function (e) {
  let allImg = $(e.target).text();
  let results = allImg.trim();
  $("#catgshow").addClass("d-none");
  $("#CategorieschChang").removeClass("d-none");
console.log(results);
let allItem;
  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;
    console.log(allItem);
    let int = ` `;
    for (let i = 0; i < allItem.length; i++) {
      int += `
        <div class="col-md-6 col-lg-3 my-3 myM  shadow">
                <div class="post item">
                    <img src='${allItem[i].strMealThumb}' class="w-100 rounded-2" />
                    <div class="layer d-flex align-items-center ">
                        <div class="text rounded-2">
                            <h2 class="ms-2">${allItem[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        </div>`;
    }
    document.querySelector("#CategorieschChang").innerHTML = int;
  }
  if (allItem != null) {
    Instruc(results);
  } else {
        Instruc('Beef');

  }
  
});

$("#CategorieschChang").click(function (e) {
  let allImg = $(e.target).text();
  let result = allImg.trim();
  $("#CategorieschChang").addClass("d-none");
  $("#CategorieschChangOne").removeClass("d-none");
  console.log("this");

  async function Instruc(meal) {
    let apiIns = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    let final = await apiIns.json();
    let allItem = final.meals;

    let int = ` `;

    for (let i = 0; i < allItem.length; i++) {
      int = `
    <div class="row intro  mt-5 text-white">
             <div class="col-md-4 text-center">

                 <img class="w-100" src="${allItem[i].strMealThumb}" alt="">
                 <h2>${allItem[i].strMeal}</h2>
             </div>
             <div class="col-md-8">
                 <h2>Instructions</h2>
                 <p>${allItem[i].strInstructions}</p>
                 <p class=" fw-bolder">Area :<span>${allItem[i].strArea}</span></p>
                 <p class="fw-bolder">Category :<span>${allItem[i].strCategory}</span></p>
                 <h3 class="fw-bolder">Recipes : </h3>
                 <ul class="d-flex flex-wrap " id="recipes">
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure1} ${allItem[i].strIngredient1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure2}${allItem[i].strMeasure1}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure3}${allItem[i].strIngredient3}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure4}${allItem[i].strIngredient4}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure5}${allItem[i].strIngredient5}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure6}${allItem[i].strIngredient6}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure7}${allItem[i].strIngredient7}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure8}${allItem[i].strIngredient8}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure9}${allItem[i].strIngredient9}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure10}${allItem[i].strIngredient10}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure11}${allItem[i].strIngredient11}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure12}${allItem[i].strIngredient12}</li>
                     <li class="my-3 mx-1 p-1 alert-success rounded">${allItem[i].strMeasure13}${allItem[i].strIngredient13}</li>
                 </ul>
                 <h3 class="fw-bolder">Tags : </h3>
                 <ul class="d-flex " id="tags">
                     <li class="my-3 mx-1 p-1 alert-danger rounded">Soup</li>
                 </ul>
                 <a class="btn mb-3 btn-success text-white" target="_blank" href="${allItem[i].strSource}">Source</a>
                 <a class="btn mb-3 btn-danger  youtube text-white" target="_blank" href="${allItem[i].strYoutube}">Youtub</a>

             </div>
         </div>
       `;
    }

    document.querySelector("#CategorieschChangOne").innerHTML = int;
  }
  Instruc(result);
});

});
