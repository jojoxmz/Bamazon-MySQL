const mysql = require('mysql');
const inquirer = require('inquirer');
const connection= require('./connection.js')

connection.connect(function(err){
	if (err) throw err;
	console.log("Connected as user id: " + connection.threadId + "\n");
	start();
});

const database = {
	create: function(id, productName, department, price, qty, column="stock_quantity", place="products"){
		const queryString= `INSERT INTO ${place} SET ${column} = ${qty} WHERE item_id= ${id}`;
		return new Promise(function(resolve, reject){
			connection.query(queryString, function(err, res){
				if(err) 
					reject(err);
				else if (!res){
					console.log("No Results");
				}else{
					resolve(res);
				};
			});
		});
	},

	read: function(selector="*", place="products"){
		// selector = typeof selector !== "undefined" ? selector: "*";
		// place = typeof place !== "undefined" ? place: "products";
		// const queryString= "SELECT " + selector + " FROM " + place;
		const queryString= `SELECT ${selector} FROM ${place}`;
		return new Promise(function(resolve, reject){
			connection.query(queryString, function(err, res){
				if(err) 
					reject(err);
				else if (!res){
					console.log("No Results");
				}else{
					resolve(res);
				};
			});
		});
	},

	update: function(qty,id ,column="stock_quantity", place="products",){
		// selector = typeof selector !== "undefined" ? selector: "*";
		// place = typeof place !== "undefined" ? place: "products";
		// const queryString= "SELECT " + selector + " FROM " + place;
		// console.log("What is", qty, id, column, place);
		const queryString= `UPDATE ${place} SET ${column} = ${qty} WHERE item_id= ${id}`;
		return new Promise(function(resolve, reject){
			connection.query(queryString, function(err, res){
				if(err) 
					reject(err);
				else if (!res){
					console.log("No Results");
				}else{
					resolve(res);
				};
			});
		});
	},

	// delete: function(){
	// },

	// formatting: function(){
	// 	// fo da nice pretty datas
	// }
};