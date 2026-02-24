// object and Array destructuring

const user = {
    fname:"aksh",// this is the way to create the object
    lname:"goel",
    address:{
        city:"ghaziabad",
        country:"india"
    }
}
 let a  = user.fname // this is the way to acces the fname
 console.log(a)
 let b = user.address.city // this is the way to access the object values
 console.log(b)

 let{fname,lname, address:{city,country}} = user // this is the syntax of object destrucuring humee  aalag aalag access krne ke jarurt nhii haa
 console.log(fname, lname)
//  console.log(city)
// or ye code ko clean krr detaa haa

