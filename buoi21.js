//callback
//đồng bộ, chạy từ trên xuống, phải đợi nhau
//bất đồng bộ, chạy code trong dạng ngủ

//đồng bộ, ví dụ mất 2+3 = 5s
// console.log("Bắt đầu đồng bộ");
// function out(){
//     console.log("bắt đầu xử lí đồng bộ");
//     for (var i = 0; i < 9999; i++){

//     }
//     console.log("kết thúc xử lí đồng bộ");
// }
// out();
// console.log("kết thúc đồng bộ");

// //bất đồng bộ, ví dụ quá trình mất 2s, 3s = 3s
// //setTimeout , setInterinval , fetch data , asyn await
// console.log("Bắt đầu bất đông bộ");
// function out1(){
//     console.log("bắt đầu xử lí bất đồng bộ");
//     setTimeout(function(){
//     for (var i = 0; i < 9999; i++){

//     }
//     console.log("kết thúc xử lí bất đồng bộ");
//     });

// }
// out1();
// console.log("kết thúc bất đồng bộ");

//promise buộc phải trả ra đúng or sai
//then kết quả trả ra đúng
//catch kết quả trả ra sai
// function out(){
//     var result = new Promise(function(dung, sai){
//         // dung("Thành công");
//         sai("Thất bại");
//     });
//     return result;
// }
// out()
// .then(function(dung1){
//     console.log(dung1);
// })
// .catch(function(sai1){
//     console.log(sai1);
// })

//promise.all trả ra res rej thành arr
// var function1 = new Promise(function(res, rej){
//     res("Thành công function1");
// })
// var function2 = new Promise(function(res, rej){
//     res("Thành công function2");
// })
// function out(){
//     var result = Promise.all([function1, function2]);
//     return result;
// }
// out()
// .then(function(res){
//     console.log(res);
// })
// .catch(function(res){
//     console.log(res);
// })

//fetch call api với backend
// function out(){
//     const res = new Promise(function(response, rej){
//     fetch("https://jsonplaceholder.typicode.com/posts").then(function(res){
//         response(res);
//     });
//     });
//     return res;
// }
// out()
// .then(function(res){
//     return res.json();
// })
// .then(function(res){
//     console.log(res);
// });

//asyn - await - cách viết promise
// asyn định ngĩa function thành promise
// await dừng thực hiện 
// var div = document.querySelectorAll("div");
// async function out(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res;
// }
// out()
//     .then (function(res){
//         return res.json()
//     })
//     .then (function(res){
//         var newdata = res.slice(0,10);
//        console.log(newdata);
//        newdata.forEach(function(item, index){
//         var p = document.createElement("p");
//         p.innerHTML = `${index} - ${item.title}`;
//         div[0].append(p);
//        })
       
//     })
//     .catch(function(err){
//         console.log(err);
//     })

//api
var input = document.querySelectorAll("input");
var p = document.querySelectorAll("p");
function out(){
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  //phương thức truy cập
  body: JSON.stringify({
    title: input[0].value,
    body: input[1].value,
    userId: input[2].value,
  }),
  //nội dung muốn tạo
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  //check của backend
})
  .then((response) => response.json())
  .then((json) => {
    p[0].innerHTML = `${json.title} - ${json.body} - ${json.userId}`
  });
}


