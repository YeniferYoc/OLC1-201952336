package proyecto_1;

import java.util.LinkedList;

public class Expresion implements Instruccion{
	public static enum Tipo{
		Suma, 
		Resta,
		Multiplicacion, 
		Division,
		Potencia, 
		Modulo,
		Caracter,
		Cadena,
		Numero, 
		Mayor,
		Menor,
		Identificador,
		Boolean_,
		Mayorigual,
		Menorigual, 
		Diferente,
		Igual, 
		Or_,
		And_,
		Not_,
		Parentesis, 
		Ejecutar_print,
		Corchetes
	}
	private Tipo tipo;
	private Expresion izquierda, derecha;
	private Object valor;
	public static int contador=0;
	private String id;;
	private LinkedList<Parametro_f> parametros;
	public static int cont_der =0;
	public static int cont_iz =0;
	public static int contador2 = 0;
	
	
	
	public Expresion(Expresion izquierda,Expresion derecha, Tipo tipo ) {
		this.tipo = tipo;
		this.izquierda = izquierda;
		this.derecha = derecha;
		
	}
	public Expresion(String valor, Tipo tipo ) {
		
		this.tipo = tipo;
		this.valor = valor; 
		
	}
	public Expresion(Expresion derecha, Tipo tipo ) {
		this.tipo = tipo;
		this.derecha = derecha;
	}
	public Expresion(String id,LinkedList<Parametro_f>parametros, Tipo tipo ) {
		this.tipo = tipo;
		this.id =id;
		this.parametros = parametros;
		
	}
	
	
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		if(tipo == Tipo.Suma) {
			//System.out.println("entro suma");
			return pyt += ""+izquierda.Codigo_python() + " + "+derecha.Codigo_python()+"";
		}else if(tipo == Tipo.Resta) {
			return pyt += ""+izquierda.Codigo_python() + " - "+derecha.Codigo_python()+"";
		}
		else if(tipo == Tipo.Multiplicacion) {
			return pyt += ""+izquierda.Codigo_python() + " * "+derecha.Codigo_python()+"";
		}else if(tipo == Tipo.Division) {
			return pyt += ""+izquierda.Codigo_python() + " / "+derecha.Codigo_python()+"";
		}else if(tipo == Tipo.Potencia) {
			/*String va_izquierda = "base_"+cont_iz+"="+izquierda.Codigo_python().toString()+"\n";
			pyt += va_izquierda;
			
			String va_derecha = "expo_"+cont_der+"="+derecha.Codigo_python().toString()+"\n";
			pyt += va_derecha;*/
			pyt += ""+izquierda.Codigo_python().toString()+ " ** "+derecha.Codigo_python().toString()+"";
			//cont_iz++;
			//cont_der++;
			return pyt;
		}else if(tipo == Tipo.Modulo) {
			return pyt += ""+izquierda.Codigo_python() + " % "+derecha.Codigo_python()+"";
		}
		else if(tipo == Tipo.Parentesis) {
			return pyt += "("+derecha.Codigo_python() +")";
		}
		else if(tipo == Tipo.Corchetes) {
			return pyt += "["+derecha.Codigo_python() +"]";
		}
		else if(tipo == Tipo.Ejecutar_print) {
			if(parametros!= null) {
				Ejecutar mi_ejecutar = new Ejecutar(id.toString(), parametros);
				pyt += mi_ejecutar.Codigo_python();
			}else {
				Ejecutar mi_ejecutar = new Ejecutar(id.toString());
				pyt +=mi_ejecutar.Codigo_python();
				
			}
			return pyt;
		}
		
		
		else if(tipo == Tipo.Numero) {
			//System.out.println("entro numero");
			return pyt += valor.toString();
		}else if(tipo == Tipo.Cadena) {
			String cadena = valor.toString();
			String ex = "\n\"+\"";
			cadena = cadena.replace('\n', ' ');
			return pyt += cadena.toString();
		}else if(tipo == Tipo.Caracter) {
			String carac =valor.toString();
			//System.out.println(carac);
			String comparacion = "$";
			
			String alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			String minuscula = "abcdefghijklmnopqrstuvwxyz";
			char [] arreglo = alfabeto.toCharArray();
			char [] arreglo_minus = minuscula.toCharArray();
			char agregado =' ';
			int contador = 0;
			for(int i = 65; i<91; i++) {
				comparacion = "'${";
				comparacion =comparacion+i+"}'";
				//System.out.println(comparacion);
				//System.out.println(carac);
				if(carac.equalsIgnoreCase(comparacion)) {
					agregado = arreglo[contador];
					carac ="'"+ String.valueOf(agregado)+"'";
					break;
					
				}
				contador++;
			}
			
			char agregado2 =' ';
			int contador2 = 0;
			for(int i = 97; i<122; i++) {
				comparacion = "'${";
				comparacion =comparacion+i+"}'";
				//System.out.println(comparacion);
				//System.out.println(carac);
				if(carac.equalsIgnoreCase(comparacion)) {
					agregado2 = arreglo_minus[contador2];
					carac ="'"+String.valueOf(agregado2)+"'";
					break;
					
				}
				contador2++;
			}
			
			
			//System.out.println(carac);
			
			return pyt += carac.toString();
		}else if(tipo == Tipo.Boolean_) {
			String boll =valor.toString().toUpperCase();
			//System.out.println("entro bool");
			//System.out.println(boll.getClass().getName());
			//System.out.println("|"+boll+"|");
			String v = "VERDADERO";
			String f = "FALSO";

			//System.out.println(v.getClass().getName());
			if (boll.equalsIgnoreCase(v)) {
				///System.out.println("ver");
				return pyt += "True";
			}else if(boll.equalsIgnoreCase(f)) {
				//System.out.println("fal");
				return pyt +="False";
			}
			
		}else if(tipo == Tipo.Mayor) {
			return pyt += " "+izquierda.Codigo_python()+">"+derecha.Codigo_python()+"";
		}else if(tipo == Tipo.Menor) {
			return pyt += ""+izquierda.Codigo_python()+"<"+derecha.Codigo_python()+"";
		}
		else if(tipo == Tipo.Mayorigual) {
			return pyt += ""+izquierda.Codigo_python()+">="+derecha.Codigo_python()+"";
		}else if(tipo == Tipo.Menorigual) {
			return pyt += ""+izquierda.Codigo_python()+"<="+derecha.Codigo_python()+"";
		}
		else if(tipo == Tipo.Igual) {
			return pyt += ""+izquierda.Codigo_python()+"=="+derecha.Codigo_python()+"";
		}else if(tipo == Tipo.Diferente) {
			return pyt += ""+izquierda.Codigo_python()+"!="+derecha.Codigo_python()+"";
		}
		else if(tipo == Tipo.Or_) {
			return pyt += ""+izquierda.Codigo_python()+" or "+derecha.Codigo_python()+"";
		}else if(tipo == Tipo.And_) {
			return pyt += ""+izquierda.Codigo_python()+" and "+derecha.Codigo_python()+"";
		}
		else if(tipo == Tipo.Not_) {
			return pyt += ""+" not "+derecha.Codigo_python()+"";
		}
		else if(tipo == Tipo.Identificador) {
			return pyt += valor.toString();
		}
		//System.out.println(pyt);
		
