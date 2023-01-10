



function write(message) {
    document.getElementById('heading').innerText = message;
}

var Router = Backbone.Router.extend({});
var router = new Router();
router.route("home",'home',()=> write('This is Home Page') );
router.route("contact", 'contact',()=>  write('This is Contact Page'));
router.route("about", 'about',()=> write("This is About Component"));
Backbone.history.start(); 


// var view1 = Backbone.View.extend({
  
//     initialize: function() {
//         this.render();
//     },
 
//     render: function() {
//         this.$el.html(this.model.get('message') + " from the view 1");
//         return this;
//     }
// });
 
// var view2 = backbone.view.extend({
  
//     initialize: function() {
//         this.render();
//     },
 
//     render: function() {
//         this.$el.html(this.model.get('message') + " from the view 2");
//         return this;
//     }
// });
 
// var view3 = Backbone.view.extend({
    
//     initialize: function() {
//         this.render();
//     },
 
//     render: function() {
//         this.$el.html(this.model.get('message') + " from the view 3");
//         return this;
//     }
// });

// var containerview = backbone.view.extend({ mychildview: null, render: function() { this.$el.html("greeting area"); this.$el.append(this.mychildview.$el); return this; } });
// var containerview = backbone.view.extend({
//      mychildview: null,
    
//      render: function() {
//         this.$el.html("greeting area");
 
//         this.$el.append(this.mychildview.$el);
//         return this;
//     }
// });

// var greeting = new greetmodel({ message: "hello world" });
 
// var container = new containerview({ el: $("#appcontainer"), model: greeting });
// var view1 = null;
// var view2 = null;
// var view3 = null;
 
// function showview1() {
//     if (view1 == null) {
//         view1 = new view1({ model: greeting });
//     }
 
//     container.mychildview = view1;
//     container.render();
// }
 
// function showview2() {
//     if (view2 == null) {
//         view2 = new view2({ model: greeting });
//     }
 
//     container.mychildview = view2;
//     container.render();
// }
 
// function showview3() {
//     if (view3 == null) {
//         view3 = new view3({ model: greeting });
//     }
 
//     container.mychildview = view3;
//     container.render();
// }




// // // var Router = Backbone.Router.extend ({

// // //     routes: {
// // //        "myroute" : "myFunc"
// // //     },

// // //     myFunc: function (myroute) {
// // //        document.write("myroute");
// // //     }
// // //  });

// // //  var router = new Router();

// // //  Backbone.history.start();

// // let myModel = Backbone.Model.extend({

// //     initialize : function(){

// //     }
// // })





// // // // let myModel = Backbone.Model.extend({
// // // //     validate : function(value){
// // // //         if(!value.age >= 18 ){
// // // //           document.write("You are adult")
// // // //         }
// // // //     }
// // // // })

// // // // // let myModel = Backbone.Model.extend();

// // // // let first = new myModel({
// // // //     name:"Anshul Singh",
// // // //     age : 22,
// // // //     tech: "React"
// // // // });

// // // // first.validate();
// // // // // let first = new myModel();

// // // // // first.set("name","Anshul Singh");