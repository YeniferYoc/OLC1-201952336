 
%{
    const {Operacion} = require('./Operacion');
    const {Relacional} = require('./Relacional');
    const {Relational_op} = require ('./Simbolo_rel')
    const {Acceso_arr} = require('./Acceso_arr');
    const {Acceso_mat} = require('./Acceso_mat');
    const {Variable} = require('./Variable');
    const {Si} = require('./Si');
    const {Retornando} = require('./Retornando');
    const {Segun} = require('./Segun');
    const {Imprimir} = require('./Imprimir');
    const {Imprimir_nl} = require('./Imprimir_nl');    
    const {Instrucciones} = require('./Instrucciones');
    const {Mientras} = require('./Mientras');
     const {Matriz} = require('./Matriz');
    const {Declaracion} = require('./Declaracion');
    const {DoUntil} = require('./DoUntil');
    const {Asignacion} = require('./Asignacion');
    const {OperadorTernario} = require('./OperadorTernario');
    const {DoWhile} = require('./Dowhile');
    const {Para} = require('./Para');
    const {Incremento} = require('./Incremento');
    const {Funcion} = require('./Funcion');
    const {LLAMADA} = require('./LLAMADA');
    const {Break_} = require('./Break');
    const {Continue_} = require('./Continue');
    const {Run} = require('./Run');
    const {Tipo} = require('./Tipo');
    const {To_arr} = require('./To_arr');
    const {To_lower} = require('./To_lower');
    const {To_string} = require('./To_string');
    const {To_upper} = require('./To_upper');
    const {Redondear} = require('./Redondear');
    const {Parseo} = require('./Parseo');
    const {Vector} = require('./Vector');
    const {Arreglo_mod} = require('./Arreglo_mod');
    const {Acceso} = require('./Acceso');
    const {Aritmetic_s} = require('./Aritmetic_s');
    const {Incre} = require('./Incre')
    const {Incremento_op} = require('./Incremento_op')
    const {Type} = require('./Ret')
    const {Logica} = require('./Logica')
    const {Logico_op} = require('./Logico_op')
    const {Asignar_arreglo} = require('./Asignar_arreglo')
    const {Asignar_mat} = require('./Asignar_mat')
    const { Longitud}=  require("./Longitud")
    const { Union}=  require("./Union")
    const { Error_det } =require("./Error_det")
%}

%lex 


%options case-insensitive


%%

\s+											// se ignoran espacios en blanco
"//".*										{console.log("reconoci comentario linea"); }
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			{console.log("reconoci comentario multilinea"); }

//palabras reservadas
"if"          {console.log("reconoci pr_si "); return 'pr_si'} 
"else"          {console.log("reconoci pr_contrario"); return 'pr_contrario'}
"elif"          {console.log("reconoci pr_elif"); return 'pr_elif'}
"print"          {console.log("reconoci pr_imprimir"); return 'pr_imprimir'}
"println"          {console.log("reconoci pr_imprimir_ln"); return 'pr_imprimir_ln'}
"switch"          {console.log("reconoci pr_segun"); return 'pr_segun'}
"case"          {console.log("reconoci pr_case"); return 'pr_case'}
"default"          {console.log("reconoci pr_default"); return 'pr_default'}
"break"          {console.log("reconoci pr_break"); return 'pr_break'}
"while"          {console.log("reconoci pr_while"); return 'pr_while'}
"for"          {console.log("reconoci pr_for"); return 'pr_for'}
"do"          {console.log("reconoci pr_do"); return 'pr_do'}
"until"          {console.log("reconoci pr_until"); return 'pr_until'}
"return"         {console.log("reconoci pr_retorno"); return 'pr_retorno'}
"continue"          {console.log("reconoci pr_continue"); return 'pr_continue'}
"tolower"             {console.log("reconoci pr_minuscula"); return 'pr_minuscula'}
"toupper"             {console.log("reconoci pr_mayuscula"); return 'pr_mayuscula'}
"round"             {console.log("reconoci pr_redondear"); return 'pr_redondear'}
"void"              {console.log("reconoci pr_void"); return 'pr_void'}
"length"            {console.log("reconoci pr_longi"); return 'pr_longi'}
"typeof"            {console.log("reconoci pr_tipo"); return 'pr_tipo'}
"tostring"            {console.log("reconoci pr_a_cadena"); return 'pr_a_cadena'}
"tochararray"            {console.log("reconoci pr_arreglo"); return 'pr_arreglo'}
"push"            {console.log("reconoci pr_push"); return 'pr_push'}
"pop"              {console.log("reconoci pr_pop"); return 'pr_pop'}
"run"               {console.log("reconoci pr_run"); return 'pr_run'}


