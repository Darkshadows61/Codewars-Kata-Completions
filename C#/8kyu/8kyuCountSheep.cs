using System;
using System.Linq;

public static class Kata
{
  public static string CountSheep(int n)
  {
    string result = $"";
    if (n == 0) {
      return "";
    } else {
    for ( int i = 1; i<=n; i++) {
       result += $"{i} sheep...";
      }
    }
    return result;
  }
}