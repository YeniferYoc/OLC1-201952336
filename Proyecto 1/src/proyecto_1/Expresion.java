package proyecto_1;

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
		Not_
	}
	private Tipo tipo;
	private Expresion izquierda, derecha;
	private Object valor;
	
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
	
	
	@Override
	public Object Codigo_python() {
		// TODO Auto-generated method stub
		String pyt = "";
		if(tipo == Tipo.Suma) {
			System.out.println("entro suma");
			return pyt += "("+izquierda.Codigo_python() + " + "+derecha.Codigo_python()+")";
		}else if(tipo == Tipo.Resta) {
			return pyt += "("+izquierda.Codigo_python() + " - "+derecha.Codigo_python()+")";
		}
		else if(tipo == Tipo.Multiplicacion) {
			return pyt += "("+izquierda.Codigo_python() + " * "+derecha.Codigo_python()+")";
		}else if(tipo == Tipo.Division) {
			return pyt += "("+izquierda.Codigo_python() + " / "+derecha.Codigo_python()+")";
		}else if(tipo == Tipo.Potencia) {
			return pyt += "("+izquierda.Codigo_python() + " ** "+derecha.Codigo_python()+")";
		}else if(tipo == Tipo.Modulo) {
			return pyt += "("+izquierda.Codigo_python() + " % "+derecha.Codigo_python()+")";
		}
		
		
		else if(tipo == Tipo.Numero) {
			System.out.println("entro numero");
			return pyt += valor.toString();
		}else if(tipo == Tipo.Cadena) {
			return pyt += valor.toString();
		}else if(tipo == Tipo.Caracter) {
			return pyt += valor.toString();
		}else if(tipo == Tipo.Boolean_) {
			String boll =valor.toString().toUpperCase();
			System.out.println("entro bool");
			System.out.println(boll.getClass().getName());
			System.out.println("|"+boll+"|");
			String v = "VERDADERO";
			String f = "FALSO";

			System.out.println(v.getClass().getName());
			if (boll.equalsIgnoreCase(v)) {
				System.out.println("ver");
				return pyt += "true";
			}else if(boll.equalsIgnoreCase(f)) {
				System.out.println("fal");
				return pyt +="false";
			}
			
		}else if(tipo == Tipo.Mayor) {
			return pyt += "("+izquierda.Codigo_python()+">"+derecha.Codigo_python()+")";
		}else if(tipo == Tipo.Menor) {
			return pyt += "("+izquierda.Codigo_python()+"<"+derecha.Codigo_python()+")";
		}
		else if(tipo == Tipo.Mayorigual) {
			return pyt += "("+izquierda.Codigo_python()+">="+derecha.Codigo_python()+")";
		}else if(tipo == Tipo.Menorigual) {
			return pyt += "("+izquierda.Codigo_python()+"<="+derecha.Codigo_python()+")";
		}
		else if(tipo == Tipo.Igual) {
			return pyt += "("+izquierda.Codigo_python()+"="+derecha.Codigo_python()+")";
		}else if(tipo == Tipo.Diferente) {
			return pyt += "("+izquierda.Codigo_python()+"!="+derecha.Codigo_python()+")";
		}
		else if(tipo == Tipo.Or_) {
			return pyt += "("+izquierda.Codigo_python()+"||"+derecha.Codigo_python()+")";
		}else if(tipo == Tipo.And_) {
			return pyt += "("+izquierda.Codigo_python()+"&&"+derecha.Codigo_python()+")";
		}
		else if(tipo == Tipo.Not_) {
			return pyt += "("+"!"+derecha.Codigo_python()+")";
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
		
    

}
