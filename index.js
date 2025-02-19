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
    {
        name: "ghoul dead inside 1000-7",
        price: 1000.7,
        image: "data:image/jpeg;base64,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"
    }
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

        totalPrice += products[product.productId]["price"] * product.amount;
    });

    // #2
    ////
    lopphindElement.innerText = `Lõppuhind: ${totalPrice.toFixed(2)}$`;
}
function kustutaKorvist(productId){
    korv.forEach((product, index) => {
        if(product.productId === productId){
            korv.splice(index, 1);
        }
    })

    refreshKorvContainer();
}
function ghoulMode(){
    const ul = document.getElementById("ghoul-mode");
    let sum = 1000;
    const minus = 7;
    while(sum > 0){
        const li=document.createElement('li');
        li.innerText=sum;
        ul.appendChild(li);
        sum -= minus;
    }
}

ghoulMode();
