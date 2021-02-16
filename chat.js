$(document).ready(function() {
	
	$("#konusmalar").scrollTop($("#konusmalar")[0].scrollHeight);	
	$("#konusmalar").load("fonksiyon.php?chat=oku");
	
	setInterval(function() {
		$("#konusmalar").load("fonksiyon.php?chat=oku");},2000);
		
		
		
		
		
		
		
		
		$("#gonder").keyup(function(e) {
						
						var text= $("#gonder").val();
						
						var karakter =$("#gonder").attr("maxlength");
						var uyead= $("#gonder").attr("sectionId");
						var uzunluk =text.length; 
			
			
			
			
			if (e.keyCode==13) {
				
				
							if (uzunluk > 5 && uzunluk < karakter) {
								
								
								$.ajax({
									type:"POST",
									url:"fonksiyon.php?chat=ekle",
									data:$("#mesajgonder").serialize(),
									success: function(donen_bilgi) {
									$("#gonder").val("");
									$("#konusmalar").load("fonksiyon.php?chat=oku");								
									
									$("#konusmalar").scrollTop($("#konusmalar")[0].scrollHeight);	
									
							
									
									
									
										
									}
									
									
									
								});
								
								
								
							}
							
							else {
							
							$("#gonder").val("");
								
							}
							
							
				
				
				
				
				
			}
			
			
			
		})
		
		
		
		
		
		
		
		
		
		
	
		
		
		
});