const posts=[
    {title:'post one', body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two', body:'this is post two',createdAt:new Date().getTime()}
];



function getPost(){
        
    let output='';
    for(var i=0;i<posts.length;i++){
        output+=`<li>${posts[i].title} created at ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago </li>`
    }
document.body.innerHTML=output;
    
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            const error=false;

            if(!error){
                resolve(posts.push({...post, createdAt:new Date().getTime()}));
            }else{
                reject('Error: Something went wrong');
            }
            
        },1000);

    });
    
}

//const promise1=Promise.resolve('hello World');
//delete Post
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
//
createPost({title:'post three',body:'this is post three'})

function updateLastActivity()   {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=false;
            
            if(!error){
                resolve(posts.push({...posts, lastUpdated:new Date().getTime()}))
            }else{
                reject('Fix the error')
            }
        },1000);
    })
}


Promise.all([createPost,updateLastActivity,deletePost]).then(([createPost,updateLastActivity,deletePost])=>{
    updateLastActivity().then(response=>{
        console.log(response);
        
    }).catch(err=>console.log('error in update activity',err));

    createPost().then(()=>{
        getPost()
            
    }).catch()

    deletePost().then(()=>{
        getPost()
            
    }).catch();
    deletePost().then(()=>{
        getPost()
            
    }).catch();
    deletePost().then(()=>{
        getPost()
            
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));