//tipos de datos 
"int"              {console.log("reconoci pr_int"); return 'pr_int'}
"double"             {console.log("reconoci pr_double"); return 'pr_double'}
"boolean"             {console.log("reconoci pr_boolean"); return 'pr_boolean'}
"char"             {console.log("reconoci pr_char"); return 'pr_char'}
"string"             {console.log("reconoci pr_string"); return 'pr_string'}
"true"             {console.log("reconoci pr_true"); return 'pr_true'}
"false"              {console.log("reconoci pr_false"); return 'pr_false'}
"new"              {console.log("reconoci pr_new"); return 'pr_new'}

//signos de escape
"\\n"             {console.log("reconoci salto_de_linea"); return 'salto_de_linea'}
"\\\\"              {console.log("reconoci doble_b"); return 'doble_b'}
"\\\""           {console.log("reconoci com_doble"); return 'com_doble'}
"\\t"              {console.log("reconoci tab"); return 'tab'}
"\\\'"              {console.log("reconoci simple_barra"); return 'simple_barra'}

//aritmeticos

"++"             {console.log("reconoci  ++"); return '++'}

"--"             {console.log("reconoci  --"); return '--'}
"*"             {console.log("reconoci * "); return '*'}
"/"             {console.log("reconoci / "); return '/'}
"^"             {console.log("reconoci ^ "); return '^'}
"%"             {console.log("reconoci % "); return '%'}
"+"             {console.log("reconoci + "); return '+'}
"-"              {console.log("reconoci - "); return '-'}
//relacionales {console.log("reconoci  ");
">="             {console.log("reconoci >=  "); return '>='}
"<="            {console.log("reconoci  <= ");  return '<='}
"=="            {console.log("reconoci  == ");  return '=='}

">"             {console.log("reconoci > "); return '>'}
"<"             {console.log("reconoci < "); return '<'}


"!="             {console.log("reconoci !=  "); return '!='}
"?"             {console.log("reconoci interrogacion_cierra "); return 'interrogacion_cierra'}
"="             {console.log("reconoci igual "); return 'igual' }

//logicos
"||"           {console.log("reconoci || ");  return '||'}
"&&"           {console.log("reconoci && ");  return '&&'}
"!"            {console.log("reconoci  ! "); return '!'}

//agrupacion
";"            {console.log("reconoci punto_c "); return 'punto_c'}
","            {console.log("reconoci coma "); return 'coma'}
"."            {console.log("reconoci punto "); return 'punto'}
":"            {console.log("reconoci dos_puntos "); return 'dos_puntos'}
"{"            {console.log("reconoci llave_abre "); return 'llave_abre'}
"}"            {console.log("reconoci llave_cierra "); return 'llave_cierra'}
"("            {console.log("reconoci par_abre "); return 'par_abre'}
")"            {console.log("reconoci par_cierra "); return 'par_cierra'}
"["            {console.log("reconoci cor_abre "); return 'cor_abre'}
"]"            {console.log("reconoci cor_cierra "); return 'cor_cierra'}
"+="			{console.log("reconoci O_MAS ");	return 'O_MAS';}
"-="			{console.log("reconoci O_MENOS ");	return 'O_MENOS';}
"*="			{console.log("reconoci O_POR ");	return 'O_POR';}
"/="			{console.log("reconoci O_DIVIDIDO ");	return 'O_DIVIDIDO';}


\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2);console.log("reconoci cadena "); return 'cadena'; }
[0-9]+("."[0-9]+)  	{console.log("reconoci decimal "); return 'decimal';}
[0-9]+         			{console.log("reconoci entero"); return 'entero'}
([a-zA-Z])[a-zA-Z0-9_]*	{console.log("reconoci identificador "); return 'identificador';}

