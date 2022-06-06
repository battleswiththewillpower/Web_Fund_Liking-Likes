//use an array
let keepCount = [9,12,9];



function add1like(likeIdNumber) {

  let likeElement = document.querySelector(`#like${likeIdNumber}`);
  keepCount[likeIdNumber - 1] += 1;
  likeElement.innerText = "like " + keepCount[likeIdNumber - 1];
  console.log(keepCount);
}
