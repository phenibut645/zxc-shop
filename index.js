const products = [
    {
        name: "zxccat",
        price: 24.5,
        image: "https://aleksandermilisenko23.thkit.ee/maparea/zxc-cat/zxccat.jpg"
    },
    {
        name: "Rock",
        price: 2.5,
        image: "https://www.aquasabi.com/media/image/product/34909/md/back-to-nature-river-stone.jpg"
    },
    {
        name: "Bloodstone",
        price: 54.5,
        image: "https://courier.spectral.gg/images/dota/profile_badges/bloodstone.png?size=!source&2"
    },
    {
        name: "Hand of midas",
        price: 14.5,
        image: "https://ih1.redbubble.net/image.875628254.7233/raf,360x360,075,t,fafafa:ca443f4786.jpg"
    },
    {
        name: "Silly cat and fanta",
        price: 9994.5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSpMhAAe5pLJYoDtCm6IBIjGrIf4TqeJZOQ&s"
    },
    {
        name: "Another silly cat",
        price: 1.9,
        image: "https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t1080x1080.jpg"
    },
    {
        name: "Cheezeburger",
        price: 124.5,
        image: "https://i.chzbgr.com/full/10385431296/h498B7E58/times"
    },
    {
        name: "tokyo ghoul shock 1000-7",
        price: 64.3,
        image: "https://api16-normal-useast1a.lemon8-app.com/seo/image?item_id=7313250066284708358&index=2&sign=05c6929f0e1da7415aa449b94ff6ac6e"
    },
    {
        name: "ded insajdik <3 , pos 5 nyasha",
        price: 1000.7,
        image: "https://i1.sndcdn.com/artworks-AXzi8OM45xXOyhC2-VJXZSQ-t500x500.jpg"
    },
    // #4
]
const korv = []

const productsContainer = document.getElementById('products-container');
const productsKorvasContainer = document.getElementById('products-korvas-container');
const lopphindElement = document.getElementById('lopphind');

products.forEach(product => {
    const element = document.createElement("div");
    element.classList.add("product-container");

    const image = document.createElement("img");
    image.src = product.image;
    element.appendChild(image);

    const header = document.createElement("p");
    header.innerText = product.name;
    element.appendChild(header);

    const price = document.createElement("p");
    price.innerText = `${product.price}$`;
    element.appendChild(price);

    const button = document.createElement("button");
    button.innerText = "Osta";
    element.appendChild(button);
    button.addEventListener("click", (e) => {
        addProduct(products.indexOf(product));
    })

    productsContainer.appendChild(element);
})

function addProduct(productId){
    if(products.length < productId || productId < 0){
        return;
    }

    let access = true;
    korv.forEach(product => {
        if(product.productId === productId){
            product.amount += 1;
            access = false;
        }
    })

    if(access){
        console.log(productId, "ok");
        korv.push({
            productId: productId,
            amount: 1
        });
    }
    refreshKorvContainer();
}

function refreshKorvContainer(){
    productsKorvasContainer.textContent = "";
    korv.forEach(product => {
        const productContainerKorvas = document.createElement("div");
        const paragraphElement = document.createElement("p");
        const button = document.createElement("button");

        productContainerKorvas.classList.add("product-korvas-container");

        paragraphElement.innerText = `${products[product.productId]["name"]} -> ${product.amount}`;
        productContainerKorvas.appendChild(paragraphElement);

        button.innerText = "Kustuta";
        button.addEventListener("click", (e)=>{
            kustutaKorvist(product.productId);
        });
        productContainerKorvas.appendChild(button);

        productsKorvasContainer.appendChild(productContainerKorvas);
    })
    lopphindElement.innerText = `Lõppuhind: `; // #2
}
function kustutaKorvist(productId){
    korv.forEach(product => {
        if(product.productId === productId){
            // ... #1
        }
    })

    refreshKorvContainer();
}
function ghoulMode(){
    const ul = document.getElementById("ghoul-mode");
    let sum = 1000;
    const minus = 7;
    while(sum > 0){
        sum -= minus;
        
    }
}
ghoulMode();
