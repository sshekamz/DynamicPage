const posts=[
    {title:'post one', body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two', body:'this is post two',createdAt:new Date().getTime()}
];

function getPost(){
        //lastEditedSecondsAgo();
        let output='';
            for(var i=0;i<posts.length;i++){
                output+=`<li>${posts[i].title} created at ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago </li>`
            }
        document.body.innerHTML=output;
    
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post, createdAt:new Date().getTime()});
            const error=false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
            
        },1000);

    });
    
}
// function create4Post(post,callback){
//     setTimeout(()=>{
//         posts.push({...post, createdAt:new Date().getTime()});
//         callback();
//     },6000);
// }

// createPost({title:'post three',body:'this is post three'})
// .then(getPost)
// .catch(err=>console.log(err));
//create4Post({title:'post four', body:'this is post four'},getPost);

function deletePost(){
    return new Promise((resolve,reject)=>{
        //const error=false;
        setTimeout(()=>{
            
            if(posts.length>0){
                
                resolve(posts.pop());
            }else{
                reject('Now Array is empty')
            }

        },1000);
        
    });
    
}
createPost({title:'post three',body:'this is post three'}).
then(()=>{
    getPost()
    deletePost().then(()=>{
        getPost()
        deletePost().then(()=>{
            getPost()
            deletePost().then(()=>{
                getPost()
                deletePost().then(()=>{}).
                catch((err)=>{
                    console.log("inside catch block", err)
                })
            })

        })
    })
}).catch(err=>console.log(err))

//promise All
// const promise=Promise.resolve('Hellow World');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'GoodBye')
// });
// //const promise4=fetch('https://www.udemy.com/home/my-courses/learning/').then(res=>res.json)
// Promise.all([promise,promise2,promise3]).then(valuee=>console.log(valuee));