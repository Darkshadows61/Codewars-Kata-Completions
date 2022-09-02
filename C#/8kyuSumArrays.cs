using System.Linq;

public class Kata
{
  public static double SumArray(double[] array)
  {
    if (array.Length == 0) {
      return 0;
    } else {
      return array.Sum();
    }
  }
}