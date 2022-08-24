using System.Linq;

public static class Kata
{
  public static int CountSheeps(bool[] sheeps)
  {
    int result =0;
    for (int i = 0; i< sheeps.Length; i++) {
      if (sheeps[i] == true) {
        result++;
      }
    }
    return result;
  }
}