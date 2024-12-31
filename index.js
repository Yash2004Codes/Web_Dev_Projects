/*
//synchronous operations

function task1(){
    console.log("task1 is completed");
}
function task2(){
    console.log("task2 is completed");
}
function task3(){
    console.log("task3 is completed");
}
function task4(){
    console.log("task4 is completed");
}


task1();
task2();
task3();
task4();
console.log("this is syncronous execution");
*/
//asynchronous operations
// setTimeout(function  ,time in ms);
/*
function task1(){
    setTimeout( ()=>{
    console.log("task1 is completed");
    } ,5000);
}

function task2(){
    setTimeout( ()=>{
        console.log("task2 is completed");
        } ,4000);
}

function task3(){
    setTimeout( ()=>{
        console.log("task3 is completed");
        
        } ,3000);
}

function task4(){
    setTimeout( ()=>{
        console.log("task4 is completed");
    } ,1000);
}
*/
/*
// method 1 :using callback's
task1(
    ()=>{
        task2(
            ()=>{
                task3(
                    ()=>{
                        task4(
                            ()=>{
            console.log("all tasks are completed");
    
                            }
                        )
                    }
                )
            }
        )
    }
);
*/
//method 2 using promises
/* wrap promise object inside a asyncronous code
sytnax  - new promise( (resolve,reject)=>{aysnchronous code} )
*/
/*
function task1(){
    
    return new Promise(
        (resolve,reject)=>{
            setTimeout( ()=>{
               const result = true;

               if(result){
                resolve("task1 is completed");
               }
               else{
               reject("task1 aborted");
               }
                } ,5000);
        }
    );
}

function task2(){
    
    return new Promise(
        (resolve,reject)=>{
            setTimeout( ()=>{
               const result = false;

               if(result){
                resolve("task2 is completed");
               }
               else{
               reject("task2 aborted");
               }
                } ,4000);
        }
    );
}

function task3(){
    return new Promise(
        (resolve,reject)=>{
            setTimeout( ()=>{
               const result = true;

               if(result){
                resolve("task3 is completed");
               }
               else{
               reject("task3 aborted");
               }
                } ,3000);
        }
    );
}

function task4(){

    return new Promise(
        (resolve,reject)=>{
            setTimeout( ()=>{
               const result = false;

               if(result){
                resolve("task4 is completed");
               }
               else{
               reject("task4 aborted");
               }
                } ,1000);
        }
    );
}
// method chain-ing
/*
task1().
then(value=>{console.log(value); return task2();})
.then(value=>{console.log(value); return task3();})
.then(value=>{console.log(value); return task4();})
.then(value=> console.log(value));
*/

// method 3: using async/await
/*
async function  task(){

    try{
        const task1result = await task1();
        console.log(task1result);
    
        const task2result = await task2();
        console.log(task2result);
    
        const task3result = await task3();
        console.log(task3result);
    
        const task4result = await task4();
        console.log(task4result);    
    }
    catch(error){
        console.log(error);
    }

}
task();
*/
//  json file
/*
fetch("file1.json")
.then(response => response.json())
.then(value =>console.log(value));
*/
 


