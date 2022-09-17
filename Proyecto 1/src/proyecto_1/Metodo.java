package proyecto_1;

import java.util.LinkedList;

public class Metodo implements Instruccion{
	private String id;
	private LinkedList<Instruccion> instrucciones;
	private LinkedList<Parametro> parametros;
	public Metodo(String id, LinkedList<Instruccion> inst) {
		this.id = id;
		this.instrucciones = inst;
	}
	public Metodo(String id, LinkedList<Instruccion> inst, LinkedList<Parametro> parametros) {
		this.id = id;
		this.instrucciones = inst;
		this.parametros = parametros;
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
		
		return pyt;
	}

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
