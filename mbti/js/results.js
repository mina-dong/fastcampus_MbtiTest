// http://127.0.0.1:5500/results.html?mbti=isfj  mbti=isfj 이걸 get하는거임.

import { results, mbtis } from "./data.js"

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)

const result = results[mbtis[mbti]]

// querySelector 와 querySelectorAll 차이
const titleEl=document.querySelector('.page-title')
const characterEl=document.querySelector('.character')
const boxEls=document.querySelectorAll('.box')
const jobEls=document.querySelectorAll('.job')
const lectureEl=document.querySelector('.lecture')
const lectureImgEl=document.querySelector('.lecture img')


titleEl.innerHTML = result.title
characterEl.src = result.character

//한 클래스당 넣을 수있게... for each 각각 반복해서. 각 요소에 값을 넣어줌.
boxEls.forEach(function (boxEl, index) {
    boxEl.innerHTML = result.results[index]
} )

jobEls.forEach(function (jobEl, index) {
    jobEl.innerHTML = result.jobs[index]
} )

lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg
