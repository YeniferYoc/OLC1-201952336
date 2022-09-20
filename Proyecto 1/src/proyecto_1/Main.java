package proyecto_1;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import javax.swing.JFrame;
import javax.swing.JOptionPane;




public class Main {
	public static LinkedList<Mi_error> errores;
	public static LinkedList<Mi_error> errores_lex;

	public static void main(String[] args) {
   
		// TODO Auto-generated method stub
		Analizador_int Principal_v = new Analizador_int();
		Principal_v.setVisible(true);
		Principal_v.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//LO QUE PASE CUANDO SE CIERRE LA VENTANA
		
		/* try {

	            Analizador_Lexico lexico = new Analizador_Lexico(
	                    new BufferedReader(new FileReader("./entrada.txt"))
	            );
	            Analizador_sintactico sintactico = new Analizador_sintactico(lexico);
	            sintactico.parse();

	        } catch (Exception e) {
	        	System.out.println("no entonce");
	        }
	        String traduc_py = "print( _acumulado_)\n";
		 traduc_py+="print( \" Esta es la potencia Manual\")";
		String con_ident ="";
		
		
		List<String> lineas = traduc_py.lines().
		
       for (String linea : lineas) {
           con_ident+=("\t");
           linea += "\n";
       }
		String traduc_py = "print( _acumulado_)\n";
		 traduc_py+="print( \" Esta es la potencia Manual\")";
		 String [] partes = traduc_py.split("\n");
		 String unido = "";
		 for(String part:partes) {
			 String con_ident ="\t";
			 con_ident += part+"\n";
			 unido += con_ident;
		 }
		 System.out.println(unido);
		
		 */
		 
		
		
		
		
		


	}
	public static void run(String contenido) {
		if (contenido.matches("[[ ]*[\n]*[\t]]*")) {
            JOptionPane.showMessageDialog(null,"No hay texto para traducir!", "OK", JOptionPane.ERROR_MESSAGE);
        }else{
		Analizador_sintactico an;
		LinkedList<Instruccion> arbol = null;
		try {
			Analizador_Lexico lexico = new Analizador_Lexico(new StringReader(contenido));
			an=new Analizador_sintactico(lexico);
            an.parse(); 
            errores_lex = null;
            errores = null;
            errores_lex = lexico.errores;
            errores = an.errores_sintac;
            int conteo_err =errores_lex.size()+errores.size() ;
            Analizador_int.n_errores.setText(String.valueOf(conteo_err));
            area_errores();
            arbol=an.getAST();
        
			
		}catch(Exception ex){
			System.out.println("ERROR.");
	        
		}
		/*Comentario.contador = 0;
		Comentario_mas.contador = 0;
		Declaracion_var.contador = 0;
		Asignacion.contador = 0;
		Caso.contador = 0;
		Ejecutar.contador = 0;
		Imprimir.contador = 0;
		Metodo.contador = 0;
		Funcion.contador = 0;
		Mientras.contador = 0;
		O_si.contador = 0;
		Para.contador = 0;
		Parametro.contador = 0;
		Parametro_f.contador = 0;
		Repetir.contador = 0;
		Segun.contador = 0;
		Si.contador = 0;*/
		arbol(arbol);
        }
		
	}
	public static void arbol(LinkedList<Instruccion> arbol_) {
		if (arbol_ == null) {
			System.out.println("no hay nada");
			return;
		}
		
		
		String dot = "";
		dot+="raiz"+" [ label =\"INICIO\"];\n";
		//System.out.println(dot);
		for(Instruccion instruccion: arbol_) {
			if(instruccion != null) {
				dot+="raiz"+" ->";
				//System.out.println(dot);
				dot+= instruccion.CodigoDot();
				
				//System.out.println(instruccion.Codigo_python());
				//System.out.println(instruccion);
				
			}
			
		}
		System.out.println(dot);
		FileWriter archivo = null;
        PrintWriter pw = null;
        
        try{
            archivo = new FileWriter("arbol.dot");
            pw = new PrintWriter(archivo);
            pw.println("digraph G {node[shape=box, style=filled, color=blanchedalmond]; edge[color=chocolate3];rankdir=UD \n");
            pw.println(dot);
            pw.println("\n}");
            archivo.close();
            
        }catch (Exception e) {
            System.out.println(e +" 1");
        }
        
        try {
            String cmd = "dot -Tpng arbol.dot -o arbol.png";
            Runtime.getRuntime().exec(cmd);
            System.out.println("abierto");
        } catch (IOException ioe) {
            System.out.println(ioe +" ");
        }
        
		
		
	}
	
	
	public static void Analizar_diagrama(String contenido) {
		if (contenido.matches("[[ ]*[\n]*[\t]]*")) {
            JOptionPane.showMessageDialog(null,"No hay texto para traducir!", "OK", JOptionPane.ERROR_MESSAGE);
        }else{
		Analizador_sintactico an;
		LinkedList<Instruccion> arbol = null;
		try {
			Analizador_Lexico lexico = new Analizador_Lexico(new StringReader(contenido));
			an=new Analizador_sintactico(lexico);
            an.parse(); 
            errores_lex = null;
            errores = null;
            errores_lex = lexico.errores;
            errores = an.errores_sintac;
            int conteo_err =errores_lex.size()+errores.size() ;
            Analizador_int.n_errores.setText(String.valueOf(conteo_err));
            arbol=an.getAST();
        
			
		}catch(Exception ex){
			System.out.println("ERROR.");
	        
		}
		Diagrama_de_flujo(arbol);
        }
		
	}
	public static void Diagrama_de_flujo(LinkedList<Instruccion> arbol_) {
		if (arbol_ == null) {
			System.out.println("no hay nada");
			return;
		}
		
		String dot = "";
		dot+="raiz"+" [  shape=circle, style=filled, label =\"INICIO\"];\n";
		dot+="raiz"+" ->";
		//System.out.println(dot);
		for(Instruccion instruccion: arbol_) {
			if(instruccion != null) {
				
				//System.out.println(dot);
				dot+= instruccion.dot_flu();
				
				//System.out.println(instruccion.Codigo_python());
				//System.out.println(instruccion);
				
			}
			
		}
		dot+="fin;";
		dot+="fin"+" [  shape=circle, style=filled, label =\"FIN\"];\n";
		
		System.out.println(dot);
		FileWriter archivo = null;
        PrintWriter pw = null;
        
        try{
            archivo = new FileWriter("diagrama.dot");
            pw = new PrintWriter(archivo);
            pw.println("digraph G {node[shape=box, style=filled, color=blanchedalmond]; edge[color=chocolate3];rankdir=UD \n");
            pw.println(dot);
            pw.println("\n}");
            archivo.close();
            
        }catch (Exception e) {
            System.out.println(e +" 1");
        }
        
        try {
            String cmd = "dot -Tpng diagrama.dot -o diagrama.png";
            Runtime.getRuntime().exec(cmd);
            System.out.println("abierto");
        } catch (IOException ioe) {
            System.out.println(ioe +" ");
        }
        
		
		
	}
	
	
	
