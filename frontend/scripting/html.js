function createLabel(labeloFor,SubjectName,value,toappend){
    let div = document.createElement("div");

    let label = document.createElement("label");
    // label.style.setProperty("display","block")
    label.for = labeloFor;
    label.innerText = SubjectName;

    let input = document.createElement("input");
    input.setAttribute("type","submit");
    input.style = `color:#fff; background-color:#000;font-size:20px;padding-left:12px;`
    input.setAttribute("disabled",true);
    input.value = value;

    let br = document.createElement("br");

    div.append(label);
    div.append(input);
    div.append(br);
    div.append(br);
    toappend.append(div);
}
