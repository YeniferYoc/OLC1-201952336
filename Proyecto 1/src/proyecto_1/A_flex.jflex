package proyecto_1;
import java_cup.runtime.*;

import java.util.LinkedList;

%%



//directrices
//java -jar jflex-full-1.7.0.jar A_flex.jflex

%public 
%class Analizador_Lexico
%cupsym Simbolos
%cup
%char
%column
%full
%ignorecase
%line
%unicode


L=[a-zA-Z]
D=[0-9]
COMENTUNILINEA      =   ("//".*\r\n)|("//".*\n)|("//".*\r)
COMENTMULTILINEA    =   "/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*"*"*/"
espacio=[ \r\t\n]+
comentario_linea = ("//".*)
cad = ("\""[^"\""]+"\"")
asc_ = "\'\$""\{"[0-9]+"\}\'"|'{L}'

%{
    public LinkedList<Mi_error> errores = new LinkedList<>();
%}



%%


//EXPRESIONES REGULARES 
<YYINITIAL>{espacio} {/*Ignore*/}


                                    
<YYINITIAL>(_){L}({L}|{D})*(_) {
					System.out.println("Reconocio token:<identificador> lexema:"+yytext());
                    return new Symbol(Simbolos.identificador, yycolumn, yyline, yytext());
                  }
<YYINITIAL> {cad}  {
					System.out.println("Reconocio token:<cadena> lexema:"+yytext());
                    return new Symbol(Simbolos.cadena, yycolumn, yyline, yytext());
                  }                   
<YYINITIAL>{asc_}   {
System.out.println("Reconocio token:<caracter> lexema:"+yytext());
                    return new Symbol(Simbolos.caracter, yycolumn, yyline, yytext());
                  }

