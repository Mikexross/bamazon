const inquirer = require('inquirer');
const mysql = require('mysql');

//creat mysql connx
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    showProduct();
});
//function that shows products to customer
function showProduct() {
    connection.query(
            "SELECT * FROM `products`",
            function (err, res) {
                if (err) throw err;
                //loop through objects in db/table/products 
                for (var i = 0; i < res.length; i++) {
                    //console log table keys and values based on [i]
                    console.log("Item Id: " + res[i].item_id + "Product Name: " + res[i].product_name + "Price: $" + res[i].price);

                }
                inquirer.prompt([
                    {
                        name: "itemID",
                        type: "input",
                        message: " Please input the ID number of the item you would like to purchase"
                    },
                    {
                        name: "amount",
                        type: "input",
                        message: "how many would you like to buy?"
                    }]).then(function(answer){
                        for (var s = 0; s < res.length; s++){
                            let item = answer.item_id;
                            let quantity = answer.stock_quantity;
                        }
                    })
                    
                ])

            },
        }),

    