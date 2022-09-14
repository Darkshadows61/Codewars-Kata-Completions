using System;
using System.Linq;

public class Kata
{
  public static int FindShort(string s)
  {
    string[] S = s.Split(" ");
    Array.Sort(S, (x,y) => (x.Length.CompareTo(y.Length)));
    return S[0].Length;
  }
}