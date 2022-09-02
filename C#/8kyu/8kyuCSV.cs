using System.Linq;

public static class Kata
{
  public static string ToCsvText(int[][] array)
  {
    return string.Join("\n", array.Select(x => string.Join(",", x)));
  }
}