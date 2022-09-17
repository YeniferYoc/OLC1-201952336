package proyecto_1;

import java.util.LinkedList;

public class Imprimir implements Instruccion{
	private Expresion contenido;
	private int n;
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
				
		}else {
			pyt += "println( "+contenido.Codigo_python().toString()+")";
			
		}
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}

