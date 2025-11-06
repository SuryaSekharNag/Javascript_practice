/*function getData(dataId, getNextData){
    //2s
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(1,() => {
    getData(2,() => {
        getData(3,() => {

       
        getData(4);
         });
    });
});
*/

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("data",dataId);
        resolve("success");
        if(getNextData){
            getNextData();
    }
    //2s
    
        },5000);
    });
}