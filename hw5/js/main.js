let PRODUCTS_NAMES = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phone', 'Router', 'USB-camera', 'Gamepad'] 
let PRICES = [1000, 200, 20, 10, 25, 30, 18, 24]
let IDS = [0, 1, 2, 3, 4, 5, 6, 7,]  

let products = []

function createProductsDTO () {
    let length = IDS.length

    for (let i = 0; i < length; i++) {
        products.push (createProduct (i))
    }
}

function createProduct (index) {
    return {
        product_name: PRODUCTS_NAMES [index],
        price: PRICES [index],
        id_product: IDS [index]
    }
}
createProductsDTO ()

function getHeader() {
    let wrp = document.createElement('div')
    let logo = document.createElement('p')
    let casebtn = document.createElement('button')
    wrp.className = 'header'
    logo.className = 'header_logo'
    logo.innerHTML = 'e-shop'
    casebtn.className = 'casebtn'
    casebtn.innerHTML = 'Корзина'
    document.body.appendChild(wrp)
    wrp.appendChild(logo)
    wrp.appendChild(casebtn)
}
getHeader()

let catalog = document.createElement('div')
catalog.className = 'catalog'
document.body.appendChild(catalog)

function getCatalog(){
    
     for (let i = 0; i < IDS.length; i++){
         let catItem = document.createElement('div')
         let itemImg = document.createElement('img')
         let itemDiscr = document.createElement('p')
         let itemPrice = document.createElement('p')
         let itemBtn= document.createElement('button')
         itemBtn.className = 'itemBtn'
         itemDiscr.className = 'itemName'
         itemPrice.className = 'itemPrice'
         itemImg.className = 'itemimg'
         catItem.className = 'catItem'
         itemBtn.innerHTML = 'Купить'
         itemDiscr.innerHTML = products[i].product_name
         itemPrice.innerHTML = products[i].price + " $"
         catalog.appendChild(catItem)
         catItem.appendChild(itemImg)
         catItem.appendChild(itemDiscr)
         catItem.appendChild(itemPrice)
         catItem.appendChild(itemBtn)

     }
}
getCatalog()
         
