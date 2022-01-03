If we replace mongodb with just mongo in the config file then it is known as "Unhandled Promise Rejection"
Whenever this type error comes or occurs we have to forcefully shut down the server so that the server doesn't get burnt down
We have handled this error in the server.js file

Another type of error is "Uncaught Error"
Uncaught Errors are the errors which occur when we are using a variable which is not defined anywhere in the program
We have to handle Uncaught errors in the starting of the file because if we handle them at the end then it will of no use because the undefined varaible would already have been used anywhere in the upper protion of the file. 
The handle for Uncaught Errors is done at the starting of the server.js file

The last type of error is "mongodb error". Which has been handled in error.js file itself.
One type of MongoDb error is "cast error". In cast error, if we give a very small id of an object for example of length 4, then mongoDb knows that there is no object with such small length id and hence it will show a cast error

Javascript me jitne bhi objects hai vo through refernce pass hote hai

"..." is known as spread operator in JAVASCRIPT.It is used to make shallow copies of JS objects. We have done that so that the changes we do in the variable querycopy do not reflect in queryStr because in javascript the objects are passed as call by reference so the changes we would have done in the variable qureycopy would also have reflected in the original qureyStr which we do not want"

2:28:58, Abhishek has written enteredPassoword and you have written only password in the file userModel.js under the ComparePassword Section


Frontend

1. npx create-react-app .
2. npm i axios react-alert react-alert-template-basic react-helmet react-redux redux redux-thunk redux-devtools-extension react-router-dom
3. 4:46:41 npm install react-icons
4. 4:49:58 npm i webfontloader
5. Home.js created at 5:01:00
6. At 5:08:33 we installed npm i react-rating-stars-component 
7. Implemented Redux at 5:20:00 and downloaded an extension named Redux-Dev-Tools in chrome at 5:21:10.While working in redux we have to maintain 3 things i.e. reducer,action,constant which are gonna be used in reducer(not necessary)
8. WE made a file store.js at 5:20:00
9. We made 3 folder reducers, constants, actions at 5:25:00
10. At 5:48:00 we implemented the loader 
11. At 5:52:17 we took care of the error implemented in line 22 of Home.js, for this we went to our index.js file
12. Till 5:56:50 we took handled the alertprovider in index.js of frontend and took care of error
13. From 5:56:57 we started implementing something such that we can get the products details also because till now we have only gotten the array of the product, for this we went to productConstant and productReducer
14. From 06:00:00 we are implementing a page of ProductDetails such that when a user clicks on a product then a new page should open telling us all the details of the product
15. At 6:05:00 we are using carousel in productDetails.js so for that we are installing npm i react-material-ui-carousel, now to use this we will have to use Bootstrap so to prevent using Bootstrap we will also install npm install @material-ui/icons and npm install @material-ui/core
16. 5:44:35 par image ke link ko static in file se hata kar mongo db me store kiya aur phir database se image ko fetch kiya
17. 6:35:54 par ProductDetails.js ka kaam abhi ke liye khatam ho gya
17. showing of all the products implemented at 6:36:50
18. Search of products implemented from 6:42:52
19. npm i react-js-pagination at 6:50:16 for use in product.js file
20. Very important functionality from 7:18:00 to 7:20:00 
21. At 7:25:00 we started with User in component of frontend
22. npm i express-fileupload coudinary to be used in complete project at 8:02:00
23. logout implemented from 8:11:30 
24. npm i @material-ui/lab in frontend at 8:14:00
25. Product quantity increase and decrease on ProductDetails page handled at 9:48:00
26. Add to cart on ProductDetails page handled at 9:52:00

