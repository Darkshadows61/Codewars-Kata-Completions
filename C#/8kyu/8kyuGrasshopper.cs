using System;

public class Kata
{
  public static bool CheckForFactor(int num, int factor)
  {
    int result = num%factor;
    if (result == 0) {
      return true;
    }else {
      return false;
    }
  }
}