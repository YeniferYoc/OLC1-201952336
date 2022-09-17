package proyecto_1;

import java.util.LinkedList;

public class Para implements Instruccion{
	private String id;
	private Expresion desde, hasta, incremento;
	private LinkedList<Instruccion> instrucciones;
	
	public Para(String id, Expresion desde, Expresion hasta, LinkedList<Instruccion> instrucciones, Expresion incremento) {
		super();
		this.id = id;
		this.desde = desde;
		this.hasta = hasta;
		this.incremento = incremento;
		this.instrucciones = instrucciones;
		
	}
	public Para(String id, Expresion desde, Expresion hasta,  Expresion incremento) {
		super();
		this.id = id;
		this.desde = desde;
		this.hasta = hasta;
		this.incremento = incremento;
		
	}
	public Para(String id, Expresion desde, Expresion hasta) {
		super();
		this.id = id;
		this.desde = desde;
		this.hasta = hasta;
		
		
	}
	public Para(String id, Expresion desde, Expresion hasta, LinkedList<Instruccion> instrucciones) {
		super();
		this.id = id;
		this.desde = desde;
		this.hasta = hasta;
		this.instrucciones = instrucciones;
		
		
	}
	
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		pyt += "for "+id.toString()+" in range("+desde.Codigo_python()+", "+hasta.Codigo_python()+",";
		if(incremento == null) {
			pyt += "1):\n";
		}
		
		else{
			pyt += incremento.Codigo_python()+"):\n";
		}
		if(instrucciones != null) {
			for(Instruccion instruccion:instrucciones) {
				pyt += instruccion.Codigo_python()+"\n";
			}	
		}else {
		pyt += "pass \n";
		}
		return pyt;
	}



	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	

}