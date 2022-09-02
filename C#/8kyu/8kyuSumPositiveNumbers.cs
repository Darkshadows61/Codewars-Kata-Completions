using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
      int sum = 0;
      for (int i = 0; i < arr.Length; i++) {
        if (arr[i] > 0) {
        sum += arr[i];
    }
        }
    return sum;
  }
}
