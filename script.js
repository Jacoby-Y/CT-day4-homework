const main_content = document.getElementById("main-content");

let in_mid = false;
window.onmousemove = (e)=>{
	if (e.screenX / screen.width <= 0.37 || e.screenX / screen.width >= 0.78) {
		if (in_mid) {
			main_content.style.pointerEvents = "none";
			in_mid = false;
		}
	} else {
		if (!in_mid) {
			main_content.style.pointerEvents = "auto";
			in_mid = true;
		}
	}
}