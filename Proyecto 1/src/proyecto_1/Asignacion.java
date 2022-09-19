package proyecto_1;

import java.util.LinkedList;

public class Asignacion implements Instruccion{
	private LinkedList<String> identificadores;
	private Expresion valor;
	public static int contador =0;
	public Asignacion( LinkedList<String> identificadores, Expresion valor) {
		super();
		this.identificadores = identificadores;
		this.valor = valor;
	}
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		for(String id:identificadores) {
			pyt += id.toString()+" = "+valor.Codigo_python()+"\n";
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
		
		int declaracion = contador;
		boolean ides = false;
		if(identificadores != null) {
			for(String id:identificadores) {
				
				declaracion = contador;
				if(ides ==false) {
					int cont = contador;
					for(int i = 0; i<identificadores.size(); i++) {
						dot+="nodo"+(cont)+"_as";
						ides = true;
						cont++;
						if(i != identificadores.size()-1){
							dot += ",";
						}
						
					}
					//System.out.println(declaracion);
					//dot+="raiz"+" ->"+"nodo"+(declaracion)+"_as;";
					dot+=";";
				}else {
					
				}
				
				dot+="nodo"+(declaracion)+"_as"+" [ label =\"ASIGNACION"+"\"];\n";
				
				dot+="nodo"+(declaracion+1)+"_ida"+" [ label =\""+id.toString()+"\"];\n";
				dot+="nodo"+(declaracion)+"_as"+" ->nodo"+(declaracion+1)+"_ida;";
				dot+="nodo"+declaracion+"_as"+" ->"+valor.CodigoDot();
				
				contador++;
					
			}
		}
		
		//dot+="nodo"+declaracion+"_as"+" ->"+valor.CodigoDot();
		
		
			
		
		return dot;
	}

}