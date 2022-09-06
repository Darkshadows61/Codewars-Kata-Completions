using static System.Convert;
using System.Linq;

class Kata
{
  public static int SumMix(object[] x) => x.Sum(ToInt32);
}