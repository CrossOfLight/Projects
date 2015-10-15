package it.AlessandroDante;

public class MainOrdinazioni {
     public static void main(String[] args) throws EccezioniOrdinazione {
    	 
    	 //creo una coda vuota
    	 CodaOrdinazioni Ordinazioni= new CodaOrdinazioni();
    	 
    	 //creo le ordinazioni
    	 Ordinazione Ordinazione1= new Ordinazione(1,"Ordinazione a");
    	 Ordinazione Ordinazione2= new Ordinazione(2,"Ordinazione b");
    	 Ordinazione Ordinazione3= new Ordinazione(3,"Ordinazione c");
    	 Ordinazione Ordinazione4= new Ordinazione(4,"Ordinazione d");
    	 Ordinazione Ordinazione5= new Ordinazione(5,"Ordinazione e");
    	 
    	 //metto le ordinazioni nella coda
         Ordinazioni.enqueue(Ordinazione1);
    	 Ordinazioni.enqueue(Ordinazione2);
    	 Ordinazioni.enqueue(Ordinazione3);
    	 Ordinazioni.enqueue(Ordinazione4);
    	 Ordinazioni.enqueue(Ordinazione5);
    	 
    	 //provo i metodi di stampa stampando tutte le ordinazioni
    	 System.out.println("le ordinazioni sono:  ");
    	 for(int i=0;i<5;i++) {
         Ordinazione a=Ordinazioni.dequeue();
    	 System.out.println("tavolo numero: "+a.getNumeroTavolo()+"  Ordinazione:  "+a.getDescrizioneOrdinazione());
    	 } 
    	 
    	 
  
    	 
     }
}
