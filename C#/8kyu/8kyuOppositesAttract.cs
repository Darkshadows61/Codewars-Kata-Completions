using System;

public class LoveDetector
{
    public static bool lovefunc(int flower1, int flower2)
    { 
      int f1 = flower1 % 2;
      int f2 = flower2 % 2;
      if (f1 == 0 && f2 == 1) {
        return true;
      } else if (f1 == 1 && f2 == 0) {
        return true;
      } else {
        return false;
      }
     }
}