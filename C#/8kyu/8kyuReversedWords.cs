using System;
using System.Linq;

public class Kata
{
  public static string ReverseWords(string str)
  {
    string[] array = str.Split(" ");
    Array.Reverse(array);
    return string.Join(" ", array);
  }
}