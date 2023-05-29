function stack()
{
    this.st=[];
}
stack.prototype.insert=function(a){
    this.st.push(a);
}
stack.prototype.remove=function(){
    return this.st.pop();
}
stack.prototype.display=function(){
    for(let i=0;i<this.st.length;i++)
    console.log(this.st[i]);
}
module.exports=stack;