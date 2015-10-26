


function controllo(){

	
	var nome = document.getElementById("nome").value;
	var cognome = document.getElementById("cognome").value;
	var validation="0";
    //controllo
	var sesso = document.getElementById("sesso").value;
	
	
	var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	var i=0;
	for ( i = 0; i < nome.length; i++) {
	    if (iChars.indexOf(nome.charAt(i)) != -1) {
	        alert ("Il tuo nome contiene caratteri non supportati. \n Rimuovili e riprova.");
	        return false;
	    }
	}
	
	for ( i = 0; i < cognome.length; i++) {
	    if (iChars.indexOf(cognome.charAt(i)) != -1) {
	        alert ("Il tuo cognome contiene caratteri non supportati. \n Rimuovili e riprova.");
	        return false;
	    }
	}
	
	if(sesso=="null"){
		validation="1";
	}

	for(i=0;i<cognome.length;i++){
		if (cognome.charAt(i)=="0" || cognome.charAt(i)=="1" || cognome.charAt(i)=="2" || cognome.charAt(i)=="3" || cognome.charAt(i)=="4" || cognome.charAt(i)=="5" || cognome.charAt(i)=="6" || cognome.charAt(i)=="7" || cognome.charAt(i)=="8" || cognome.charAt(i)=="9")
	{
			validation="1";
	}	
		
	}
	
	
	for(i=0;i<nome.length;i++){
		if (nome.charAt(i)=="0" || nome.charAt(i)=="1" || nome.charAt(i)=="2" || nome.charAt(i)=="3" || nome.charAt(i)=="4" || nome.charAt(i)=="5" || nome.charAt(i)=="6" || nome.charAt(i)=="7" || nome.charAt(i)=="8" || nome.charAt(i)=="9")
	{
			validation="1";
	}	
		
	}
	
	if (validation==0){
		prova();
	}else{
	
	
	
	alert("errore caratteri non consentiti");
	
	}
    
    
	
}



