using System;

public static class Kata
{
  public static bool ZeroFuel(uint distanceToPump, uint mpg, uint fuelLeft)
  {
    uint remain = fuelLeft * mpg;
    if (remain >= distanceToPump) {
      return true;
    } else {
      return false;
    }
  }
}