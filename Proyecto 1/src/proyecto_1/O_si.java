package proyecto_1;

import java.util.LinkedList;

public class O_si implements Instruccion{
	private Expresion expresion_log;
	private LinkedList<Instruccion> instrucciones_osi;
	
	public O_si(Expresion expresion_log, LinkedList<Instruccion> inst) {
		expresion_log = expresion_log;
		instrucciones_osi = inst;
	}
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "elif "+expresion_log.toString()+": \n";
		for(Instruccion ins_if: instrucciones_osi) {
			pyt+= ins_if.Codigo_python();
		}
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
