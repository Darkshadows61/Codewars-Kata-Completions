namespace Solution
{
  public static class Program
  {
    public static double basicOp(char operation, double value1, double value2)
    {
      double result = 0 ;
      if (operation == '+') {
        result = (value1 + value2);
      } else if (operation == '-') {
        result = (value1 - value2);
      } else if (operation == '*') {
        result = (value1 * value2);
      } else if (operation == '/') {
        result =  (value1 / value2);
      }
      return result;
    }
  }
}