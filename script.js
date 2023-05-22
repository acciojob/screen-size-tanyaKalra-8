//your JS code here. If required.
const divElement =  document.createElement("div");
divElement.id = "sizeInfo"
const sizeElement =  document.createElement("h1");
sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

divElement.append(sizeElement)
document.body.append(divElement);

window.onresize = function () {
	sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}