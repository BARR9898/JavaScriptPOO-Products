//Product class 
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;

    }

    //Product methods
}


//UI Class
class Ui {

    //Allow add a product
    addProduct(product) {
        const prductList = document.getElementById("product-list");
        console.log(prductList);
        const element = document.createElement("div")
        element.innerHTML =
            `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Price</strong>: ${product.price}
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger btn-xs" name="delete">Delete</a>
                </div>
            </div>   
        `
        prductList.appendChild(element)
        this.resetForm()
        this.showMessage("Product Added Successfully", 'success')

    }

    //Allow remove a product
    deleteProduct(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage("Product Remover Successfully", 'success')

        }

    }

    //Show a message box
    showMessage(message, cssClass) {
        const div = document.createElement("div")
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //Show the message in the DOM
        const container = document.querySelector('.container')
        const app = document.querySelector('#app')
        container.insertBefore(div, app)
        setTimeout(function() {
            document.querySelector('.alert').remove()
        }, 3000)
    }

    //Reset the form 
    resetForm() {
        document.getElementById("product-form").reset()
    }

}


//DOM Events
document.getElementById("product-form")
    .addEventListener("submit", function(e) {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const year = document.getElementById("year").value;

        //Create new product
        const newProduct = new Product(name, price, year)

        //Create new instance of UI
        const ui = new Ui()

        if (name === "" || year === "" || price === "") {
            return ui.showMessage("Complete field is required", 'warning');
        }

        ui.addProduct(newProduct)
        e.preventDefault();

    })
    //Delete event 
document.getElementById("product-list").addEventListener("click", function(e) {
    const ui = new Ui();
    ui.deleteProduct(e.target)
})