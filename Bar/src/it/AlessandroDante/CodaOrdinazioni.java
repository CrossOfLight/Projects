package it.AlessandroDante;

public class CodaOrdinazioni {
    private Nodo head;
    private Nodo tail;
    
    public CodaOrdinazioni() {
    	this.head=null;
    	this.tail=null;
    }
    
	public Nodo getTail() {
		return tail;
	}
	
	public void setTail(Nodo tail) {
		this.tail = tail;
	}
	
	public Nodo getHead() {
		return head;
	}
	
	public void setHead(Nodo head) {
		this.head = head;
	}
	
	//aggiungo un ordinazione in coda
	public void enqueue(Ordinazione info) {
		if(head==null) {
			Nodo n= new Nodo(info);
			head=n;
			tail=n;
		} else {
			Nodo n=new Nodo(info);
			tail.setNext(n);
			tail=n;
		}
	}
	
	//elimino testa e la leggo
	public Ordinazione dequeue() throws EccezioniOrdinazione {
		if (head==null) {
			throw new EccezioniOrdinazione("la coda è vuota");
		}
		Nodo testaVecchia=head;
		head=head.getNext();
		return testaVecchia.getInfo();
	}
	
	//stampo solo la testa
	public void stampaTesta() {
		if (head!=null) {
			System.out.println("La prima ordinazione e': "+head.getInfo());
		} else {
		    System.out.println("non c'è nessuna ordinazione");
		}
	}
	
	
}




