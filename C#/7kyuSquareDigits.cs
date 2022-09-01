using System;
using System.Linq;

public class Kata
{
  public static int SquareDigits(int n)
  {
    var num = n.ToString().Select(c => (c - '0') * (c - '0')).ToList();
            return Convert.ToInt32(String.Join("", num));
  }
}