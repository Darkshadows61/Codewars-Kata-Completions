public class Kata
{
  public static string AbbrevName(string name)
  {
    string[] first = name.ToUpper().Split(' ');
    return $"{first[0][0]}" + "." + $"{first[1][0]}";
  }
}