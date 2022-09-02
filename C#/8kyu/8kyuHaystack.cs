using System;
public class Kata
{
  public static string FindNeedle(object[] haystack)
  {
    string item = "needle";
    var result = Array.IndexOf(haystack, item);
    return $"found the needle at position {result}";
  }
}