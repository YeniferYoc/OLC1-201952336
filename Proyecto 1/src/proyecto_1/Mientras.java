package proyecto_1;

import java.util.LinkedList;

public class Mientras implements Instruccion{
	private Expresion expresion_log;
	private LinkedList<Instruccion> instrucciones;
	
	public Mientras(Expresion expresion_log, LinkedList<Instruccion> inst) {
		expresion_log = expresion_log;
		instrucciones = inst;
	}
	public Mientras(Expresion expresion_log) {
		expresion_log = expresion_log;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "while "+expresion_log.toString()+": \n";
		if(instrucciones != null) {
		for(Instruccion ins: instrucciones) {
			pyt+= ins.Codigo_python().toString();
		pyt += "\n";
		}
		}
		
		
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
