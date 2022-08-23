using System.Linq;

public static class Kata 
{
    public static int summation(int num)
    {
      int sum = 0;
      int result = 0;
      for(int i = 0; i<num; i++){
        sum++;
        result += sum;
        }
      return result;
    }
}