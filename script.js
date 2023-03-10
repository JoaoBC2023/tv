var moedas = [];
moedas.push({contrato: "0x5F320C3b8f82AcFe8f2Bb1C85D63aA66A7FF524f", par: "0x69d5b8870406617ccfb59c6a97d64bb8b8b40e2f"});

for(var i = 0; i < moedas.length; i++){
	$.get("https://bscscan.com/address/"+moedas[i].par, function(e){

	});
}