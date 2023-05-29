q=[];
module.exports.enque=function(a){
    q.push(a);
}
module.exports.deque=function(){
    return q.shift();
}
module.exports.display=function(){
    for(let i=0;i<q.length;i++)
    console.log(q[i]);
}