using System.Linq;

public static class Kata
{
  public static string[] Last(string x) => x.Split().OrderBy(s => s.Last()).ToArray();
}