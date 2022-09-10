using System.Linq;
using System;
public static class Kata 
{
  public static bool XO (string input)
  {
   
    input = input.ToLower();
    int count1 = input.Where(x => x == 'x').Count();
    int count2 = input.Where(x => x == 'o').Count();
    
    return (count1==count2);
  }
}