let form = document.getElementById("form");
let card = document.querySelector(".card");
let formContainer = document.querySelector(".form-container");
form.addEventListener("submit", function(e){
  e.preventDefault();


  const formData = new FormData(form);

  let name = formData.get("name");
  let l_name = formData.get("l_name");
  let social_media = formData.get("url");
  let user_img = formData.get("user-img");
  let image = URL.createObjectURL(user_img);
  let desc = formData.get("description");

  formContainer.classList.add("hidden");

  card.classList.remove("hidden");

  card.innerHTML = `
   <div class="img overflow-hidden w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
      <img src="${image}" alt="profile image">
    </div>
  <div class="name">
    <h3 class="text-center text-xl"><b>${name} ${l_name} </b></h3>
    <a class=" block text-lg text-center font-semibold" href="${social_media}">Social Media</a>
    <p class="text-base text-center">${desc}</p>

    </div>
`;


});


