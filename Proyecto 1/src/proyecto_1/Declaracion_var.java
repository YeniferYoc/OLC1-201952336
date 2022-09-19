package proyecto_1;

import java.util.LinkedList;

public class Declaracion_var implements Instruccion{
	private String tipo_dato;
	private LinkedList<String> identificadores;
	private Expresion valor;
	public static int contador =0;
	public Declaracion_var(LinkedList<String> identificadores, String tipo_dato, Expresion valor) {
		super();
		this.tipo_dato = tipo_dato;
		this.identificadores = identificadores;
		this.valor = valor;
	}
	
	
	
	
	

	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		if(identificadores != null) {
			for(String id:identificadores) {
				
				pyt += id.toString()+" = "+valor.Codigo_python().toString()+"\n";
			}
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
		// TODO Auto-generated method stub
		//System.out.println("entro");
		String dot = "";
		
		int declaracion = contador;
		boolean ides = false;
		if(identificadores != null) {
			for(String id:identificadores) {
				
				declaracion = contador;
				//System.out.println(declaracion);
				if(ides ==false) {
					int cont = contador;
					for(int i = 0; i<identificadores.size(); i++) {
						dot+="nodo"+(cont)+"_de";
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
				dot+="nodo"+(declaracion)+"_de"+" [ label =\"DECLARACION "+tipo_dato.toString()+"\"];\n";
				
				dot+="nodo"+(declaracion+1)+"_id"+" [ label =\""+id.toString()+"\"];\n";
				dot+="nodo"+(declaracion)+"_de"+" ->nodo"+(declaracion+1)+"_id;";
				dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
				
				
				contador++;
					
			}
		}else {
			contador++;
		}
		
		//dot+="nodo"+declaracion+"_de"+" ->"+valor.CodigoDot();
		
		
			
		
		return dot;
		
	}

}
