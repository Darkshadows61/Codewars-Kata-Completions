public class Kata
{
  public static string GetMiddle(string s)
  {
  int middle = s.Length/2;
  if (s.Length%2 != 0) {
    string result = s[middle].ToString();
    return result;
  } else {
    string result = s[middle-1].ToString() + s[middle].ToString();
    return result;
  }
  }
}