package proyecto_1;

import java.util.LinkedList;

public class Funcion implements Instruccion{
	private String id, tipo;
	private Expresion ex;
	private LinkedList<Instruccion> instrucciones;
	private LinkedList<Parametro> parametros;
	public Funcion(String id, String tipo, LinkedList<Instruccion> inst, Expresion ex) {
		this.id = id;
		this.tipo = tipo;
		this.instrucciones = inst;
		this.ex = ex;
	}
	public Funcion(String id, String tipo, LinkedList<Instruccion> inst, LinkedList<Parametro> parametros, Expresion ex) {
		this.id = id;
		this.tipo = tipo;
		this.instrucciones = inst;
		this.parametros = parametros;
		this.ex = ex; 
	}
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "def "+id+" (";
		if(parametros != null) {
			for(int i = 0; i<parametros.size(); i++) {
				pyt += parametros.get(i).Codigo_python().toString();
				if(i == parametros.size()-1){
					pyt += ",";
				}
				
			}
		}
		pyt += "): \n";
		if(instrucciones !=null) {
			for(Instruccion ins: instrucciones) {
				pyt+= ins.Codigo_python().toString();
			pyt += "\n";
			}	
		}
		pyt += "return "+ex.Codigo_python().toString()+"\n";
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
