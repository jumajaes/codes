import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.Random;
import java.util.function.Function;
import java.util.function.IntBinaryOperator;
import java.util.stream.Stream;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        int i = 10;

//        System.out.println("iniciamos el método main con i = " + i);
//        System.out.println(STR."iniciamos el método main con i = \{i}");
//        System.out.println(new Date().getTime());
//        System.out.println(new Random().nextInt(1000));
        //Function<Integer,Integer> alcuadradoFunction = valor -> 0;
        Function<Integer,Double> alcuadradoFunction = valor -> Math.pow(valor, 2);
        IntBinaryOperator plusOperation = (a, b) -> a+b;
        int result = plusOperation.applyAsInt(10,5);

       System.out.println(alcuadradoFunction.apply(5));

       Function<String,String> saludar = nombre -> "hola "+nombre;
        System.out.println(saludar.apply("juan"));

    }
}