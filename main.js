function somar(){

var x1 = window.document.getElementById('rx1')
var x2 = window.document.getElementById('rx2')
var res = window.document.getElementById('res')

var m1 = Number (x1.value)
var m2 = Number (x2.value)

var s = m1 + m2
res.innerHTML=(`${s}`)

}

