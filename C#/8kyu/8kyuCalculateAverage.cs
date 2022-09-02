using System.Linq;

class AverageSolution
{
  public static double FindAverage(double[] array)
  {
    if (array.Length == 0) {
      return 0;
    } else {
      double sum = array.Sum();
      double result = sum/(array.Length);
      return result;
    } 
  }
} 