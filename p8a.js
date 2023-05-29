const readline=require('readline');
function vowelCount()
{
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    rl.question("Enter a String: ",function(input){
        rl.close();
        let obj={'a':0,'e':0,'i':0,'o':0,'u':0}
        var str=input.toLowerCase();
        for(let i=0;i<input.length;i++)
        {
            let c=str.charAt(i);
            if('aeiou'.includes(c))
            {
                if(obj[c])
                    obj[c]++
                else
                    obj[c]=1
            }
        }
        for(let vowel in obj)
        {
            console.log(vowel+" "+obj[vowel]);
        }
    })
}
vowelCount();