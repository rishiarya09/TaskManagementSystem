export default function registerserviceworker(){
        if('serviceworker' in navigator){
            navigator.serviceworker.register(`${process.env.PUBLIC_URL}\sw.js`).then(function(register){
                console.log("worker",register)
            }).catch (function(err){
               console.log("error",err) 
            })
        }
}
