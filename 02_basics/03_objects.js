//objects literals

const mySym=Symbol("key1")

const JsUser={
    name: "prerana",
    "full name": "Prerana Barat",
    age:21,
    locatiion:"khatra",
    email: "prerana12345@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]:"myKey1"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser[mySym]);

JsUser.email="nsnskhkksk"
// Object.freeze(JsUser)
JsUser.name="yugh"
JsUser.email="ikbuhdsjxn"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello js user");
}
// console.log(JsUser.greeting());

// console.log(JsUser);

JsUser.greetingtwo=function(){
    console.log(`Hello js user, ${this.name}`);
    
}
// console.log(JsUser.greetingtwo());
