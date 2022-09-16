using System;
using System.Linq;

public class Accumul 
{
	public static String Accum(string s) 
  {
    return String.Join("-", s.Select((c, i) => Char.ToUpper(c) + new String(Char.ToLower(c), i)));
  }
}