<YYINITIAL>{D}+("."{D}+|"")  {
System.out.println("Reconocio token:<numero> lexema:"+yytext());
                    return new Symbol(Simbolos.numero, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>("verdadero"|"falso")  {
System.out.println("Reconocio token:<boolean_> lexema:"+yytext());
                    return new Symbol(Simbolos.boolean_, yycolumn, yyline, yytext()); 
                    }                    
                    
                    
                    
//PALABRAS RESERVADAS ----------------------------------------------------
<YYINITIAL>("cadena"|"numero"| "caracter"|"boolean")   {
                   System.out.println("Reconocio token:<tipo_dato> lexema:"+yytext());
                    return new Symbol(Simbolos.tipo_dato, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"inicio"   {
                   System.out.println("Reconocio token:<pr_inicio> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_inicio, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"fin"   {
                   System.out.println("Reconocio token:<pr_fin> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_fin, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"potencia"   {
System.out.println("Reconocio token:<pr_pot> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_pot, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"mod"  {
System.out.println("Reconocio token:<pr_mod> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_mod, yycolumn, yyline, yytext()); 
                    }

<YYINITIAL>"ingresar"   {
System.out.println("Reconocio token:<pr_ingresar> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_ingresar, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"como"  {
					System.out.println("Reconocio token:<pr_como> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_como, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>"con_valor"   {
					System.out.println("Reconocio token:<pr_convalor> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_convalor, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"si"   {
					System.out.println("Reconocio token:<pr_si> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_si, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"entonces"  {
					System.out.println("Reconocio token:<pr_entonces> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_entonces, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>"fin_si"   {
					System.out.println("Reconocio token:<pr_fin_si> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_finsi, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"de_lo_contrario"   {
					System.out.println("Reconocio token:<pr_contrario> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_contrario, yycolumn, yyline, yytext());
                  }
                    
<YYINITIAL>"o_si"   {
					System.out.println("Reconocio token:<pr_o_si> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_o_si, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"segun"   {
					System.out.println("Reconocio token:<pr_segun> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_segun, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"hacer"   {
					System.out.println("Reconocio token:<pr_hacer> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_hacer, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"de_lo_contrario_entonces"   {
					System.out.println("Reconocio token:<pr_contra_entonces> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_contra_entonces, yycolumn, yyline, yytext());
                  }
"fin_segun"   {
					System.out.println("Reconocio token:<pr_f_segun> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_f_segun, yycolumn, yyline, yytext());
                  }                  
<YYINITIAL>"para"   {
					System.out.println("Reconocio token:<pr_para> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_para, yycolumn, yyline, yytext());
                  }                   
<YYINITIAL>"fin_para"   {
					System.out.println("Reconocio token:<pr_fin_para> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_fin_para, yycolumn, yyline, yytext());
                  }                     
<YYINITIAL>"hasta"   {
					System.out.println("Reconocio token:<pr_hasta> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_hasta, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"con"  {
					System.out.println("Reconocio token:<pr_con> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_con, yycolumn, yyline, yytext()); 
                    }
<YYINITIAL>"incremental"  {
					System.out.println("Reconocio token:<pr_incremento> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_incremento, yycolumn, yyline, yytext()); 
                    }                    
<YYINITIAL>"mientras"   {
					System.out.println("Reconocio token:<pr_mientras> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_mientras, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_mientras"   {
					System.out.println("Reconocio token:<pr_f_mientras> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_f_mientras, yycolumn, yyline, yytext());
                  }   
<YYINITIAL>"repetir"   {
					System.out.println("Reconocio token:<pr_repetir> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_repetir, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"hasta_que"  {
					System.out.println("Reconocio token:<pr_hastaq> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_hastaq, yycolumn, yyline, yytext()); 
                    }
                    
<YYINITIAL>"retornar"   {
					System.out.println("Reconocio token:<pr_retornar> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_retornar, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"metodo"   {
					System.out.println("Reconocio token:<pr_metodo> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_metodo, yycolumn, yyline, yytext());
                  }               
<YYINITIAL>"con_parametros"   {
					System.out.println("Reconocio token:<pr_param> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_param, yycolumn, yyline, yytext());
                  }                    
<YYINITIAL>"fin_metodo"   {
					System.out.println("Reconocio token:<pr_f_metodo> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_f_metodo, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"funcion"   {
					System.out.println("Reconocio token:<pr_funcion> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_funcion, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"fin_funcion"   {
					System.out.println("Reconocio token:<pr_f_funcion> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_f_funcion, yycolumn, yyline, yytext());
                  }                   
<YYINITIAL>"ejecutar"   {
					System.out.println("Reconocio token:<pr_ejecutar> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_ejecutar, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"imprimir"  {
					System.out.println("Reconocio token:<pr_imprimir> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_imprimir, yycolumn, yyline, yytext()); 
                    }
<YYINITIAL>"imprimir_nl"  {
					System.out.println("Reconocio token:<pr_imprimir_nl> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_imprimir_nl, yycolumn, yyline, yytext()); 
                    }





//SIMBOLOS ----------------------------------------------------

<YYINITIAL>"+"   {
					System.out.println("Reconocio token:<s_suma> lexema:"+yytext());            
                    return new Symbol(Simbolos.s_suma, yycolumn, yyline, yytext());
                  }
<YYINITIAL>"-"   {
					System.out.println("Reconocio token:<s_resta> lexema:"+yytext());
                    return new Symbol(Simbolos.s_resta, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"*"   {
					System.out.println("Reconocio token:<s_mult> lexema:"+yytext());
                    return new Symbol(Simbolos.s_mult, yycolumn, yyline, yytext());
                  }


<YYINITIAL>"/"   {
					System.out.println("Reconocio token:<s_div> lexema:"+yytext());
                    return new Symbol(Simbolos.s_div, yycolumn, yyline, yytext());
                  }

<YYINITIAL>","   {
					System.out.println("Reconocio token:<s_coma> lexema:"+yytext());
                    return new Symbol(Simbolos.s_coma, yycolumn, yyline, yytext());
                  }

                    
<YYINITIAL>"("   {
					System.out.println("Reconocio token:<par_a> lexema:"+yytext());
                    return new Symbol(Simbolos.par_a, yycolumn, yyline, yytext());
                  }
<YYINITIAL>")"   {
					System.out.println("Reconocio token:<par_c> lexema:"+yytext());
                    return new Symbol(Simbolos.par_c, yycolumn, yyline, yytext());
                  }

<YYINITIAL>";"   {
					System.out.println("Reconocio token:<s_puntoComa> lexema:"+yytext()+"ddd");
                    return new Symbol(Simbolos.s_puntoComa, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"->"  {
					System.out.println("Reconocio token:<s_asignacion> lexema:"+yytext());
                    return new Symbol(Simbolos.s_asignacion, yycolumn, yyline, yytext()); 
                    }
<YYINITIAL>"¿"   {
					System.out.println("Reconocio token:<s_interrogacion_a> lexema:"+yytext());
                    return new Symbol(Simbolos.s_interrogacion_a, yycolumn, yyline, yytext());
                  }

<YYINITIAL>"?"  {
					System.out.println("Reconocio token:<s_interrogacion_c> lexema:"+yytext());
                    return new Symbol(Simbolos.s_interrogacion_c, yycolumn, yyline, yytext()); 
                    } 
                                         
<YYINITIAL>"menor"  {
					System.out.println("Reconocio token:<menorque> lexema:"+yytext());
                    return new Symbol(Simbolos.menorque, yycolumn, yyline, yytext()); 
                    }                    
<YYINITIAL>"mayor"  {
					System.out.println("Reconocio token:<mayorque> lexema:"+yytext());
                    return new Symbol(Simbolos.mayorque, yycolumn, yyline, yytext()); 
                    }   
<YYINITIAL>"menor_o_igual"  {
					System.out.println("Reconocio token:<menor igual> lexema:"+yytext());
                    return new Symbol(Simbolos.menorigual, yycolumn, yyline, yytext()); 
                    }                    
<YYINITIAL>"mayor_o_igual"  {
					System.out.println("Reconocio token:<mayor igual> lexema:"+yytext());
                    return new Symbol(Simbolos.mayorigual, yycolumn, yyline, yytext()); 
                    }   
<YYINITIAL>"es_igual"  {
					System.out.println("Reconocio token:<igual> lexema:"+yytext());
                    return new Symbol(Simbolos.igual, yycolumn, yyline, yytext()); 
                    }                    
<YYINITIAL>"es_diferente"  {
					System.out.println("Reconocio token:<diferente> lexema:"+yytext());
                    return new Symbol(Simbolos.diferente, yycolumn, yyline, yytext()); 
                    } 
<YYINITIAL>"or"  {
					System.out.println("Reconocio token:<or> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_or, yycolumn, yyline, yytext()); 
                    }  
<YYINITIAL>"and"  {
					System.out.println("Reconocio token:<and> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_and, yycolumn, yyline, yytext()); 
                    } 
<YYINITIAL>"not"  {
					System.out.println("Reconocio token:<not> lexema:"+yytext());
                    return new Symbol(Simbolos.pr_not, yycolumn, yyline, yytext()); 
                    }     
<YYINITIAL>"["  {
					System.out.println("Reconocio token:<cor_a> lexema:"+yytext());
                    return new Symbol(Simbolos.cor_a, yycolumn, yyline, yytext()); 
                    }                    
<YYINITIAL>"]"  {
					System.out.println("Reconocio token:<cor_c> lexema:"+yytext());
                    return new Symbol(Simbolos.cor_c, yycolumn, yyline, yytext()); 
                    }  


//COMENTARIOS -------------------------------------------------------------

<YYINITIAL>{comentario_linea}	{
					System.out.println("Reconocio token:<comen_linea> lexema:"+yytext());
                    return new Symbol(Simbolos.comen_linea, yycolumn, yyline, yytext()); 
                   }
                    
<YYINITIAL>{COMENTMULTILINEA}  {
					System.out.println("Reconocio token:<comentario de linea multiple> lexema:"+yytext());
                    return new Symbol(Simbolos.comen_m_linea_a, yycolumn, yyline, yytext());
                  }
<YYINITIAL>{COMENTUNILINEA} {
					System.out.println("Reconocio token:<comentario> lexema:"+yytext());
                    return new Symbol(Simbolos.comen_m_linea_, yycolumn, yyline, yytext());
                  }



             


[ \t\r\n\f]         {  /*este es un comentario en java, omitirlos*/ }


.                   { System.out.println("Error Lexico : "+yytext()+"Linea"+(yyline+1)+" Columna "+yycolumn);
errores.add(new Mi_error((String)yytext(), yycolumn, yyline)); 
 //for(int i = 0; i<errores.size(); i++){
 //System.out.println(errores.get(i).lexema+" fila "+errores.get(i).fila +" Columna "+errores.get(i).columna);
 
// }    

}
