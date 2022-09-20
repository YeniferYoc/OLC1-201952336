package proyecto_1;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.Frame;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.border.EmptyBorder;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.JTextArea;
import java.awt.List;
import java.awt.Menu;
import java.awt.MenuBar;
import java.awt.MenuItem;

import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JMenu;

public class Analizador_int extends JFrame {


	private JPanel prin_aut;
	static String mensaje;
	JTextArea area_autom;
	public static JTextArea area_er;
	JLabel e_n_mov;
	public static JLabel n_errores ;
	
	public Analizador_int() {
		//Frame mi_fr = new Frame();
		
		setTitle("Proyecto 1 OLC1");
		setSize(950,550);
		setLocationRelativeTo(null);
		prin_aut = new JPanel();
		prin_aut.setBackground(new Color(0, 0, 128));
		prin_aut.setBorder(new EmptyBorder(5, 5, 5, 5));
		prin_aut.setLayout(null);
		setContentPane(prin_aut);
		
		
		
		JMenuBar mi_menu=new JMenuBar();
		mi_menu.setFont(new Font("Broadway", Font.PLAIN, 14));
        JMenu m_file = new JMenu("File");
        JMenu m_report=new JMenu("Report");
        JMenu m_view = new JMenu("View");
        JMenuItem open_file=new JMenuItem("Open File");
        JMenuItem save_as=new JMenuItem("Save_as");
        JMenuItem flow=new JMenuItem("Flowchart");
        JMenuItem err=new JMenuItem("Errors");
        JMenuItem user =new JMenuItem("User Manual");
        JMenuItem tec=new JMenuItem("Technical Manual");
        m_file.add(open_file);
        m_file.add(save_as);
        
        m_report.add(flow);
        m_report.add(err);
        
        m_view.add(user);
        user.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//presiona el regresar
				Path ruta = Paths.get("manualus.pdf");
				Path ab = ruta.toAbsolutePath();
				System.out.println(ab);
				try {
					Runtime.getRuntime().exec("rundll32 url.dll,FileProtocolHandler "+"\""+ab+"\"");
				
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
				
				
			}
		});
        m_view.add(tec);
        tec.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//presiona el regresar
				Path ruta = Paths.get("manualt.pdf");
				Path ab = ruta.toAbsolutePath();
				System.out.println(ab);
				try {
					Runtime.getRuntime().exec("rundll32 url.dll,FileProtocolHandler "+"\""+ab+"\"");
				
				} catch (IOException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				
				
				
			}
		});
        mi_menu.add(m_file);
        mi_menu.add(m_view);
        mi_menu.add(m_report);
        mi_menu.setBounds(34, 20, 150, 30);
        prin_aut.add(mi_menu);
        area_autom = new JTextArea();
		area_autom.setBounds(34, 140, 600, 269);
		area_autom.setLayout(null);
		
		area_er = new JTextArea();
		area_er.setBounds(634, 140, 241, 269);
		area_er.setLayout(null);
		//prin_aut.add(area_autom);
		//area_autom.setText("//Here is for the code");
		flow.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//presiona el regresar
				String contenido = area_autom.getText();
				Main.Analizar_diagrama(contenido);
				
				
				
			}
		});
		
		
		err.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//presiona el regresar
				String nombre = JOptionPane.showInputDialog("INGRESE EL NOMBRE DE REPORTE DE ARCHIVOS ");
				Main.reporte(nombre);
				
			}
		});
		
		JScrollPane scroll = new JScrollPane(area_autom);
		scroll.setBounds(34, 140, 600, 289);
		prin_aut.add(scroll);
		
		JScrollPane scroll2 = new JScrollPane(area_er);
		scroll2.setBounds(634, 140, 241, 289);
		prin_aut.add(scroll2);
        open_file.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
            	//System.out.println("ohola");
            	//Creamos el objeto JFileChooser
            	JFileChooser fc=new JFileChooser();
            	//Creamos el filtro
            	FileNameExtensionFilter filtro = new FileNameExtensionFilter("*.olc", "olc");
            	 
            	//Le indicamos el filtro
            	fc.setFileFilter(filtro);
            	 
            	//Abrimos la ventana, guardamos la opcion seleccionada por el usuario
            	int seleccion=fc.showOpenDialog(getContentPane());
            	 
            	//Si el usuario, pincha en aceptar
            	if(seleccion==JFileChooser.APPROVE_OPTION){

               	 
            	    //Seleccionamos el fichero
            	    File fichero=fc.getSelectedFile();
            	    String documento = "";
                    try {
                        BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(fichero), StandardCharsets.UTF_8));
                        //entrada = new FileInputStream(fichero); Comento esto y uso el BufferedReader para indicarle el UTF

                        int ascci;

                        while ((ascci = in.read()) != -1) {
                            char c = (char) ascci;
                            documento += c;
                            area_autom.setText(documento);
                        }

                        in.close();
                    } catch (Exception e1) {
                        e1.printStackTrace();
                    }

            	}
            }
		});
        save_as.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) { 
				JFileChooser guardar = new JFileChooser();
				guardar.addChoosableFileFilter(new FileNameExtensionFilter("todos los archivos *.OLC", "olc","OLC"));//filtro para ver solo archivos .edu
				int seleccion = guardar.showSaveDialog(null);
	            try{
	                if (seleccion == JFileChooser.APPROVE_OPTION){
	                	File archivo = guardar.getSelectedFile();
	                    String PATH = archivo.getAbsolutePath();
	                    FileWriter escribir = new FileWriter(archivo, true);
	    		        escribir.write(area_autom.getText());
	    		        escribir.close();
	                   if(!(PATH.endsWith(".olc"))){
	                        File temp = new File(PATH+".olc");
	                        archivo.renameTo(temp);
	                    }
	                    
	                    JOptionPane.showMessageDialog(null,"Guardado exitoso!", "Guardado exitoso!", JOptionPane.INFORMATION_MESSAGE);
	                }
	            }catch (Exception eD){
	            	JOptionPane.showMessageDialog(null,"Error al guardar el archivo!", "OK", JOptionPane.ERROR_MESSAGE);
	            }
		    


		    }
		});
        
        
		
		JLabel e_titulo = new JLabel("OLC1_2S_2022_201952336");
		e_titulo.setForeground(Color.WHITE);
		e_titulo.setFont(new Font("Broadway", Font.BOLD, 17));
		e_titulo.setBounds(607, 20, 285, 51);
		prin_aut.add(e_titulo);
			
		
		
		
		JButton ver_python = new JButton("View code Python");
		ver_python.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//presiona el regresar
				
				String contenido = area_autom.getText();
				if (contenido.matches("[[ ]*[\n]*[\t]]*")) {
		            JOptionPane.showMessageDialog(null,"No hay texto para traducir!", "OK", JOptionPane.ERROR_MESSAGE);
		        }else{
				Main.traducir_py(contenido);
				}
				
			}
		});
		ver_python.setFont(new Font("Broadway", Font.PLAIN, 16));
		ver_python.setBackground(Color.GRAY);
		ver_python.setBounds(678, 455, 197, 34);
		prin_aut.add(ver_python);
		
		 
		
		n_errores = new JLabel("0 errores");
		n_errores.setForeground(Color.WHITE);
		n_errores.setFont(new Font("Broadway", Font.PLAIN, 16));
		n_errores.setBounds(34, 462, 107, 21);
		prin_aut.add(n_errores);
		
		JButton b_clean = new JButton("Clean");
		b_clean.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//presiona el regresar
				area_autom.setText("");
				
			}
		});
		b_clean.setBackground(Color.CYAN);
		b_clean.setFont(new Font("Broadway", Font.PLAIN, 14));
		b_clean.setBounds(670, 81, 92, 34);
		prin_aut.add(b_clean);
		
		JButton b_run = new JButton("Run");
		b_run.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//presiona el regresar
				String contenido = area_autom.getText();
				Main.run(contenido);
				FileWriter archivo = null;
		        PrintWriter pw = null;
				try{
		            archivo = new FileWriter("entrada.olc");
		            pw = new PrintWriter(archivo);
		            pw.println(contenido);
		            archivo.close();
		            
		        }catch (Exception es) {
		            System.out.println(es +" 1");
		        }

				
			}
		});
		b_run.setBackground(Color.GREEN);
		b_run.setFont(new Font("Broadway", Font.PLAIN, 14));
		b_run.setBounds(783, 81, 92, 34);
		prin_aut.add(b_run);
		
		
		
		
		
	
	}
}
