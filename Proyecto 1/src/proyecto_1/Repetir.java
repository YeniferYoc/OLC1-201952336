package proyecto_1;

import java.util.LinkedList;

public class Repetir implements Instruccion{
	private Expresion expresion_log;
	private LinkedList<Instruccion> instrucciones;
	
	public Repetir(LinkedList<Instruccion> inst, Expresion expresion_log) {
		this.expresion_log = expresion_log;
		this.instrucciones = inst;
	}
	public Repetir(Expresion expresion_log) {
		this.expresion_log = expresion_log;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += expresion_log +" = true";
		pyt += "while "+expresion_log.toString()+"== true: \n";
		if(instrucciones !=null) {
			for(Instruccion ins: instrucciones) {
				pyt+= ins.Codigo_python().toString();
			pyt += "\n";
			}	
		}else {
			pyt += "pass \n";
		}
		pyt += "if "+expresion_log+" == false: \n ";
		pyt +="\tbreak\n";
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String CodigoDot() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
