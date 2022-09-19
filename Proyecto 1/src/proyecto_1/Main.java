package proyecto_1;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import java.util.LinkedList;

import javax.swing.JFrame;




public class Main {

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
		 */


	}
	public static void traducir(String contenido) {
		Analizador_sintactico an;
		LinkedList<Instruccion> arbol = null;
		try {
			an=new Analizador_sintactico(new Analizador_Lexico(new StringReader(contenido)));
            an.parse();        
            arbol=an.getAST();
        
			
		}catch(Exception ex){
			System.out.println("ERROR.");
	        
		}
		arbol(arbol);
		
		
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
		for(Instruccion instruccion: arbol_) {
			if(instruccion != null) {
				
				System.out.println(instruccion.Codigo_python());
				//System.out.println(instruccion);
				//System.out.println(instruccion.CodigoDot());
			}
			
		}
		
	}
	
}