		return "0";
	}
	

	@Override
	public Object Codigo_golang() {
		// TODO Auto-generated method stub
		return null;
	}
	/*
	 * public static void main(String[] args) {
	 * Expresion ex = new Expresion( "1",Expresion.Tipo.Cadena);
        System.out.println(ex.Codigo_python());
    }	 	
	 */
	@Override
	public String CodigoDot() {
		// TODO Auto-generated method stub
		//System.out.println("entro");
		String dot = "";
		contador += 1;
		switch(tipo) {
			case Suma:
				int suma = contador;
				dot+="nodo"+(suma)+"_op;\n";
				dot+="nodo"+(suma)+"_op"+" [ label =\"+\"];\n";
				
				dot+="nodo"+(suma)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(suma)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Resta:
				int resta = contador;
				dot+="nodo"+(resta)+"_op;\n";
				dot+="nodo"+(resta)+"_op"+" [ label =\"-\"];\n";
				
				dot+="nodo"+(resta)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(resta)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Multiplicacion:
				int multi = contador;
				dot+="nodo"+(multi)+"_op;\n";
				dot+="nodo"+(multi)+"_op"+" [ label =\"*\"];\n";
				
				dot+="nodo"+(multi)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(multi)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Division:
				int divi = contador;
				dot+="nodo"+(divi)+"_op;\n";
				dot+="nodo"+(divi)+"_op"+" [ label =\"/\"];\n";
				
				dot+="nodo"+(divi)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(divi)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Modulo:
				int modu = contador;
				dot+="nodo"+(modu)+"_op;\n";
				dot+="nodo"+(modu)+"_op"+" [ label =\"mod\"];\n";
				
				dot+="nodo"+(modu)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(modu)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Potencia:
				int pot = contador;
				dot+="nodo"+(pot)+"_op;\n";
				dot+="nodo"+(pot)+"_op"+" [ label =\"potencia\"];\n";
				
				dot+="nodo"+(pot)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(pot)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Mayor:
				int may = contador;
				dot+="nodo"+(may)+"_op;\n";
				dot+="nodo"+(may)+"_op"+" [ label =\"mayor\"];\n";
				
				dot+="nodo"+(may)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(may)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Menor:
				int men = contador;
				dot+="nodo"+(men)+"_op;\n";
				dot+="nodo"+(men)+"_op"+" [ label =\"menor\"];\n";
				
				dot+="nodo"+(men)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(men)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Menorigual:
				int meni = contador;
				dot+="nodo"+(meni)+"_op;\n";
				dot+="nodo"+(meni)+"_op"+" [ label =\"menor_o_igual\"];\n";
				
				dot+="nodo"+(meni)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(meni)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Mayorigual:
				int mayi = contador;
				dot+="nodo"+(mayi)+"_op;\n";
				dot+="nodo"+(mayi)+"_op"+" [ label =\"mayor_o_igual\"];\n";
				
				dot+="nodo"+(mayi)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(mayi)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Diferente:
				int dif = contador;
				dot+="nodo"+(dif)+"_op;\n";
				dot+="nodo"+(dif)+"_op"+" [ label =\"es_igual\"];\n";
				
				dot+="nodo"+(dif)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(dif)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Igual:
				int igu = contador;
				dot+="nodo"+(igu)+"_op;\n";
				dot+="nodo"+(igu)+"_op"+" [ label =\"es_diferente\"];\n";
				
				dot+="nodo"+(igu)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(igu)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Or_:
				int or__ = contador;
				dot+="nodo"+(or__)+"_op;\n";
				dot+="nodo"+(or__)+"_op"+" [ label =\"or\"];\n";
				
				dot+="nodo"+(or__)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(or__)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case And_:
				int and__ = contador;
				dot+="nodo"+(and__)+"_op;\n";
				dot+="nodo"+(and__)+"_op"+" [ label =\"and\"];\n";
				
				dot+="nodo"+(and__)+"_op"+" ->"+(izquierda.CodigoDot())+"\n";
				
				dot+="nodo"+(and__)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Not_:
				int not__ = contador;
				dot+="nodo"+(not__)+"_op;\n";
				dot+="nodo"+(not__)+"_op"+" [ label =\"not\"];\n";
				
				dot+="nodo"+(not__)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;

			case Parentesis:
				int pare = contador;
				dot+="nodo"+(pare)+"_op;\n";
				dot+="nodo"+(pare)+"_op"+" [ label =\"( )\"];\n";
				
				
				dot+="nodo"+(pare)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Corchetes:
				int cor = contador;
				dot+="nodo"+(cor)+"_op;\n";
				dot+="nodo"+(cor)+"_op"+" [ label =\"( )\"];\n";
				
				
				dot+="nodo"+(cor)+"_op ->"+(derecha.CodigoDot())+"\n";

				break;
			case Ejecutar_print:
				if(parametros!= null) {
				Ejecutar mi_ejecutar = new Ejecutar(id.toString(), parametros);
				dot += mi_ejecutar.CodigoDot();
			}else {
				Ejecutar mi_ejecutar = new Ejecutar(id.toString());
				dot += mi_ejecutar.CodigoDot();
				
			}
				break;
			
				
			case Numero:
				contador = contador+1;
				dot+="nodo"+(contador)+"_op;\n";
				dot+="nodo"+(contador)+"_op"+" [ label =\""+valor.toString()+"\"];\n";
				contador = contador+1;
				break;
			case Cadena:
				String cadena = valor.toString();
				cadena = cadena.replace('\"', '\'');
				contador = contador+1;
				dot+="nodo"+(contador)+"_op;\n";
				dot+="nodo"+(contador)+"_op"+" [ label =\""+cadena.toString()+"\"];\n";
				contador = contador+1;
				break;
			case Caracter:
				
				contador = contador+1;
				dot+="nodo"+(contador)+"_op;\n";
				dot+="nodo"+(contador)+"_op"+" [ label =\""+valor.toString()+"\"];\n";
				contador = contador+1;
				break;
			case Boolean_:
				
				contador = contador+1;
				dot+="nodo"+(contador)+"_op;\n";
				dot+="nodo"+(contador)+"_op"+" [ label =\""+valor.toString()+"\"];\n";
				contador = contador+1;
				break;
			case Identificador:
				
				contador = contador+1;
				dot+="nodo"+(contador)+"_op;\n";
				dot+="nodo"+(contador)+"_op"+" [ label =\""+valor.toString()+"\"];\n";
				contador = contador+1;
				break;
			
			
			
		
		}
		
		return dot;
	}
	@Override
	public String dot_flu() {
		// TODO Auto-generated method stub
		String pyt = "";
		if(tipo == Tipo.Suma) {
			//System.out.println("entro suma");
			return pyt += ""+izquierda.dot_flu() + " + "+derecha.dot_flu()+"";
		}else if(tipo == Tipo.Resta) {
			return pyt += ""+izquierda.dot_flu() + " - "+derecha.dot_flu()+"";
		}
		else if(tipo == Tipo.Multiplicacion) {
			return pyt += ""+izquierda.dot_flu() + " * "+derecha.dot_flu()+"";
		}else if(tipo == Tipo.Division) {
			return pyt += ""+izquierda.dot_flu() + " / "+derecha.dot_flu()+"";
		}else if(tipo == Tipo.Potencia) {
			/*String va_izquierda = "base_"+cont_iz+"="+izquierda.Codigo_python().toString()+"\n";
			pyt += va_izquierda;
			
			String va_derecha = "expo_"+cont_der+"="+derecha.Codigo_python().toString()+"\n";
			pyt += va_derecha;*/
			pyt += ""+izquierda.dot_flu().toString()+ " ** "+derecha.dot_flu().toString()+"";
			//cont_iz++;
			//cont_der++;
			return pyt;
		}else if(tipo == Tipo.Modulo) {
			return pyt += ""+izquierda.dot_flu() + " % "+derecha.dot_flu()+"";
		}
		else if(tipo == Tipo.Parentesis) {
			return pyt += "("+derecha.dot_flu() +")";
		}
		else if(tipo == Tipo.Corchetes) {
			return pyt += "["+derecha.dot_flu() +"]";
		}
		else if(tipo == Tipo.Ejecutar_print) {
			if(parametros!= null) {
				Ejecutar mi_ejecutar = new Ejecutar(id.toString(), parametros);
				pyt += mi_ejecutar.dot_flu();
			}else {
				Ejecutar mi_ejecutar = new Ejecutar(id.toString());
				pyt +=mi_ejecutar.dot_flu();
				
			}
			return pyt;
		}
		
		
		else if(tipo == Tipo.Numero) {
			//System.out.println("entro numero");
			return pyt += valor.toString();
		}else if(tipo == Tipo.Cadena) {
			String cadena = valor.toString();
			cadena = cadena.replace('\"', '\'');
			cadena = cadena.replace('\n', ' ');
			return pyt += cadena.toString();
		}else if(tipo == Tipo.Caracter) {
			String carac =valor.toString();
			
			
			return pyt += carac.toString();
		}else if(tipo == Tipo.Boolean_) {
			return pyt += valor.toString();
			
			
		}else if(tipo == Tipo.Mayor) {
			return pyt += " "+izquierda.dot_flu()+">"+derecha.dot_flu()+"";
		}else if(tipo == Tipo.Menor) {
			return pyt += ""+izquierda.dot_flu()+"<"+derecha.dot_flu()+"";
		}
		else if(tipo == Tipo.Mayorigual) {
			return pyt += ""+izquierda.dot_flu()+">="+derecha.dot_flu()+"";
		}else if(tipo == Tipo.Menorigual) {
			return pyt += ""+izquierda.dot_flu()+"<="+derecha.dot_flu()+"";
		}
		else if(tipo == Tipo.Igual) {
			return pyt += ""+izquierda.dot_flu()+"=="+derecha.dot_flu()+"";
		}else if(tipo == Tipo.Diferente) {
			return pyt += ""+izquierda.dot_flu()+"!="+derecha.dot_flu()+"";
		}
		else if(tipo == Tipo.Or_) {
			return pyt += ""+izquierda.dot_flu()+" or "+derecha.dot_flu()+"";
		}else if(tipo == Tipo.And_) {
			return pyt += ""+izquierda.dot_flu()+" and "+derecha.dot_flu()+"";
		}
		else if(tipo == Tipo.Not_) {
			return pyt += ""+" not "+derecha.dot_flu()+"";
		}
		else if(tipo == Tipo.Identificador) {
			return pyt += valor.toString();
		}
		//System.out.println(pyt);
		
		return "0";
	}
		
    

}
