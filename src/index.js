const searchBtn = document.getElementById("search-btn");
const clsBtn = document.getElementById("cls-btn");
const detailBtn = document.getElementById("detail");
const detailModal = document.querySelector(".detail-modal");
const listMakanan = document.getElementById("list-makanan");

//modal event listener

//search event
searchBtn.addEventListener("click", getData);

function getData() {
    const searchInput = document
        .getElementById("food-search-input")
        .value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.meals);
            if (data.meals) {
                let element = "";
                data.meals.forEach((meal) => {
                    element += `
                    <div
                    class="w-full max-w-sm bg-white rounded-2xl border-2 border-cyan-500"
                    style="box-shadow: 0px 11px 0px 0px rgb(7, 182, 213)" data-id="${meal.idMeal}" >
                    <a href="#" class="p-6 flex justify-center">
                        <img
                            class="rounded-xl"
                            src="${meal.strMealThumb}"
                            alt="product image"
                        />
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight text-gray-900"
                            >
                                ${meal.strMeal}
                            </h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <span
                                class="font-semibold text-sm text-slate-700 mr-3"
                                >Asal:
                            </span>
                            <span
                                class="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                                >Korea</span
                            >
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-base font-bold text-cyan-600"
                                >Action</span
                            >
                            <button
                                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
                                type="button"
                                id="detail"
                            >
                                <span
                                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
                                >
                                    Detail resep
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                    `;
                });
                listMakanan.innerHTML = element;
            } else {
                listMakanan.innerHTML = `<h1 class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Sorry resep yang diminta tidak ditemukan</h1>`;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
listMakanan.addEventListener("click", (e) => {
    if (e.target.classList.contains("detail-modal")) {
        console.log("work");
    }
});
detailBtn.addEventListener("click", () => {
    detailModal.classList.remove("hidden");
});
clsBtn.addEventListener("click", () => {
    detailModal.classList.add("hidden");
});
