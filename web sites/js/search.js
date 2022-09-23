
function active()
{
	var x=frm.SR.value;
	if (x=="mjtube.com")
	{
		window.open("mj_tube.html");
	}
	
	else if (x=="mjgallery.com")
	{
		window.open("Gallery.html");
		
	} 
	else if (x=="mjtravel.com")
	{
		window.open("travel.html");
		
	}
	else if (x=="mjbookstore.com")
	{
		window.open("bookstore.html");
	}
	
	else
	{
		alert("check the url");
	}
	
}