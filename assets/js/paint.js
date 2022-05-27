let configureListeners= () => {
    // select img elements  
    let images =document.getElementsByTagName('img')

     for (let i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners    
        document.getElementById(images[i].id).addEventListener('mouseover',addOpacity)
        document.getElementById(images[i].id).addEventListener('mouseover',removeOpacity)  
    } 
}

let addOpacity = (event) => {
    // add appropriate CSS class
    if (!this.classList.includes('dim')){
        this.classList.add('dim');
    }
    getProductInfo(event.target.id);     
}

let removeOpacity = (event) => {
     //remove appropriate CSS class
     if (!this.classList.includes('dim')){
        this.classList.add('dim');
    }
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

let getProductInfo = (paintColor) => {
    let price;
    let colorName;  

    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            price = '$19.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price) 
            break;           
            case 'pn2':
                price = '$12.99'
                colorName = 'Medium Brown' 
                updatePrice(colorName, price)     
                break;            
            case 'pn3':
                price = '$11.99'
                colorName = 'Royal Blue'   
                updatePrice(colorName, price)   
                break;   
            case 'pn4':
                price = '$14.99'
                colorName = 'Bright Red'            
                updatePrice(colorName, price)   
                break;   
            case 'pn5':
                price = '$9.99'
                colorName = 'Solid White' 
                updatePrice(colorName, price)              
                break;   
            case 'pn6':
                price = '$15.99'
                colorName = 'Solid Black'   
                updatePrice(colorName, price)            
                break;   
            case 'pn7':
                price = '$8.99'
                colorName = 'Medium Blue'       
                updatePrice(colorName, price)        
                break;   
            case 'pn8':
                price = '$16.99'
                colorName = 'Light Purple'      
                updatePrice(colorName, price)         
                break;   
            case 'pn9':
                price = '$17.99'
                colorName = 'Bright Yellow'                       
                updatePrice(colorName, price)   
                break;   
              default:                 
    }

    let updatePrice = (colorName, price) => {   
        // select element with corresponding id
        // display price    
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price; 
        
        // select element with corresponding id
        //display color name
        let color = document.getElementById('color-name');
        color.textContent = colorName; 
    }
    
}
