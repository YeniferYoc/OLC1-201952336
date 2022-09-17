package proyecto_1;

import java.util.LinkedList;

public class Segun implements Instruccion{
	private Expresion expresion;
	private LinkedList<Caso> casos;
	private LinkedList<Instruccion> contrario;
	
	public Segun(Expresion expresion, LinkedList<Caso> casos) {
		this.expresion = expresion;
		this.casos = casos;
	}
	public Segun(Expresion expresion, LinkedList<Caso> casos, LinkedList<Instruccion> contrario) {
		this.expresion = expresion;
		this.casos = casos;
		this.contrario = contrario;
	}

	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		int contador = 0;
		for(Caso caso: casos) {
			pyt += caso.Codigo_c(expresion,contador).toString();
			pyt += "\n";
			contador += 1;
		}
		if(contrario != null) {
			pyt += "else: \n";
			for(Instruccion ins:contrario) {
				pyt += ins.Codigo_python().toString();
			}
		}
		pyt +="\n";
		
		
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
