const stc=require('./stack2');
//const q=require('./queues');
const st=new stc();
st.insert(1);
st.insert(2);
st.insert(3);
console.log("before")
st.display();
console.log("poped up is "+st.remove());
console.log("after")
st.display()
