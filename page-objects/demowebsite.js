module.exports = {
    url : "https://rahulshettyacademy.com/seleniumPractise/#/",

    elements :{
         Search : "#root > div > header > div > div.search > form > input",
         Image : "#root > div > div.products-wrapper > div > div > div.product-image > img",
         AddingQuantity : "#root > div > div.products-wrapper > div > div > div.stepper-input > a.increment",
         NumberOfItems : "#root > div > div.products-wrapper > div > div > div.stepper-input > input",
         AddToCart : "#root > div > div.products-wrapper > div > div > div.product-action > button",
         price : "#root > div > header > div > div.cart > div.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong",
         CheckOutPopup: "#root > div > header > div > div.cart > a.cart-icon > img",
         checkOutbutton: "#root > div > header > div > div.cart > div.cart-preview.active > div.action-block > button"


    },
    
    commands: [{

search(){

    return this
            .setValue('@Search', "Beetroot")
            .waitForElementVisible('@Image')
            .pause(3000)
},
addingQuantity(){

    for(let i=1; i<=4; i++){
    this.click('@AddingQuantity')
    }
    this.pause(3000) 
    this.click('@AddToCart')
    
}



    }]
}