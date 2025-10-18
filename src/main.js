import "./style.css";
import "./style.css";

const cardsEl = document.querySelectorAll(".card");
const housesEl = document.getElementById("houses");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const loadHouses = async () => {
  const res = await fetch(
    "https://675ec6a21f7ad24269969bf9.mockapi.io/real-state/real-state"
  );
  const houses = await res.json();
  const files = ["state1.png", "state2.png", "state3.png"];

  console.log(houses);

  housesEl.innerHTML = "";

  houses.forEach((house, i) => {
    const imgFile = files[i % files.length];
    housesEl.innerHTML += `
      <div class="flex flex-col w-[300px] rounded-md gap-4 transition-all hover:scale-110 hover:bg-[#e8e5f8] p-6">
        <div class="w-[250px]">
          <img class="w-full object-cover rounded-lg" src="./src/image/${imgFile}" alt="home-pic" />
        </div>
        <span class="text-xl text-[#8c8b8b]">
          <span class="text-[#ff922d]">$</span>${house.price}
        </span>
        <span class="text-[#1f3e72] text-2xl font-bold">${house.name}</span>
        <p class="text-[#8c8b8b] text-xs">${house.adress}</p>
      </div>
    `;
  });
};

loadHouses();

cardsEl.forEach((card) => {
  const paragraph = card.querySelector("p");

  card.addEventListener("click", () => {
    if (paragraph.classList.contains("hidden")) {
      paragraph.classList.remove("hidden");
    } else {
      paragraph.classList.add("hidden");
    }
  });
});

nextBtn.addEventListener("click", () => {
  housesEl.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  housesEl.scrollBy({ left: -300, behavior: "smooth" });
});
