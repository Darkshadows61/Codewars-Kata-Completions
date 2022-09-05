public class Kata
{
  public static string Greet(string name, string owner)
  {
    if (name  == owner) {
      return "Hello boss";
    } else {
      return "Hello guest";
    }
  }  
}