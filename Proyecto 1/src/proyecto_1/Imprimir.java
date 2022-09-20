package proyecto_1;

import java.util.LinkedList;

public class Imprimir implements Instruccion{
	private Expresion contenido;
	private int n;
	public static int contador=0;
	public static int contador2 = 0;
	public Imprimir(Expresion contenido, int n) {
		this.contenido = contenido;
		this.n = n;
	}
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		
		if(n ==0) {
			pyt += "print( "+contenido.Codigo_python().toString()+")";
			pyt += "\n";
				
		}else {
			pyt += "print( "+contenido.Codigo_python().toString()+")";
			pyt += "\n";
			
		}
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String CodigoDot() {

		String dot = "";
		
		int im = contador;
		dot+="nodo"+(im)+"_print;";
		dot+="nodo"+(im)+"_print"+" [ label =\"IMPRIMIR "+"\"];\n";
		dot+="nodo"+(im)+"_print"+" ->"+(contenido.CodigoDot())+"\n";
		contador++;
		
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
	@Override
	public String dot_flu() {

		String dot = "";
		
		int im = contador2;
		dot+="nodo"+(im)+"_print;";
		dot+="nodo"+(im)+"_print"+" [shape=invhouse, style=filled,  label =\"IMPRIMIR "+contenido.dot_flu()+"\"];\n";
		dot+="nodo"+(im)+"_print"+" ->";
		contador2++;
		
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		return dot;
	}
}

