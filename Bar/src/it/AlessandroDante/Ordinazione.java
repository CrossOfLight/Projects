package it.AlessandroDante;

public class Ordinazione {
     private int numeroTavolo;
     private String descrizioneOrdinazione;
     
     public Ordinazione (int numeroTavolo,String descrizioneOrdinazione) {
    	 this.numeroTavolo=numeroTavolo;
    	 this.descrizioneOrdinazione=descrizioneOrdinazione;
     }
     
     public int getNumeroTavolo() {
		 return numeroTavolo;
	 }
     
	 public void setNumeroTavolo(int numeroTavolo) {
		 this.numeroTavolo = numeroTavolo;
	 }
	 
	 public String getDescrizioneOrdinazione() {
		 return descrizioneOrdinazione;
	 }
	 
	 public void setDescrizioneOrdinazione(String descrizioneOrdinazione) {
		this.descrizioneOrdinazione = descrizioneOrdinazione;
	 }
	 
}

