var count = 0
var countA = 0
var countB = 0
var countC = 0
var countD = 0
var countE = 0
var countF = 0
function Tiro() {
  var res = Math.random().toFixed(4)
  console.log(res)
  var contador = document.getElementById('count')
  var common = document.getElementById('Common')
  var rare = document.getElementById('Rare')
  var superRare = document.getElementById('SuperRare')
  var epic = document.getElementById('Epic')
  var legend = document.getElementById('Legend')
  var superLegend = document.getElementById('SuperLegend')

  if (res < 0.8286) {
    common.innerHTML = countA++
  }
  if (res >= 0.8286 && res < 0.9322) {
    rare.innerHTML = countB++
  }
  if (res >= 0.9322 && res < 0.984) {
    superRare.innerHTML = countC++
  }
  if (res >= 0.984 && res < 0.9944) {
    epic.innerHTML = countD++
  }
  if (res >= 0.9944 && res < 0.9996) {
    legend.innerHTML = countE++
  }
  if (res >= 0.9996) {
    superLegend.innerHTML = countF++
  }

  contador.innerHTML = count++
}

function DezTiros() {
  Tiro()
  Tiro()
  Tiro()
  Tiro()
  Tiro()
  Tiro()
  Tiro()
  Tiro()
  Tiro()
  Tiro()
}
