package it.AlessandroDante;

public class EccezioniOrdinazione extends Exception {
	private String error="";
	
	public EccezioniOrdinazione(String error) {
		this.error=error;
	}

	public String getError() {
		return error;
	}
}
