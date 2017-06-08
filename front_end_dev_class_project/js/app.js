
var menu = {
  "Food": [
    {
      "name": "Salads",
      "items": [
        {
          "name": "Louie's Chef Salad",
          "price": 7.5
        },
        {
          "name": "Caesar Salad",
          "price": 9
        },
        {
          "name": "Garden Salad",
          "price": 6.25
        },
        {
          "name": "Side Salad",
          "price": 3.5
        }
      ]
    },
    {
      "name": "Appetizers",
      "items": [
        {
          "name": "Mozzarella Cheese Sticks",
          "price": 4.25
        },
        {
          "name": "Garlic Bread with Cheese",
          "price": 5
        },
        {
          "name": "Breadsticks (6)",
          "price": 4.25
        },
        {
          "name": "Family Breadsticks (12)",
          "price": 6.5
        },
        {
          "name": "Garlic Knots",
          "price": 5
        },
        {
          "name": "Jalapeno Poppers",
          "price": 4
        }
      ]
    },
    {
      "name": "Sandwiches",
      "items": [
        {
          "name": "Steak Hoagie",
          "price": 4.35
        },
        {
          "name": "Stromboli Sub",
          "price": 5
        },
        {
          "name": "Meatball Sub",
          "price": 4.25
        },
        {
          "name": "Roast Beef Sub",
          "price": 6.5
        },
        {
          "name": "Barbeque Chicken Sub",
          "price": 5
        },
        {
          "name": "Jalepeño Poppers",
          "price": 4
        }
      ]
    },
    {
      "name": "Specialty Pizzas",
      "items": [
        {
          "name": "Bacon Cheddar Ham",
          "price": 12.75
        },
        {
          "name": "Bacon Cheeseburger",
          "price": 11.5
        },
        {
          "name": "Taco Pizza",
          "price": 12
        },
        {
          "name": "Chicken Fajita",
          "price": 11.25
        }
      ]
    },
    {
      "name": "Classic Pizzas",
      "items": [
        {
          "name": "Pepperoni",
          "price": 9
        },
        {
          "name": "Cheese",
          "price": 8
        },
        {
          "name": "Sausage",
          "price": 9
        },
        {
          "name": "Meat Lover's",
          "price": 12
        },
        {
          "name": "Supreme",
          "price": 12.75
        }
      ]
    }
  ],
  "Beverages": [
    {
      "name": "Soft Drinks",
      "items": [
        {
          "name": "Pepsi",
          "price": 2
        },
        {
          "name": "Diet Pepsi",
          "price": 2
        },
        {
          "name": "Dr. Pepper",
          "price": 2
        },
        {
          "name": "Mountain Dew",
          "price": 2
        }
      ]
    },
    {
      "name": "Wines",
      "items": [
        {
          "name": "Sangiovese",
          "price": 8.75
        },
        {
          "name": "Pinot Noir",
          "price": 9
        },
        {
          "name": "Syrah/Shiraz",
          "price": 10
        },
        {
          "name": "Merlot",
          "price": 8
        }
      ]
    },
    {
      "name": "Beers",
      "items": [
        {
          "name": "Bud Light",
          "price": 3
        },
        {
          "name": "Blue Moon",
          "price": 3
        },
        {
          "name": "Miller Lite",
          "price": 3
        },
        {
          "name": "Pabst Blue Ribbon",
          "price": 3
        },
        {
          "name": "Guinness",
          "price": 3
        },
        {
          "name": "Good Morning",
          "price": 3
        }
      ]
    }
  ]
}


let table = document.getElementById('foodMenu');
let menuHTML = ``;

//Function adds menu categories from the section argument ("Food" or "Beverages") then ivokes the itemAdd function to add the specific items of that category
function menuCategoryAdd(section) {
section.forEach(function(category) {
  menuHTML +=
        `<table class="menu">
            <thead>
                <tr>
                    <th colspan="2">
                        <h4 class="menu-head red">` +category.name+`</h4>
                    </th>
                </tr>
            </thead>
            <tbody>`;
  menuItemAdd(category);
});
}
//Function takes the category as an argument and retrieves and adds the specific items to that category
function menuItemAdd(category) {
    category.items.forEach(function(item) {
        menuHTML +=
            `<tr>
                <td>`+item.name+`</td>
                <td class="menu-price text-right">$`+item.price.toFixed(2)+`</td>
             </tr>`;
    });

    menuHTML += '</tbody></table>';

//Adds menu information to the table element
table.innerHTML = menuHTML;
}
//invokes function to add food items to page
menuCategoryAdd(menu.Food);
//invokes function to add beverage items to page
menuCategoryAdd(menu.Beverages);


//for (var i = 0; i < menu.Food.length; i++) {
//  menuHTML +=
//        `<table class="menu">
//            <thead>
//                <tr>
//                    <th colspan="2">
//                        <h4 class="menu-head red">` +menu.Food[i].name+`</h4>
//                    </th>
//                </tr>
//            </thead>
//            <tbody>`;
//  for (var j = 0; j < menu.Food[i].items.length; j++) {
//    menuHTML +=
//            `<tr>
//                <td>`+menu.Food[i].items[j].name+`</td>
//                <td class="menu-price text-right">$`+menu.Food[i].items[j].price.toFixed(2)+`</td>
//             </tr>`;
//    }
//
//    menuHTML += '</tbody></table>';
//}
////Adds HTML to the table element
//table.innerHTML = menuHTML;


//Function determines if inputed email address is valid
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};
var $valid = $('<p></p>').insertAfter('.input');
var $button = $('.button');
//Sets default state of button to 'disabled'
$button.prop('disabled', true);
//adds event listener to the email input field
$('.input').keyup(function() {
  //Value of email input
  var $value = $(this).val();
  //Tests if email is valid
  if(isValidEmailAddress($value) === true) {
  //Displays message stating email is valid and adds appropriate css class
    $valid.text("Email Address is Valid!").removeClass('inValid').addClass('valid');
    $button.prop('disabled', false);
  } else {
  //Displays message stating email is invalid and adds appropriate css class
    $valid.text("Email Address is NOT Valid!").addClass('inValid');
    $button.prop('disabled', true);
  }
});

//Prevents default behaviour of submit button and triggers an alert box when clicked
$button.click(function() {
  event.preventDefault();
  alert("Server unavailable, try again later!");
});


