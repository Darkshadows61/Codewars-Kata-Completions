public class Kata
{
  public static int Grow(int[] x)
  {
    int result = 1;
    for (int i = 0; i<x.Length; i++) {
      result *= x[i];
    }
    return result;
  }
}