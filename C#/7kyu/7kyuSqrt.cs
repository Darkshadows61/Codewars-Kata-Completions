using System;

public class Kata
{
  public static bool IsSquare(int n)
  {
    double sqrt = Math.Sqrt(n);
    if (n < 0) {
      return false;
    } else if (sqrt%1 == 0) {
      return true;
    } else {
      return false;
    }
  }
}