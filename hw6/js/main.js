let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard', 'HeadPhones', 'Microphone']
        let PRICES = [100, 120, 1000, 15, 18, 10, 20]
        let IDS = [0, 1, 2, 3, 4, 5, 6] 


        function createProduct (index) {
            return {
                product_name: PRODUCTS_NAMES [index],
                price: PRICES [index],
                id_product: IDS [index],
                img: 'https://placehold.it/200x150',
                createTemplate () {
                    return `
                        <div class="product-item" data-id="${this.id_product}">
                            <img src="${this.img}" alt="${this.product_name}">
                            <div class="desc">
                                <h3>${this.product_name}</h3>
                                <p> ${this.price} </p>
                                <button class="buy-btn"
                                    data-id="${this.id_product}"
                                    data-name="${this.product_name}"
                                    data-price="${this.price}">
                                    Купить
                                </button>
                            </div>
                        </div>
                    `
                }
            }
        }

        function  createCartItems(){
              let img =  'http://placehold.it/100x80'
               return `
                    <div class="cart-item">
                        <img src="${img}" alt="">
                        <h3></h3>
                        <p> sfgsfgsfg</p>
                        <button class="del-btn"></button>
                    </div>`
           }

        let cart = {
            item: [],
            container: '.cart',
            case:` .cart-block`,
          
            
            init(){
                this._renderItem()
                this.visible()
                
            },
          
          
            _renderItem () {
                let container = document.querySelector(this.case)
                let domString = ''

                this.item.forEach(item => {
                    domString += item.createTemplate ()
                })
                container.innerHTML = domString
            },
        
           
            visible(){
               document.querySelector(this.container).addEventListener('click', (e) =>{
                   if(e.target.classList.contains('btn-cart')){
                       let vis = document.querySelector('.cart-block')      
                       if(!vis.classList.contains('invisible')){
                           vis.classList.add('invisible')
                       }else{vis.classList.remove('invisible')}
                                }
                            }
                        )
                    }
        }
        
        let catalog = {
            items: [],
            container: '.products',
            cart: null,
         

            init () {
                this._fetchItems ()
                this._render ()
                this.cart = cart
                
                 document.querySelector (this.container).addEventListener ('click', (evt) => {
                     if (evt.target.classList.contains ('buy-btn')) {
                     let product = evt.target.dataset
                         cart.item.push ({name: product.name, price: product.price, id:product.id})
                     }
            })}
            ,
            _fetchItems () {
                let length = IDS.length

                for (let i = 0; i < length; i++) {
                    this.items.push (createProduct (i))
                }
            },
            _render () {
                let container = document.querySelector (this.container)
                let domString = ''

                this.items.forEach (item => {
                    domString += item.createTemplate ()
                })
                container.innerHTML = domString
            }
        }

        catalog.init ()

        cart. init()

       
