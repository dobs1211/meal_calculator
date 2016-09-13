"use strict";

//objects with display names and the cost of dinner items

var appetizer = {
    salad: ['tuna salad', 5],
    bread: ['french roll', 5]
};

var main_meal = {
    fish: ['salmon', 20],
    meat: ['rib eye steak', 30]
};

var dessert = {
    chocolate: ['brownies', 5],
    cake: ['vanilla cream', 4]
};

var beverage = {
    alcohol: ['wine', 12],
    soda: ['sprite', 2]
};

//globals
var total;
var tax;
var tip;
var tipArr = [];


//diner object constructor, items ordered
var diner = function(name, appetizer, main_meal, dessert, beverage, total) {
    this.name = name;
    this.appetizer = appetizer;
    this.main_meal = main_meal;
    this.dessert = dessert;
    this.beverage = beverage;
    this.total = total;
};


//dinner object methods
diner.prototype = {
    addTotal:function () {
        var appetizerPrice = appetizer[this.appetizer][1];
        var main_mealPrice = main_meal[this.main_meal][1];
        var dessertPrice = dessert[this.dessert][1];
        var beveragePrice = beverage[this.beverage][1];
        var totalPrice = totalPrice[this.totalPrice][1];
        
        total = appetizerPrice + main_mealPrice + dessertPrice + beveragePrice;
        total = total.toFixed(2);
        console.log(this.name + "ordered: " + appetizer[this.appetizer][0] + "," + main_meal[this.main_meal][0] + "," + dessert[this.dessert][0] + "," + beverage[this.beverage][0]);
        return total;
  },
   
  //calcTax generates the tax from the dinner total
  calcTax:function () {
      tax = total *0.08;
      tax = tax.toFixed(2);
      console.log("Tax was:$ " + tax);
  },

//calcTip generates tip from total dinner, includes tax
calcTip: function() {
    tip = total* 0.20;
    tip = tip.toFixed(2);
    console.log("Tip was: $ " + tip);
    tipArr.push(tip);
    }
};
 
var dinnerGroup = function(diner1, diner2, diner3) {
    this.diner1 = diner1;
    this.diner2 = diner2;
    this.diner3 = diner3;
};
 
 //dinnergroup methods
 dinnerGroup.prototype = {
     totalBill:function () {
         var finalBill = +olgaTotal + +shirlyTotal + +dinaTotal;
         finalBill = finalBill.toFixed(2);
         console.log("Dining group's total bill is :$ " + finalBill);
     },
 //totalTips sums
 totalTips:function () {
        var finalTips = tipArr.reduce(function(a, b) { 
            return a + +b; 
        }, 0);
        console.log("Dining group's total tip:$ " + finalTips);
 },
 //dinerEachbill function handled earlier in code
 dinerEachBill:function () {
     }
 };     
 
 var olga = new diner("olga", "tuna salad", "salmon", "ice cream", "beer");
 olga.addTotal();
 olga.calcTax();
 olga.calcTip();
 var olgaTotal = +total + +tax + +tip;
 olgaTotal = olgaTotal.toFixed(2);
 console.log("olga's total: " + olgaTotal);
 console.log("--------");
 
 
 var shirly = new diner("shirly", "french roll", "rib eye steak", "brownies", "wine");
 shirly.addTotal();
 shirly.calcTax();
 shirly.calcTip();
 var shirlyTotal = +total + +tax + +tip;
 shirlyTotal = shirlyTotal.toFixed(2);
 console.log("shirly's total: " + shirlyTotal);
 console.log("--------");
 
 
 var dina = new diner("dina", "tuna", "quinoa salad", "vanilla cream", "soda");
 dina.addTotal();
 dina.calcTax();
 dina.calcTip();
 var dinaTotal = +total + +tax + +tip;
 dinaTotal = dinaTotal.toFixed(2);
 console.log("dina's total: " + dinaTotal);
 console.log("--------");
 
//  //dinner group object
 var dinnerGroup = dinnerGroup("olga", "shirly", "dina");
 
 //calling methods to generate the total bill and total tips
 dinnerGroup.totalBill(olgaTotal, shirlyTotal, dinaTotal);
 
 dinnerGroup.totalTips(tipArr);