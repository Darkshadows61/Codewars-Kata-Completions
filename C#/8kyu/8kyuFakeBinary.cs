using System.Linq;

public class Kata
{
  public static string FakeBin(string x)
  {
    return string.Concat(x.Select(a => a < '5' ? "0" : "1"));
  }
}