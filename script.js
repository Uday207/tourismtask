var index=1;
showImg(index);
function side_slide(e){
	showImg(index +=e);
}
function showImg(e){
	var i;
	const img=document.querySelectorAll('images.img');
	if(e>img.length){
		index=1;
	}
	for(i=0;i<img.length;i++){
		img[i].style.display="none";
	}
	img[index-1].style.display="block";

}