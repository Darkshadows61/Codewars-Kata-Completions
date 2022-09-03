using System.Linq;

public class Kata
{
  public static bool BetterThanAverage(int[] ClassPoints, int YourPoints)
  {
    int classSum = ClassPoints.Sum();
    int classAvg = (classSum + YourPoints) / (ClassPoints.Length + 1);
    if (YourPoints > classAvg) {
      return true;
    } else {
      return false;
    }
  }
}