function prova(){
	var nome = document.getElementById("nome").value;
	nome=nome.toLowerCase();
	var cognome = document.getElementById("cognome").value;
	cognome=cognome.toLowerCase();
	
	var codice="";
	var cognomeCF="";
	var nomeCF="";
	var i=0;
	var consonanti="";
	var vocali="";
	
	//lettere cognome
	
	for(i=0;i<cognome.length;i++){
		if(cognome.charAt(i)!="a" && cognome.charAt(i)!="e" &&
		   cognome.charAt(i)!="i" && cognome.charAt(i)!="o" &&
		   cognome.charAt(i)!="u" && cognome.charAt(i)!=" ")
			consonanti+=cognome.charAt(i);
		else
			vocali+=cognome.charAt(i);
	}
	if(consonanti.length>=3)
		cognomeCF=consonanti.charAt(0)+consonanti.charAt(1)+consonanti.charAt(2);
	else{
		cognomeCF=consonanti;
		for(i=0;cognomeCF.length<3 && i<vocali.length;i++)
			cognomeCF+=vocali.charAt(i);
		while(cognomeCF.length<3)
			cognomeCF+="x";
	}
	
	//lettere nome
	consonanti="";
	vocali="";
	
	for(i=0;i<nome.length;i++){
		if(nome.charAt(i)!="a" && nome.charAt(i)!="e" &&
		   nome.charAt(i)!="i" && nome.charAt(i)!="o" &&
		   nome.charAt(i)!="u" && nome.charAt(i)!=" ")
			consonanti+=nome.charAt(i);
		else
			vocali+=nome.charAt(i);
	}
		if(consonanti.length>=4){
			nomeCF=consonanti.charAt(0)+consonanti.charAt(2)+consonanti.charAt(3);
		}
		else{
			nomeCF=consonanti;
			
			for(i=0;nomeCF.length<3 && i<vocali.length;i++)
				nomeCF+=vocali.charAt(i);
		
			while(nomeCF.length<3)
				nomeCF+="x";
		}
	
				
		//data
		var data = document.getElementById("data").value;
		var anno = data.slice(2,4);
		var mese = data.slice(5,7);
		var giorno = data.slice(8,10);
		var letteraMese="";
		var sesso = document.getElementById("sesso").value;
		
		switch (mese) {
		case '01': letteraMese="a";
		         break;
		case '02': letteraMese="b";
		         break;
		case '03': letteraMese="c";
		         break;
		case '04': letteraMese="d";
		         break;
		case '05': letteraMese="e";
		         break;
		case '06': letteraMese="h";
		         break;
		case '07': letteraMese="l";
		         break;
		case '08': letteraMese="m";
		         break;
		case '09': letteraMese="p";
		         break;
		case '10': letteraMese="r";
		         break;
		case '11': letteraMese="s";
		         break;
		case '12': letteraMese="t";
		         break;
		default: alert("attenzione l'anno non corrisponde");
		         var esci=true;
		}
		if (esci != true) {
		if (sesso == "1") {
			giorno2 = parseInt(giorno);
			giorno2 = giorno2 + 40;
			codice=cognomeCF+nomeCF+anno+letteraMese+giorno2;
		  } else {
		    codice=cognomeCF+nomeCF+anno+letteraMese+giorno;
		  }
		  
		//valore comune
		var com = document.getElementById("comuni").value;
		 codiceMaiuscolo=codice.toUpperCase()+com;
		
		
		//valore finale
		var valoreContro=0;
		
		
		for (var x=0;x < codiceMaiuscolo.length;x++) {
			if (x%2 != 0) {
				switch (codiceMaiuscolo.charAt(x)) {
					case '1': valoreContro=valoreContro+1;
		        				 break;
					case '2': valoreContro=valoreContro+2;
		         				break;
					case '3': valoreContro=valoreContro+3;
						       break;
					case '4': valoreContro=valoreContro+4;
		        			   break;
					case '5': valoreContro=valoreContro+5;
		       				   break;
					case '6': valoreContro=valoreContro+6;
		        			   break;
					case '7': valoreContro=valoreContro+7;
		        			   break;
					case '8': valoreContro=valoreContro+8;
		         			   break;
					case '9': valoreContro=valoreContro+9;
		         			   break;
					case '0': valoreContro=valoreContro+0;
		         			   break;
					case 'A': valoreContro=valoreContro+0;
		        			   break;
					case 'B': valoreContro=valoreContro+1;
		         			   break;
		         	case 'C': valoreContro=valoreContro+2;
		         			   break;
		         	case 'D': valoreContro=valoreContro+3;
		         			   break;
		         	case 'E': valoreContro=valoreContro+4;
		         			   break;
		         	case 'F': valoreContro=valoreContro+5;
		         			   break;
		         	case 'G': valoreContro=valoreContro+6;
		         			   break;
		         	case 'H': valoreContro=valoreContro+7;
		         			   break;
		         	case 'I': valoreContro=valoreContro+8;
		         			   break;
		         	case 'J': valoreContro=valoreContro+9;
		         			   break;
		         	case 'K': valoreContro=valoreContro+10;
		        			   break;
					case 'L': valoreContro=valoreContro+11;
		         			   break;
					case 'M': valoreContro=valoreContro+12;
		         			   break;
					case 'N': valoreContro=valoreContro+13;
		         			   break;
					case 'O': valoreContro=valoreContro+14;
		        			   break;
					case 'P': valoreContro=valoreContro+15;
		         			   break;
		         	case 'Q': valoreContro=valoreContro+16;
		         			   break;
		         	case 'R': valoreContro=valoreContro+17;
		         			   break;
		         	case 'S': valoreContro=valoreContro+18;
		         			   break;
		         	case 'T': valoreContro=valoreContro+19;
		         			   break;
		         	case 'U': valoreContro=valoreContro+20;
		         			   break;
		         	case 'V': valoreContro=valoreContro+21;
		         			   break;
		         	case 'W': valoreContro=valoreContro+22;
		         			   break;
		         	case 'X': valoreContro=valoreContro+23;
		         			   break;
		         	case 'Y': valoreContro=valoreContro+24;
		         			   break;
		         	case 'Z': valoreContro=valoreContro+25;
		         			   break;
		         	}
		      } else {
		         	switch (codiceMaiuscolo.charAt(x)) {
					case '1': valoreContro=valoreContro+0;
		        				 break;
					case '2': valoreContro=valoreContro+5;
		         				break;
					case '3': valoreContro=valoreContro+7;
						       break;
					case '4': valoreContro=valoreContro+9;
		        			   break;
					case '5': valoreContro=valoreContro+13;
		       				   break;
					case '6': valoreContro=valoreContro+15;
		        			   break;
					case '7': valoreContro=valoreContro+17;
		        			   break;
					case '8': valoreContro=valoreContro+19;
		         			   break;
					case '9': valoreContro=valoreContro+21;
		         			   break;
					case '0': valoreContro=valoreContro+1;
		         			   break;
					case 'A': valoreContro=valoreContro+1;
		        			   break;
					case 'B': valoreContro=valoreContro+0;
		         			   break;
		         	case 'C': valoreContro=valoreContro+5;
		         			   break;
		         	case 'D': valoreContro=valoreContro+7;
		         			   break;
		         	case 'E': valoreContro=valoreContro+9;
		         			   break;
		         	case 'F': valoreContro=valoreContro+13;
		         			   break;
		         	case 'G': valoreContro=valoreContro+15;
		         			   break;
		         	case 'H': valoreContro=valoreContro+17;
		         			   break;
		         	case 'I': valoreContro=valoreContro+19;
		         			   break;
		         	case 'J': valoreContro=valoreContro+21;
		         			   break;
		         	case 'K': valoreContro=valoreContro+2;
		        			   break;
					case 'L': valoreContro=valoreContro+4;
		         			   break;
					case 'M': valoreContro=valoreContro+18;
		         			   break;
					case 'N': valoreContro=valoreContro+20;
		         			   break;
					case 'O': valoreContro=valoreContro+11;
		        			   break;
					case 'P': valoreContro=valoreContro+3;
		         			   break;
		         	case 'Q': valoreContro=valoreContro+6;
		         			   break;
		         	case 'R': valoreContro=valoreContro+8;
		         			   break;
		         	case 'S': valoreContro=valoreContro+12;
		         			   break;
		         	case 'T': valoreContro=valoreContro+14;
		         			   break;
		         	case 'U': valoreContro=valoreContro+16;
		         			   break;
		         	case 'V': valoreContro=valoreContro+10;
		         			   break;
		         	case 'W': valoreContro=valoreContro+22;
		         			   break;
		         	case 'X': valoreContro=valoreContro+25;
		         			   break;
		         	case 'Y': valoreContro=valoreContro+24;
		         			   break;
		         	case 'Z': valoreContro=valoreContro+23;
		         			   break;
		         	}
		       }
		  }
		var valoreControl=valoreContro%"26";
		var valoreControllo=parseInt(valoreControl);
		var letteraControllo="";
		var y="";
		y=y+valoreControllo;
				switch (y) {
					case '0': letteraControllo=letteraControllo+"A";
							   break;
					case '1': letteraControllo=letteraControllo+"B";
		        			   break;
					case '2': letteraControllo=letteraControllo+"C";
		         			   break;
		         	case '3': letteraControllo=letteraControllo+"D";
		         			   break;
		         	case '4': letteraControllo=letteraControllo+"E";
		         			   break;
		         	case '5': letteraControllo=letteraControllo+"F";
		         			   break;
		         	case '6': letteraControllo=letteraControllo+"G";
		         			   break;
		         	case '7': letteraControllo=letteraControllo+"H";
		         			   break;
		         	case '8': letteraControllo=letteraControllo+"I";
		         			   break;
		         	case '9': letteraControllo=letteraControllo+"J";
		         			   break;
		         	case '10': letteraControllo=letteraControllo+"K";
		         			   break;
		         	case '11': letteraControllo=letteraControllo+"L";
		        			   break;
					case '12': letteraControllo=letteraControllo+"M";
		         			   break;
					case '13': letteraControllo=letteraControllo+"N";
		         			   break;
					case '14': letteraControllo=letteraControllo+"O";
		         			   break;
					case '15': letteraControllo=letteraControllo+"P";
		        			   break;
					case '16': letteraControllo=letteraControllo+"Q";
		         			   break;
		         	case '17': letteraControllo=letteraControllo+"R";
		         			   break;
		         	case '18': letteraControllo=letteraControllo+"S";
		         			   break;
		         	case '19': letteraControllo=letteraControllo+"T";
		         			   break;
		         	case '20': letteraControllo=letteraControllo+"U";
		         			   break;
		         	case '21': letteraControllo=letteraControllo+"V";
		         			   break;
		         	case '22': letteraControllo=letteraControllo+"W";
		         			   break;
		         	case '23': letteraControllo=letteraControllo+"X";
		         			   break;
		         	case '24': letteraControllo=letteraControllo+"Y";
		         			   break;
		         	case '25': letteraControllo=letteraControllo+"Z";
		         			   break;
		      }
		
		var uscita=codiceMaiuscolo+letteraControllo
		
		 document.getElementById("output").value=uscita;
		}
		
		

}