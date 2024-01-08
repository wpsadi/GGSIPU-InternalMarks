let str = `ICT101 Programming for Problem Solving
ICT103 Electrical Science
ICT105 Engineering Mechanics
HS107 Communication Skills-I
BS109 Engineering Chemistry - I
BS111 Engineering Mathematics - I
BS113 Engineering Physics - I
LLB115 Indian Constitution
ICT151 Programming for Problem Solving Lab.
ICT153 Engineering Graphics-I
ICT155 Electrical Science Lab
BS157 Engineering Chemistry-I Lab
BS159 Engineering Physics - I Lab`
str = str.split("\n");
let obj = new Object();
for(let x of str){
    x = x.trim();
    x = x.split(" ");
    let code =x[0];
    let desc = (x.slice(1,x.length)).join(" ")
    obj[`${code.toUpperCase()}`] = desc;
}

// console.log(obj)
// const input = document.getElementById("srch-box");
const btn = document.getElementById("check");

btn.addEventListener("click",function(){
    let enrol = input.value;
    let url = `https://ggispu-internal-marks.adaptable.app/record/${enrol}`;

    let api = fetch(url).then((res)=>{
        return res.json()
    }).then((value)=>{
        let mark = document.getElementById("marks")
        mark.innerHTML = "";
        // createLabel(labeloFor,SubjectName,value,toappend)
        if (value["response"] == "NotFound"){
            mark.innerHTML = "Not Results Found"
        }
        else{
            let len = value.length-3;
            let result = value["result"];
            // console.log(result)

            for (let x of ["Enrollment","SEM","Student"]){
                createLabel("-",x,result[x],mark);
            }
            mark.append(document.createElement("br"))
            for (let x in result){
                if (["Enrollment","SEM","Student"].includes(x)){
                    continue;
                }

                // console.log(x,obj[x])
                if (Object.keys(obj).includes(x.toUpperCase())){
                    createLabel("-",obj[x],result[x],mark);
                }
                else{
                    createLabel("-",x,result[x],mark);
                }
                

            }
        }
        
    })
})