\'[^\']*\' {console.log("reconoci caracter "); return 'caracter'}
<<EOF>>				return 'EOF';
.					{ 
      let lexicos= Union.getInstance()
            lexicos.add_error(new Error_det("Lexico","No se reconoce "+yytext,yylloc.first_line, yylloc.first_column));
    
    console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex




//PRECEDENCIA 
%left '+'
%left '^' '-'
%left '*' '/'
%left '%'
%left UMENOS
%left '=='
%left '!=' '>='
%left '<=' '>'
%left '<' '||'
%left '&&'
%right '!'


%start Init

%%

Init    
    : INSTRUCCIONES EOF  {  console.log("termine de analizar"); return $1; }
    |error EOF {console.log("ERROR SINTACTICO "+yytext +" en la linea "+yylineno  );}
  //  |error EOF {console.log("ERROR SINTACTICO, NO SE ESPERABA: "+yytext +" en la linea "+yylineno  );}
    //|error punto_c {console.log("ERROR SINTACTICO, NO SE ESPERABA: "+yytext +" en la linea "+yylineno  );}
;

INSTRUCCIONES
    : INSTRUCCIONES INSTRUCCION  { $1.push($2); $$ = $1; }
    | INSTRUCCION               { $$ = [$1];            }
;

INSTRUCCION
    : BLOQUE                {  $$ = $1;  }
    | DECLARACION             punto_c {  $$ = $1;  }
    | CASTEO             punto_c {  $$ = $1;  }
    | ASIGNACION        punto_c {  $$ = $1;  }
    | INCREDECRE        punto_c {  $$ = $1;  }
    | PRINT punto_c {  $$ = $1;  }
    | ARRAY          punto_c {  $$ = $1;  }
    | MATRIZ          punto_c {  $$ = $1;  }
    | Asignar_arr          punto_c {  $$ = $1;  }
    | IF                 {  $$ = $1;  }
    | SEGUN           {  $$ = $1;  }
    | MIENTRAS              {  $$ = $1;  }
    | PARA                   {  $$ = $1;  }
    | DOWHILE           {  $$ = $1;  }
    | DOUNTIL           {  $$ = $1;  }
    | OP_TERNARIO       punto_c {  $$ = $1;  }
    | FUNCION               {  $$ = $1;  }
    | LLAMADA       punto_c {  $$ = $1;  }
    | RETORNO       punto_c {  $$ = $1;  }
    | ARRAY_PQ      punto_c {  $$ = $1;  }
    | RUN          punto_c {  $$ = $1;  }
    | pr_continue          punto_c {  $$ = new Continue_( @1.first_line, @1.first_column);  }
    | pr_break          punto_c {  $$ = new Break_( @1.first_line, @1.first_column);  }
    /*| error             {  
                                console.log("error sintactico en linea " + (yylineno+1) );
                                //colocar el siguiente codigo en el archivo grammar.js en el= if(!recovering) como penultima instruccion
                                //let s=Union.getInstance();
                                //s.add_error(new error("Sintactico", `El caracter ${(this.terminals_[symbol] || symbol)} no se esperaba en esta posicion`, yyloc.last_line, yyloc.last_column+1))                  
                            } */
;



//DECLARACION --------------------------------------------------------------------------------------------------
OP_TERNARIO
    : par_abre expresion  par_cierra interrogacion_cierra OP_TERNARIO_ST dos_puntos OP_TERNARIO_ST { $$=new OperadorTernario($2, $5, $7 ,@4.first_line, @4.first_column ); }
;
OP_TERNARIO_ST
    : expresion   { $$=$1; }
    
;

DECLARACION
    : TIPOS LISTAIDS igual expresion  { $$ = new Declaracion($2, $1, $4,null, @1.first_line, @1.first_column ); }
    |TIPOS LISTAIDS igual  OP_TERNARIO    { $$ = new Declaracion($2, $1, $4,null, @1.first_line, @1.first_column ); }
    |TIPOS LISTAIDS igual  CASTEO  expresion  { $$ = new Declaracion($2, $1, $5,$4, @1.first_line, @1.first_column ); }
    | TIPOS LISTAIDS  { $$ = new Declaracion($2, $1, null,null , @1.first_line, @1.first_column); }
;        
    
//ASIGANACION --------------------------------------------------------------------------------------------------

ASIGNACION
    : LISTAIDS igual expresion { $$ = new Asignacion($1, $3,null, @1.first_line, @1.first_column);  }
    | LISTAIDS igual OP_TERNARIO { $$ = new Asignacion($1, $3,null, @1.first_line, @1.first_column);  }
    | LISTAIDS igual CASTEO expresion { $$ = new Asignacion($1, $4,$3, @1.first_line, @1.first_column);  }
;

//PARSEO --------------------------------------------------------------------------------------------------

CASTEO
    : par_abre TIPOS par_cierra  { $$ = new Parseo($2, @1.first_line, @1.first_column ); }
;

//ARRAY --------------------------------------------------------------------------------------------------

ARRAY
    : TIPOS cor_abre cor_cierra identificador  igual pr_new TIPOS cor_abre expresion cor_cierra  { $$ = new Vector($4, null,$1 ,[],null,$9, @1.first_line, @1.first_column  ); }
    |TIPOS cor_abre cor_cierra identificador  igual  llave_abre PARAMETROS_LLAMADA llave_cierra  { $$ = new Vector($4, $7, $1,[],null,0, @1.first_line, @1.first_column  ); }
    |TIPOS cor_abre cor_cierra identificador  igual  TOCHAR  { $$ = new Vector($4, $6, $1,[],null,0, @1.first_line, @1.first_column  ); }
    |TIPOS cor_abre cor_cierra identificador  igual  pr_new TIPOS cor_abre CASTEO expresion cor_cierra  { $$ = new Vector($4, null,$1 ,[],$9,$10, @1.first_line, @1.first_column  ); }
;  
//ARRAY --------------------------------------------------------------------------------------------------

MATRIZ
    : TIPOS cor_abre cor_cierra cor_abre cor_cierra identificador  igual pr_new TIPOS cor_abre expresion cor_cierra cor_abre expresion cor_cierra  { $$ = new Matriz($6,[], $1,[],null, $11,null, $14, @1.first_line, @1.first_column  ); }
    |TIPOS cor_abre cor_cierra cor_abre cor_cierra identificador  igual llave_abre Llenar_mat llave_cierra  { $$ = new Matriz($6, $9, $1,[],null, 0,null ,0, @1.first_line, @1.first_column  ); }
    |TIPOS cor_abre cor_cierra cor_abre cor_cierra identificador  igual pr_new TIPOS cor_abre CASTEO expresion cor_cierra cor_abre CASTEO expresion cor_cierra  { $$ = new Matriz($6,[], $1,[],$11, $12, $15, $16,@1.first_line, @1.first_column  ); }
    |TIPOS cor_abre cor_cierra cor_abre cor_cierra identificador  igual pr_new TIPOS cor_abre expresion cor_cierra cor_abre CASTEO expresion cor_cierra  { $$ = new Matriz($6,[], $1,[],null, $11, $14, $15,@1.first_line, @1.first_column  ); }
    |TIPOS cor_abre cor_cierra cor_abre cor_cierra identificador  igual pr_new TIPOS cor_abre CASTEO expresion cor_cierra cor_abre expresion cor_cierra  { $$ = new Matriz($6,[], $1,[],$11,$12,null, $15,@1.first_line, @1.first_column  ); }
;  
LLenar_mat 
    : Llenar_mat coma llave_abre PARAMETROS_LLAMADA llave_cierra{  $1.push($3);    $$ = $1;   }
    |llave_abre PARAMETROS_LLAMADA llave_cierra  {    $$ = [$1];                 }
   ;

Asignar_arr
    : identificador cor_abre expresion cor_cierra  igual expresion  { $$=new Asignar_arreglo($1, $3  , $6,@1.first_line, @1.first_column); }
    
;
Asignar_mat_
    : identificador cor_abre expresion cor_cierra cor_abre expresion cor_cierra  igual expresion  { $$=new Asignar_mat($1, $3  , $6, $9,@1.first_line, @1.first_column); }
    
;


//IF----------------------------------------------------------------------------------------------------
/*IF
        :pr_si par_abre expresion par_cierra  BLOQUE  {$$ = new Si($3, $5, null, false, null, null, false) ;}
	|pr_si par_abre expresion par_cierra  BLOQUE  pr_contrario  BLOQUE   {$$ = new Si($3, $5,null, false,null, $7, true) ;}
	|pr_si par_abre expresion par_cierra  BLOQUE  pr_contrario IF pr_contrario  BLOQUE  {$$ = new Si($3, $5,$6, true, $8, true) ;}
	|pr_si  par_abre expresion par_cierra BLOQUE   pr_contrario IF   {$$ = new Si($3, $5,$6, true, null, false) ;}
;*/
IF : 
    pr_si par_abre expresion par_cierra BLOQUE ELSE_ST { $$ = new Si($3, $5, $6, @1.first_line, @1.first_column);  }
;

ELSE_ST
    : pr_contrario BLOQUE { $$ = $2;   }
    | pr_contrario IF  { $$ = $2;   }
    |                 { $$ = null; }
;
//segun---------------------------------------------------------------------------------------------------------------------
SEGUN
	:pr_segun par_abre expresion par_cierra llave_abre  Cases llave_cierra //{$$ = new Segun($3, $6) ;}
	
;
Cases
    :  Cases  CASE DEFAULT
    | CASE
    |DEFAULT
    ;
CASE:
    pr_case expresion dos_puntos INSTRUCCIONES  pr_break punto_c
;
DEFAULT :
pr_default dos_puntos INSTRUCCIONES pr_break punto_c
;
//MIENTRAS---------------------------------------------------------------------------------------------------------------------
MIENTRAS	
	:pr_while par_abre expresion par_cierra  BLOQUE  {$$ = new Mientras($3, $5,  @1.first_line, @1.first_column) ;}
;	

//FOR-------------------------------------------------------------------------------------------------------------------------
PARA
    : pr_for par_abre DECLARACION_PARA punto_c expresion punto_c ITERADOR par_cierra BLOQUE { $$=new Para($3, $5, $7 , $9, @1.first_line, @1.first_column );   }
;

DECLARACION_PARA 
    : DECLARACION        { $$=$1; } 
    | ASIGNACION { $$=$1; } 
;

ITERADOR
    : ASIGNACION  { $$=$1; }
    | INCREDECRE  { $$=$1; }
   ;

INCREDECRE
    :   '++' identificador   { $$= new Incre($1,$2,@2.first_line,@2.first_column); }
    |   identificador  '++'  { $$= new Incre($2,$1,@1.first_line,@1.first_column); }
    |   identificador  '--'  { $$= new Incre($2,$1,@1.first_line,@1.first_column); }
    |   '--' identificador   { $$= new Incre($1,$2,@2.first_line,@2.first_column); }
;


DOWHILE
    : pr_do BLOQUE pr_while par_abre expresion par_cierra punto_c {  $$ = new DoWhile($5, $2, @1.first_line, @1.first_column);    }
;
DOUNTIL
    : pr_do BLOQUE pr_until par_abre expresion par_cierra punto_c {  $$ = new DoUntil($5, $2, @1.first_line, @1.first_column);    }
;


PRINT 
    : pr_imprimir par_abre expresion par_cierra  { $$ = new Imprimir($3  , @1.first_line, @1.first_column); }
    | pr_imprimir par_abre par_cierra  { $$ = new Imprimir(null, @1.first_line, @1.first_column); }
    |pr_imprimir_ln par_abre expresion par_cierra  { $$ = new Imprimir_nl($3  , @1.first_line, @1.first_column); }
    | pr_imprimir_ln par_abre      par_cierra  { $$ = new Imprimir_nl(null, @1.first_line, @1.first_column); }
;





/* --------------------------------------- funcion   -------------------------------------  */

FUNCION
    : identificador par_abre            par_cierra      dos_puntos  TIPOS      BLOQUE  { $$ = new Funcion($1, $6, [], $5, @1.first_line, @1.first_column); }
    | identificador par_abre PARAMETROS par_cierra     dos_puntos TIPOS         BLOQUE  { $$ = new Funcion($1, $7, $3, $6, @1.first_line, @1.first_column); }
    | identificador par_abre            par_cierra dos_puntos pr_void BLOQUE { $$ = new Funcion($1, $6, [], "void", @1.first_line, @1.first_column); }
    | identificador par_abre PARAMETROS par_cierra dos_puntos pr_void BLOQUE { $$ = new Funcion($1, $7, $3, "void",@1.first_line, @1.first_column); }
    | identificador par_abre            par_cierra  BLOQUE { $$ = new Funcion($1, $4, [], "void", @1.first_line, @1.first_column); }
    | identificador par_abre PARAMETROS par_cierra  BLOQUE { $$ = new Funcion($1, $5, $3, "void",@1.first_line, @1.first_column); }
;

RETORNO
    : pr_retorno expresion {$$ = new Retornando($2);}
    |pr_retorno{$$ = new Retornando("ret");}

;
LISTAIDS
    : LISTAIDS coma identificador   { $1.push($3); $$ = $1;  }
    |                identificador { $$ = [$1];             }
;
PARAMETROS
    : PARAMETROS coma TIPOS identificador   { $1.push($4+","+$3); $$ = $1;  }
    |               TIPOS identificador    { $$ = [$2+","+$1];             }
;

TIPOS
    : pr_int { $$=$1; }
    | pr_string  { $$=$1; }
    | pr_double  { $$=$1; }
    | pr_char  { $$=$1; }
    | pr_boolean  { $$=$1; }
;

LLAMADA
    : identificador par_abre                        par_cierra { $$ = new LLAMADA($1, [], @1.first_line, @1.first_column);  }
    | identificador par_abre PARAMETROS_LLAMADA par_cierra { $$ = new LLAMADA($1, $3, @1.first_line, @1.first_column);  }
;

PARAMETROS_LLAMADA 
    : PARAMETROS_LLAMADA coma expresion  {    $1.push($3);    $$ = $1;   }
    |                            expresion  {    $$ = [$1];                 }
;    

TOLOWER
    : pr_minuscula par_abre       expresion   par_cierra { $$ = new To_lower($3, @1.first_line, @1.first_column);  }
   ;
TOUPPER
    : pr_mayuscula par_abre       expresion   par_cierra { $$ = new To_upper($3, @1.first_line, @1.first_column);  }
   ;

ROUND
    : pr_redondear par_abre       expresion   par_cierra { $$ = new Redondear($3,  @1.first_line, @1.first_column);  }
   ;
LENGTH
    : pr_longi par_abre       expresion   par_cierra { $$ = new Longitud($3,  @1.first_line, @1.first_column);  }
   ;
TYPEOF
    : pr_tipo par_abre       expresion   par_cierra { $$ = new Tipo($3, @1.first_line, @1.first_column);  }
   ;

TOSTRING
    : pr_a_cadena par_abre       expresion   par_cierra { $$ = new To_string($3,@1.first_line, @1.first_column);  }
   ;

TOCHAR
    : pr_arreglo par_abre       expresion   par_cierra  { $$ = new To_arr($3,  @1.first_line, @1.first_column);  }
   ;
ARRAY_PQ
    : identificador punto pr_push par_abre expresion par_cierra                        { $$=new Arreglo_mod($1 , $5  , true ,false, @1.first_line, @1.first_column); }
    | identificador punto pr_pop  par_abre par_cierra                             { $$=new Arreglo_mod($1, null, false,true , @1.first_line, @1.first_column); }
;

RUN
    : pr_run identificador par_abre par_cierra  { $$=new Run($2, null, @1.first_line, @1.first_column); }
    | pr_run identificador par_abre PARAMETROS_LLAMADA par_cierra { $$ = new Run($2, $4, @1.first_line, @1.first_column);  }
;
//bloque------------------------------------------------------------

BLOQUE
    : llave_abre INSTRUCCIONES  llave_cierra { $$ = new Instrucciones($2     , @1.first_line, @1.first_column); }
     | llave_abre              llave_cierra { $$ = new Instrucciones(new Array(), @1.first_line, @1.first_column); }
;






/*--------------------------------   Expresion -------------------------------------------*/

expresion 
    : '-'  expresion %prec UMENOS { $$ = new Operacion($2, $2, Aritmetic_s.NEGACION,        @1.first_line, @1.first_column); }       
    | identificador  '++'               { $$ = new Incremento(Incremento_op.INCREMENTO1, $1, @1.first_line, @1.first_column); } 
    | '++' identificador                { $$ = new Incremento(Incremento_op.INCREMENTO2, $2, @2.first_line, @2.first_column); } 
    | identificador  '--'               { $$ = new Incremento(Incremento_op.DECREMENTO1, $1, @1.first_line, @1.first_column); } 
    | '--' identificador                { $$ = new Incremento(Incremento_op.DECREMENTO2, $2, @2.first_line, @2.first_column); } 
    | expresion '+'  expresion { $$ = new Operacion($1, $3, Aritmetic_s.MAS            , @2.first_line, @2.first_column); }       
    | expresion '-' expresion { $$ = new Operacion($1, $3, Aritmetic_s.MENOS          , @2.first_line, @2.first_column); }
    | expresion '*'  expresion { $$ = new Operacion($1, $3, Aritmetic_s.MULTIPLICACION , @2.first_line, @2.first_column); }       
    | expresion '/'  expresion { $$ = new Operacion($1, $3, Aritmetic_s.DIV            , @2.first_line, @2.first_column); }
    | expresion '%'  expresion { $$ = new Operacion($1, $3, Aritmetic_s.MODULO         , @2.first_line, @2.first_column); }
    | expresion '^' expresion { $$ = new Operacion($1, $3, Aritmetic_s.POT            , @2.first_line, @2.first_column); }
    | expresion '<'  expresion { $$ = new Relacional($1, $3, Relational_op.MENOR          , @2.first_line, @2.first_column); }
    | expresion '<=' expresion { $$ = new Relacional($1, $3, Relational_op.MENORIGUAL     , @2.first_line, @2.first_column); }
    | expresion '>'  expresion { $$ = new Relacional($1, $3, Relational_op.MAYOR          , @2.first_line, @2.first_column); }
    | expresion '>=' expresion { $$ = new Relacional($1, $3, Relational_op.MAYORIGUAL     , @2.first_line, @2.first_column); }
    | expresion '==' expresion { $$ = new Relacional($1, $3, Relational_op.IGUAL          , @2.first_line, @2.first_column); }
    | expresion '!=' expresion { $$ = new Relacional($1, $3, Relational_op.DIFERENCIACION , @2.first_line, @2.first_column); }
    | expresion '&&' expresion { $$ = new Logica($1, $3,Logico_op.AND  , @2.first_line, @2.first_column); }
    | expresion '||' expresion { $$ = new Logica($1, $3,Logico_op.OR   , @2.first_line, @2.first_column); }
    | '!' expresion       { $$ = new Logica($2, $2,Logico_op.NOT  , @1.first_line, @1.first_column); }
    | TOCHAR  {  $$ = $1;  }
    | TOLOWER           {  $$ = $1;  }
    | TOUPPER           {  $$ = $1;  }
    | TOSTRING           {  $$ = $1;  }
    | LLAMADA           {  $$ = $1;  }
    | ROUND           {  $$ = $1;  }
    //| OP_TERNARIO        {  $$ = $1;  }
    | LENGTH           {  $$ = $1;  }
    | TYPEOF           {  $$ = $1;  }| tip  {  $$ = $1; }
    | identificador punto pr_longi          { $$= new Acceso_arr($1,false,false,null,null,@1.first_line, @1.first_column); }
    | identificador cor_abre CASTEO expresion cor_cierra           { $$= new Acceso_arr($1,false,false,$3,$4,@1.first_line, @1.first_column); }
    | identificador cor_abre CASTEO expresion cor_cierra cor_abre CASTEO expresion cor_cierra   { $$= new Acceso_mat($1,false,false,$3,$4,$7, $8, @1.first_line, @1.first_column); }
    | identificador cor_abre  expresion cor_cierra cor_abre CASTEO expresion cor_cierra     { $$= new Acceso_mat($1,false,false,null,$3,$6, $7, @1.first_line, @1.first_column); }
    | identificador cor_abre CASTEO expresion cor_cierra cor_abre  expresion cor_cierra           { $$= new Acceso_mat($1,false,false,$3,$4,null, $7, @1.first_line, @1.first_column); }
    | identificador cor_abre  expresion cor_cierra           { $$= new Acceso_arr($1,true ,true ,$3  ,@1.first_line, @1.first_column); }
    | identificador cor_abre  expresion cor_cierra cor_abre  expresion cor_cierra          { $$= new Acceso_mat($1,false,false,null,$3,null, $6, @1.first_line, @1.first_column); }
    
;

tip   
    : par_abre expresion par_cierra  {  $$ = $2; } 
    |cor_abre expresion cor_cierra  {  $$ = $2; } 
   // |CASTEO    {$$ = $1;}
    | entero      {  $$ = new Variable($1,                   Type.INT , @1.first_line, @1.first_column); }
    | decimal         {  $$ = new Variable($1,                   Type.DOUBLE , @1.first_line, @1.first_column); }
    | cadena        {  $$ = new Variable($1.replace(/\"/g,""), Type.STRING , @1.first_line, @1.first_column); }
    | caracter       {  $$ = new Variable($1.replace(/\'/g,""), Type.CHAR , @1.first_line, @1.first_column); }
    | pr_true          {  $$ = new Variable(true,                   Type.BOOLEAN, @1.first_line, @1.first_column); }
    | pr_false         {  $$ = new Variable(false,                   Type.BOOLEAN, @1.first_line, @1.first_column); }
    | identificador            {  $$ = new Acceso($1,@1.first_line, @1.first_column);  }
;
