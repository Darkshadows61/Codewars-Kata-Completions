using System.Linq;
using System.Collections.Generic;
using System;

public class Kata
{
  public static int GetAverage(int[] marks)
  {
    int sum = marks.Sum();
    int avg = sum/(marks.Length);
    return avg;
  }
}