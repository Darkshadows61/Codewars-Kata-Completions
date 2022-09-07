using System;
using System.Linq;

public static class Kata
{
  public static int Sum(int[] numbers)
  { 
    if (numbers == null || numbers.Length < 2) {
      return 0;
      }
    
    int final = numbers.Sum() - (numbers.Min() + numbers.Max());
    return final;
  }
}