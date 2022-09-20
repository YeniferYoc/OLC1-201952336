package proyecto_1;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileWriter;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.border.EmptyBorder;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.JTextArea;


import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JMenu;

public class Ventana_traduccion  extends JFrame {


	private JPanel prin_aut;
	static String mensaje;
	JTextArea area_autom;
	JLabel e_n_mov;
	public String lenguaje = "";
	public static JLabel n_errores ;
	
	public Ventana_traduccion(String lenguaje, String conte, int n) {
		//Frame mi_fr = new Frame();
		
		setTitle("TRADUCCION");
		setSize(750,550);
		setLocationRelativeTo(null);
		prin_aut = new JPanel();
		prin_aut.setBackground(new Color(0, 0, 128));
		prin_aut.setBorder(new EmptyBorder(5, 5, 5, 5));
		prin_aut.setLayout(null);
		setContentPane(prin_aut);
		
		
		
		
        area_autom = new JTextArea();
		area_autom.setBounds(25, 70, 675, 350);
		area_autom.setLayout(null);
		area_autom.setText(conte);
		//prin_aut.add(area_autom);
		//area_autom.setText("//Here is for the code");
		
		
		JScrollPane scroll = new JScrollPane(area_autom);
		scroll.setBounds(25, 70, 675, 360);
		prin_aut.add(scroll);
       
        
		
		JLabel e_titulo = new JLabel("TRADUCCION  "+lenguaje);
		e_titulo.setForeground(Color.WHITE);
		e_titulo.setFont(new Font("Broadway", Font.BOLD, 17));
		e_titulo.setBounds(250, 20, 285, 51);
		prin_aut.add(e_titulo);
			
		
		JButton guardar_b = new JButton("Guardar");
		guardar_b.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) { 
				JFileChooser guardar = new JFileChooser();
				if(n ==0) {
					guardar.addChoosableFileFilter(new FileNameExtensionFilter("todos los archivos *.py", "py","py"));//filtro para ver solo archivos .edu
					
				}else {
					guardar.addChoosableFileFilter(new FileNameExtensionFilter("todos los archivos *.go", "go","go"));//filtro para ver solo archivos .edu
					
				}
				int seleccion = guardar.showSaveDialog(null);
	            try{
	                if (seleccion == JFileChooser.APPROVE_OPTION){
	                	File archivo = guardar.getSelectedFile();
	                    String PATH = archivo.getAbsolutePath();
	                    FileWriter escribir = new FileWriter(archivo, true);
	    		        escribir.write(area_autom.getText());
	    		        escribir.close();
	                   
	                    
	                    JOptionPane.showMessageDialog(null,"Guardado exitoso!", "Guardado exitoso!", JOptionPane.INFORMATION_MESSAGE);
	                }
	            }catch (Exception eD){
	            	JOptionPane.showMessageDialog(null,"Error al guardar el archivo!", "OK", JOptionPane.ERROR_MESSAGE);
	            }
		    


		    }
		});
		guardar_b.setFont(new Font("Broadway", Font.PLAIN, 16));
		guardar_b.setBackground(Color.GRAY);
		guardar_b.setBounds(300, 450, 197, 34);
		prin_aut.add(guardar_b);
		
		
		
		
		
		
		
		
	
	}
}

