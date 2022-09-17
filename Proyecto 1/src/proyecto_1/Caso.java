package proyecto_1;

import java.util.LinkedList;

public class Caso implements Instruccion{
	private Expresion expresion;
	private LinkedList<Instruccion> instrucciones;
	
	public Caso(Expresion expresion, LinkedList<Instruccion> instrucciones) {
		this.expresion = expresion;
		this.instrucciones= instrucciones;
	}
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		
		
		
		return pyt;
	}
	public String Codigo_c(Expresion expresion_switch, int indice) {
		// TODO Auto-generated method stub
		String pyt = "";
		if(indice != 0) {
			pyt += "elif("+expresion_switch.Codigo_python()+"=="+expresion+"): \n";
			for(Instruccion instruccion: instrucciones) {
				pyt += instruccion.Codigo_python().toString();
			}
			
		}else {
		pyt += "if("+expresion_switch.Codigo_python()+"=="+expresion+"): \n";
		for(Instruccion instruccion: instrucciones) {
			pyt += instruccion.Codigo_python().toString();
		}
		}
		pyt += "\n";
		
		return pyt;
	}
	

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
