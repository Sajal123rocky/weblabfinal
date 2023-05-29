let st=[];
function insert(a)
{
    st.push(a);
}
function remove()
{
    return st.pop();
}
function display()
{
    for(let i=0;i<st.length;i++)
    console.log(st[i]);
}
module.exports={
    insert:insert,
    remove:remove,
    display:display
}