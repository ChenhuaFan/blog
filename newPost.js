Date.prototype.Format = function (fmt) { //author: meizz   
    var o = {
        "M+": this.getMonth() + 1,                 //月份   
        "d+": this.getDate(),                    //日   
        "h+": this.getHours(),                   //小时   
        "m+": this.getMinutes(),                 //分   
        "s+": this.getSeconds(),                 //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

const fs = require('fs');

let args = process.argv.slice(2);

const [name, ...category] = args;

if (!name) throw new Error('No post name detected.');

fs.writeFile(
    `./blog/_posts/${name}.md`,
    `---\r\ntitle: '${name}'\r\ndate: ${(new Date()).Format("yyyy-MM-dd hh:mm:ss")}\r\ncategories: ['']\r\ntags: ${category}\r\n---`,
    function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The post was created.");
    });

console.log(name, category);