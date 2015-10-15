package it.AlessandroDante;

public class Nodo {
     private Ordinazione info;
     private Nodo next;
     
     public Nodo (Ordinazione info) {
    	 this.setInfo(info);
    	 setNext(null);
     }

	public Nodo getNext() {
		return next;
	}

	public void setNext(Nodo next) {
		this.next = next;
	}

	public Ordinazione getInfo() {
		return info;
	}

	public void setInfo(Ordinazione info) {
		this.info = info;
	}

	
}
