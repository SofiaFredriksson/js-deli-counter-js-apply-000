
 var place = 1
function takeANumber(katzDeliLine) {
  katzDeliLine.push(place)
  place++
  return `Welcome. You are number ${place}.`
}

function nowServing(katzDeliLine) {
 
if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
}
 else {
  return "Currently serving " + katzDeliLine.shift() + "."
 }
 return katzDeliLine
}

function currentLine(katzDeliLine) {
  var newArr = []
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
}
 for (var i = 0; i < katzDeliLine.length; i++) {
   newArr.push(` ${i+1}. ${katzDeliLine[i]}`)
 }
 return `The line is currently:${newArr.toString()}`
}
