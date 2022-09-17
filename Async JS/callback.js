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

function create3Post(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    },2000);
}
function create4Post(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    },6000);
}

create3Post({title:'post three',body:'this is post three'},getPost);
create4Post({title:'post four', body:'this is post four'},getPost);

var timer;
var count=0;
function lastEditedSecondsAgo(){
    count=0;
    clearInterval(timer)
    timer=setInterval(()=>{
        
        },1000);
}