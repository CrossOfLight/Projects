package fattoriale1;
import java.util.Scanner;

/*Calcolo di alcuni fattoriali */
class Fattoriale{

	public static void main(String[] args){

		/* dichiarazione delle variabili */
		int i; //conta il numero di volte che deve essere eseguita la moltipllicazione
		int f; //risultato
		int n; // numero letto da input per il calcolo di n!

		/* calcolo del fattoriale di 5 */
		f = 1*2*3*4*5;
		System.out.print("il fattoriale di 5 e' ");
		System.out.println(f);

		/* calcolo del fattoriale di 17 con il while */
		f=1; //se i=0 l'istruzione while non viene eseguita e f rimane 1
		i=1; //inizializzato con l'elemento neutro della moltiplicazione
		while(i<=17){
			f = f*i;
			i = i+1;
		}
		System.out.print("il fattoriale di 17 e' ");
		System.out.println(f);

		System.out.print("scrivi ora tu un numero di cui vuoi calcolare il fattoriale");
		/* lettura di un numero n da tastiera (modo alternativo alla libreria fiji) */
		n=0;
		Scanner scanner = new Scanner(System.in);
		if(scanner.hasNextInt())
		  n=scanner.nextInt();

		f=1; //se i=0 l'istruzione while non viene eseguita e f rimane 1
		i=1; //inizializzato con l'elemento neutro della moltiplicazione
		while(i<=n){
			f = f*i;
			i = i+1;
		}
		System.out.print("il fattoriale di n e' ");
		System.out.println(f);


	}//end main

}//end class