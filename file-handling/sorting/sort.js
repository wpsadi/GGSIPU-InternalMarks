function nolArrayGen(data) {
    let lines = data.split("\n");
    let line_len = lines.length;

    let k = 1;
    let nolArr = new Array();
    let count = 1;
    while (k < line_len) {

        if (lines[k].includes("Enrollment")) {
            nolArr.push(count);
            count = 1;
        }
        else {
            // console.log(count)
            count++;
        }
        k++;
    }
    nolArr.push(count);

    return nolArr;

}

function jsonData(data) {
    let lines = data.split("\n");

    let content = new Object()

    // console.log(lines.length)
    let line_len = lines.length;

    let count = 0;
    let nolArr = nolArrayGen(data);
    // console.log(nolArr);

    let i = 0;
    while (i < line_len) {


        let smallArray = new Array();
        for (let j = i; j < i + nolArr[count]; j++) {
            smallArray.push((lines[j]).trim());
        }
        i += nolArr[count++]
        // console.log(smallArray);
        let details = smallArray[0];
        details = details.split(" ");

        let detailsObject = new Object();
        detailsObject[details[0]] = details[2];
        detailsObject[details[3]] = (details.slice(6, details.length - 3)).join(" ");
        detailsObject["SEM"] = details[details.length - 1];
        // console.log(detailsObject)


        let marksString = ([smallArray[1], smallArray[2], smallArray[3]]).join(" ");
        marksString = marksString.trim()
        marksString = marksString.split(" ");

        for (let x of marksString) {
            let marks = x.slice(x.indexOf("(") + 1, x.indexOf(")"));
            let subjectCode = x.slice(0, x.indexOf("("));
            detailsObject[subjectCode] = marks;

            // console.log(marks)

        }

        content[detailsObject["Enrollment"]] = detailsObject;

    }
    // console.log(lines)

    return content;

}

function sort(obj) {
    let GiantObj = new Object();
    let enrollArray = Object.keys(obj);

    for (let x in enrollArray) {
        enrollArray[x] = Number(enrollArray[x])
    }

    for (let i = 0; i < enrollArray.length; i++) {
        let min = enrollArray[i];
        for (let j = i; j < enrollArray.length - 1; j++) {
            if (min > enrollArray[j]) {
                min = enrollArray[j];
            }
        }

        let c1 = enrollArray.indexOf(min)
        let temp = enrollArray[i];
        enrollArray[i] = min;
        enrollArray[c1] = temp;
    }

    for (let x of enrollArray) {
        GiantObj[String(x).padStart(11, "0")] = obj[String(x).padStart(11, "0")]
    }

    return GiantObj;

}

module.exports = { jsonData, sort }