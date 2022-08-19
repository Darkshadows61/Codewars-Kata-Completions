using System;

public class Kata
{
    public static string Remove_char(string s)
    {
      string result =  s.Substring(1, s.Length-2);
      return result;
    }
}