	public static void traducir_py(String contenido) {
	
        
       
		Analizador_sintactico an;
		LinkedList<Instruccion> arbol = null;
		try {
			Analizador_Lexico lexico = new Analizador_Lexico(new StringReader(contenido));
			an=new Analizador_sintactico(lexico);
			an.parse();       
			errores_lex = null;
            errores = null;
			errores_lex = lexico.errores;
            errores = an.errores_sintac;
            int conteo_err =errores_lex.size()+errores.size() ;
            Analizador_int.n_errores.setText(String.valueOf(conteo_err));
           
            arbol=an.getAST();
        
			
		}catch(Exception ex){
			System.out.println("ERROR.");
	        
		}
		traduc_ins_py(arbol);
        
		
	}
	public static void traduc_ins_py(LinkedList<Instruccion> arbol_) {		if (arbol_ == null) {
		System.out.println("no hay nada");
		return;
	}
	
	String pyt = "";
	for(Instruccion instruccion: arbol_) {
		if(instruccion != null) {
			//System.out.println(instruccion.getClass());
			pyt+=instruccion.Codigo_python();
			System.out.println(instruccion.Codigo_python());
			//System.out.println(instruccion);
			//System.out.println(instruccion.CodigoDot());
		}
		
	}
	Ventana_traduccion vent_py = new Ventana_traduccion("PYTHON ", pyt,0);
	vent_py.setVisible(true);
}
	public static void reporte(String nombre) {//ESTE METODO, GENERA EL HTML E INVOCA A LOS METODOS RESPECTIVOS, PARA IMRPIMIR EN EL
		System.out.println("\t \t REPORTE ERRORES ");
		
		//USAMOS ARCHIVOS PARA EXPORTAR UN HTML 
			try {//MANEJO DE EXCEPCIONES
				File archivor = new File(nombre+".html");//NOMBRE DEL ARCHIVO
				PrintWriter escribir;
				if (archivor.createNewFile()) {//CREACION DE NUEVO ARCHIVO
				escribir = new PrintWriter(archivor, "utf-8");
				escribir.println("<HTML>\r\n");
				escribir.println("<HEAD><TITLE>REPORTE DE ERRORES LIXICOS Y SINTACTICOS</TITLE>");
				escribir.println("<link rel=\"stylesheet\"  href=\"estilos.css\">");
				escribir.println("</head>");
				escribir.println("<body>");
				escribir.println("<CENTER><H1><b>-------------------------- REPORTE DE ERRORES ---------------------------</b></H1>");
				escribir.println("</CENTER>");
				escribir.println("<img src=\"2d.gif\" width=\"300\" height=\"200\" align=right>");
				escribir.println("<p><b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbspYENIFER ESTER YOC LARIOS &nbsp &nbsp -------->&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 201952336 </b></p>");
				escribir.println("<br>");
				escribir.println("<div  id = \"main-container\" >");
		        escribir.println("<b>");
		        escribir.println("<table>");
		        escribir.println("<thead>");
		        escribir.println("<tr>");
		        escribir.println("<th>No.</th><th> ERROR   </th><th>LEXEMA</th><th>FILA</th><th>COLUMNA</th>");
		        escribir.println("</tr>");
		        escribir.println("</thead>");
		        int contador = 1;
		        for(Mi_error err: errores) {
		        	escribir.println("<tr><font size = 12 color = \"white\" >");
                    escribir.println("<td>"+contador+".</td><td> Sintactico </td><td>"+err.lexema.toString()+"</td><td>"+err.fila+"</td><td>"+err.columna+"</td>");
                    escribir.println("<font size = 12></tr>");
                    contador++;
                
		        }
		        for(Mi_error err: errores_lex) {
		        	escribir.println("<tr><font size = 12 color = \"white\" >");
                    escribir.println("<td>"+contador+".</td><td> LEXICO </td><td>"+err.lexema.toString()+"</td><td>"+err.fila+"</td><td>"+err.columna+"</td>");
                    escribir.println("<font size = 12></tr>");
                    contador++;
                
		        }
		        escribir.println("</b>");
		        escribir.println("</table>");
		        escribir.println("</div>");
				escribir.println("<form action=\"\"> ");
				
				escribir.println("</BODY>\r\n"
						+ "</HTML>");
				escribir.close();
				
				System.out.println(" ");
				System.out.println("SE HA CREADO CON EXITO EL REPORTE DE ERRORES");
				
	            
				}
			}catch(IOException e) {
				System.err.println("NO SE HA PODIDO CREAR EL ARCHIVO");
			}
	}
	public static void area_errores() {//ESTE METODO, GENERA EL HTML E INVOCA A LOS METODOS RESPECTIVOS, PARA IMRPIMIR EN EL
		String cadena_err = "";
		        int contador = 1;
		        for(Mi_error err: errores) {
		        	cadena_err+=(contador+". "+" Sintactico "+err.lexema.toString()+" fila: "+err.fila+" col: "+err.columna+"\n");
                    
                    contador++;
                
		        }
		        for(Mi_error err: errores_lex) {
		        	cadena_err+=(contador+". "+" Lexico "+err.lexema.toString()+" fila: "+err.fila+" col: "+err.columna+"\n");
                    
                    contador++;
                
		        }
		     Analizador_int.area_er.setText(cadena_err);
	}
	
}
